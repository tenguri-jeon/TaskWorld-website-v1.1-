// checklist 
$(document).ready(function() {

    var isInputMode = false;
    var completed = true; 
    const taskChartWrapper = document.querySelectorAll('.task');
    const floatingSidebarModal = document.querySelector('.tw-floating-panel-desktop');
    const taskPropertiesCloseButton = document.querySelector('.tw-task-properties-header-options__close-button');
    let selectedTaskIndex = -1; // 전역 변수로 선택한 task의 index를 저장할 변수를 선언하고 초기값을 -1로 설정
    let clickedTaskIndex;

    function toggleInputMode(textElement) {
        // 클릭되었을 경우
        if (!isInputMode) {
            var divText = $(textElement).text().trim().replace(/\s+/g, ' ');
            $('.ax-editable-panel-title').remove();
            var input = $('<input class="modify-input">').val(divText);
            $('#change-input').append(input);
            input.focus();
            isInputMode = true;
        } else {
            inputText = $('.modify-input').val().trim(); // 전역 변수에 할당
            $('.modify-input').remove();
            var newDiv = $('<div id="change-input" class="tw-task-properties-header__title-wrapper">' +
                '<div class="tw-click-area tw-editable-panel-title ax-editable-panel-title --editable --plain-text --clickable" role="button" tabindex="0" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="제목">' +
                    '<i class="tw-icon tw-editable-panel-title__icon ax-editable-panel-title__icon bi bi-pencil" style="line-height:;"></i>' +
                    '<div class="tw-editable-panel-title__text ax-editable-panel-title__text">' + inputText + '</div>' +
                    '<span style="display: none;"></span>' +
                '</div>' +
            '</div>');
            $('#change-input').replaceWith(newDiv);

            $('.task-header__title').eq(selectedTaskIndex).text(inputText)
            isInputMode = false;
        }
    }

    $(document).on('click', '#change-input', function() {
        toggleInputMode('.tw-editable-panel-title');
    });

    $(document).on('keypress', '.modify-input', function(event) {
        event.preventDefault();
        if (event.which === 13) {
            toggleInputMode('.tw-editable-panel-title');
        }
    });

    $('.task').each(function(index) {
        $(this).attr('data-task-index', index);
    });

    // task 클릭 시 background color 변경 및 sidebar 열기
    $(document).on('click', '.task', function() {
        debugger;
        var clickedElement = event.target;
        const clickedTask = $(this);
        clickedTaskIndex = $(this).data('task-index');
        const contain = clickedTask.hasClass('--is-selected');
        const componentName = clickedTask.find('.task-header__title').text();
            
        // 모든 task 초기화
        $('.task').removeClass('--is-selected');
        $('.task .task-meta-item').css('color', ''); 
    
        if (!contain) {
            // 조건 중 만약 area input박스를 누르면 나오지 않도록 설정
            if (clickedElement.classList.contains('task-checkbox')) {
                floatingSidebarModal.style.display = 'none';
                slidebarCompleted();
            }else{
                clickedTask.addClass('--is-selected');
                clickedTask.removeClass('--done');
                
                clickedTask.find('.task-meta-item').css('color', '#fff');
                
                floatingSidebarModal.style.display = 'block';
                belong()
                // checklist()
                // bigCheck()
                $('.ax-editable-panel-title').text(componentName);
                
                // 클릭한 task의 index를 저장
                selectedTaskIndex = $('.task').index(clickedTask);
            }
        } else {
            floatingSidebarModal.style.display = 'none';
        }
    });

    // 소속 이름 바꿔주기
    function belong(){
        const parent = $('.task').eq(clickedTaskIndex).closest('.tasklist')
        const text = parent.find('.editable-text-field__text').text()
        $('.tw-task-location-title__tasklist-title').text(text);
    }

    // sidebar열때마다 체크리스트 바꿔주기
    function checklist(){
        // 일단 열때마다 초기화 시켜줘야함 
        $('.tw-task-checklist-pane__item-wrapper').remove()
        // 초기화 했으면 main에 있는 글자 데이터 가져와서 , 그것의 length() 가져오고 그것만큼 생기도록 만들어줘야햠
        const number = $('.task').eq(clickedTaskIndex).find('.task-card-checklist__content').children().length
        classCounter = $('.task').eq(clickedTaskIndex).find('.task-card-checklist-item').attr('class')

        var newDiv = $('<div class="tw-task-checklist-pane__item-wrapper' + classCounter + '">' +
        '<div class="tw-task-checklist-item ax-task-checklist-item" data-title="리스트 제목" data-complete="true" style="opacity: 1;">' +
        '<div class="tw-task-checklist-item__checkbox-container">' +
        '<div class="tw-click-area tw-task-checkbox checklist-checkbox ax-task-checklist-item__checkbox --large --clickable" role="button" tabindex="0">' +
        '<i class="tw-icon tw-task-checkbox__check-mark bi bi-check-lg"></i>' +
        '<span style="display: none;"></span>' +
        '</div>' +
        '</div>' +
        '<div class="tw-task-checklist-item__label-container ax-task-checklist-item__label-container" draggable="true">' +
        '<div>' +
        '<div class="tw-click-area tw-checklist-assignee ax-checklist-assignee --clickable" role="button" tabindex="0">' +
        '<div class="tw-checklist-assignee__no-assignee">' +
        '<i class="tw-icon bi bi-person-plus"></i>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="tw-task-checklist-item__label">' +
        '<div class="tw-task-checklist-item__label-title ax-task-checklist-item__label-title">' +
        '<div class="tw-editable-text-area ax-editable-text-area --editable --plain-text">' +
        '<i class="tw-icon tw-editable-text-area__icon bi bi-pencil"></i>' +
        '<article class="tw-markdown-content tw-editable-text-area__text ax-editable-text-area__text">' +
        '<p>' + enteredText + '</p>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="tw-click-area tw-task-checklist-item__delete-button ax-task-checklist-item__delete-button --clickable" role="button" tabindex="0">' +
        '<i class="delete-checklist tw-icon bi bi-trash"></i>' +
        '</div>' +
        '</div>' +
        '</div>');

        // length가져왔으니 그것만큼 체크리스트 만들어주기
        // 컴포넌트 가져왔고 클릭한 애의 이름 가져오고 그거에 맞게 
        // 클래스 이름 부여해 주면 연동 가능!
        for (let i = 0; i < number.length; i++) {
            var enteredText = $('.'+ classCounter).find('.markdown-line').eq(i).text()
            var clonedDiv = newDiv.clone();
            $('.tw-task-add-checklist-item').before(clonedDiv);
        }
    }

    // 컴포넌트 열때마다 체크박스 확인 후,sidebar와 연동
    function bigCheck(){
        const contain = $('.task').eq(clickedTaskIndex).find('.task-checkbox').hasClass('--completed')
        console.log(contain)
        if (!contain) {
            completed = false;
            slidebarCompleted()
        }else{
            completed = true;
            slidebarCompleted()
        }
    }
        
    // .tw-color-label.--bg-purple를 클릭할 때
    $('.tw-color-label.--bg-purple').click(function() {
        const selectedTask = $('.task.--is-selected');
        const taskColor = selectedTask.find('.task__task-color, .task-color');
        
        taskColor.removeClass(function(index, className) {
            return (className.match(/--bg-.+/) || []).join(' ');
        });
        taskColor.addClass('--bg-purple');
    });
    // .tw-color-label.--bg-blue를 클릭할 때
    $('.tw-color-label.--bg-blue').click(function() {
        const selectedTask = $('.task.--is-selected');
        const taskColor = selectedTask.find('.task__task-color, .task-color');
        
        taskColor.removeClass(function(index, className) {
            return (className.match(/--bg-.+/) || []).join(' ');
        });
        taskColor.addClass('--bg-blue');
    });

    // 체크리스트 input -> 내용 수정변경
    $(document).ready(function() {
        var isInputMode = false;
        var clickedElementIndex = null;
        var inputText = '';
        var classCounter = 0;
        var thirdClassName;
        
        function toggleInputMode(textElement, clickedIndex) {
            var checklistname = $(textElement).eq(clickedIndex).text().replace(/\s/g, '');
            if (!isInputMode) {
                var checklistName = $(textElement).eq(clickedIndex).text().replace(/\s/g, '');
                $('.ax-editable-text-area').eq(clickedIndex).remove();
                var newDiv = $('<div class="tw-text-editor-guide">').append(
                    $('<div style="flex-direction: column;" class="tw-task-add-checklist-item">').append(
                        $('<textarea class="checklist-input" style="height: 26px;">').val(checklistName),
                        $('<div class="tw-task-add-checklist-item__enter-to-save" style="display: flex; justify-content: space-around; justify-content: space-between;">').append(
                            $('<span>').text('shift-Enter로 줄바꿈'),
                            $('<span>').html('"굵게" ..기울임.. "취소선" &gt; 인용 \'코드\'')
                        )
                    )
                );
                $('.ax-task-checklist-item__label-title').eq(clickedIndex).append(newDiv);
                $('.checklist-input').focus();
                isInputMode = true;
            } else {
                var inputChecklistName = $('.checklist-input').val();
                $('.tw-text-editor-guide').eq(0).remove();
                var newDiv = $('<div class="tw-editable-text-area ax-editable-text-area --editable --plain-text">').append(
                    $('<i class="tw-icon tw-editable-text-area__icon bi bi-pencil"></i>'),
                    $('<article class="tw-editable-text-area__text ax-editable-text-area__text">').append(
                        $('<p class="checklist-input-text">').text(inputChecklistName)
                    )
                );
                
                $('task').eq(clickedIndex).find('task-card-checklist').removeClass('display')
                $('.ax-task-checklist-item__label-title').eq(clickedIndex).append(newDiv);
                // main checklist 내용 바뀜
                var classList = $('.checklist-input-text').eq(clickedIndex).closest('.tw-task-checklist-pane__item-wrapper')
                thirdClassName = classList.attr('class').split(' ')[1];
                $( '.' + thirdClassName).find('.markdown-line').text(inputChecklistName);
                isInputMode = false;
            }
        }
        // input에서 다른 곳 클릭시 text로 바뀜
        function handleOutsideClick(event) {
            textareaInputText = $('.checklist-input').eq(0).val();
            if (!$(event.target).closest('.editable-text-field__text').length) {
                if (inputText === textareaInputText || typeof textareaInputText === 'undefined') {
                    return;
                }
                toggleInputMode('.ax-editable-text-area', clickedElementIndex);
            }
        }
        // .tw-task-checklist-item__label를 클릭할 때 toggleInputMode를 실행하는 이벤트 핸들러
        $(document).on('click', '.tw-task-checklist-item__label', function() {
            clickedElementIndex = $(this).index('.tw-task-checklist-item__label');
            inputText = $('.checklist-input').eq(0).val();
            var clickInputText = $('.ax-editable-text-area').eq(clickedElementIndex).text();
            if (inputText === clickInputText || typeof inputText === 'undefined') {
                toggleInputMode('.ax-editable-text-area', clickedElementIndex);
                if (inputText && inputText.trim().length === 0) {
                    return;
                }
            } else {
                return;
            }
        });
        // input 클릭 시 text로 변환시키는 이벤트
        $('.tw-task-add-checklist-item__input').keypress(function (event) {
            if (event.which === 13) {
                event.preventDefault();
                inputText = $('.checklist-input').val().trim();
                if (inputText.length === 0) {
                    return;
                }
                toggleInputMode('.checklist-input-text', clickedElementIndex);
            }
        // 체크리스트 아이템 추가하기

        function addChecklistItem(enteredText, classCounter, selectedTaskIndex) {
            var newDiv = $('<div class="tw-task-checklist-pane__item-wrapper unique-class-name-' + classCounter + '">' +
                '<div class="tw-task-checklist-item ax-task-checklist-item" data-title="리스트 제목" data-complete="true" style="opacity: 1;">' +
                '<div class="tw-task-checklist-item__checkbox-container">' +
                '<div class="tw-click-area tw-task-checkbox checklist-checkbox ax-task-checklist-item__checkbox --large --clickable" role="button" tabindex="0">' +
                '<i class="tw-icon tw-task-checkbox__check-mark bi bi-check-lg"></i>' +
                '<span style="display: none;"></span>' +
                '</div>' +
                '</div>' +
                '<div class="tw-task-checklist-item__label-container ax-task-checklist-item__label-container" draggable="true">' +
                '<div>' +
                '<div class="tw-click-area tw-checklist-assignee ax-checklist-assignee --clickable" role="button" tabindex="0">' +
                '<div class="tw-checklist-assignee__no-assignee">' +
                '<i class="tw-icon bi bi-person-plus"></i>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="tw-task-checklist-item__label">' +
                '<div class="tw-task-checklist-item__label-title ax-task-checklist-item__label-title">' +
                '<div class="tw-editable-text-area ax-editable-text-area --editable --plain-text">' +
                '<i class="tw-icon tw-editable-text-area__icon bi bi-pencil"></i>' +
                '<article class="tw-markdown-content tw-editable-text-area__text ax-editable-text-area__text">' +
                '<p>' + enteredText + '</p>' +
                '</article>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="tw-click-area tw-task-checklist-item__delete-button ax-task-checklist-item__delete-button --clickable" role="button" tabindex="0">' +
                '<i class="delete-checklist tw-icon bi bi-trash"></i>' +
                '</div>' +
                '</div>' +
                '</div>');
        
            var checklistHTML = $('<div class="task-card-checklist">').append(
                $('<div class="task-card-checklist__content">')
            );
            
            var mainChecklistItem = $('<div class="click-area task-card-checklist-item unique-class-name-' + classCounter + '" role="button" tabindex="0">').append(
                $('<div class="task-card-checklist-item__checkbox-container">').append(
                    $('<div class="click-area task-checkbox --small" role="button" tabindex="0">').append(
                        $('<i class="icon task-checkbox__check-mark bi bi-check"></i>')
                    )
                ), $('<div class="task-card-checklist-item__label-container">').append(
                    $('<div class="task-card-checklist-item__label">').append(
                        $('<span class="markdown-line">').append(
                            $('<p>' + enteredText + '</p>')
                        )
                    )
                )
            );
                        
            var mainmoreview = $('<div class="click-area task-card-checklist__footer" role="button" tabindex="0">').append(
                $('<span class="tasks.checklist.footer.see_all_checklist_v2">').text("모든 체크리스트")
            );
            
            $('.tw-task-add-checklist-item').before(newDiv);
            
            // 자식이 하나도 없어서 처음 만들어 질 때
            if ($('.task').eq(selectedTaskIndex).find('.task-card-checklist').length === 0) {
                $('.task-body').eq(selectedTaskIndex).prepend(checklistHTML);
                $('.task-card-checklist__content').eq(selectedTaskIndex).append(mainChecklistItem);
            // 모든 체크리스트 생길 때
        } else if ($('.task').eq(selectedTaskIndex).find('.task-card-checklist__content:not(.--checked)').children().length === 1) {
            // 조건이 모든 더보기가 없을때 라고 하면 안됨 //예외/숨김처리 되어있을 수도 있음 
                // 조건 => ('.task-card-checklist__content')가 doen를 가지고 있지 않은애가 1개일때로 바꿔야함
                $('.task').eq(selectedTaskIndex).find('.task-card-checklist').removeClass('display');
                $('.task-card-checklist__content').eq(selectedTaskIndex).append(mainChecklistItem);
                if(!$('.task').eq(0).find('.task-card-checklist__footer').length){
                    $('.task-card-checklist').eq(selectedTaskIndex).append(mainmoreview);
                }
            // 나머지 경우 
            } else {
                $('.task-card-checklist__content').eq(selectedTaskIndex).append(mainChecklistItem);
                $('.task').eq(selectedTaskIndex).find('.task-card-checklist').removeClass('display');
            }
        
            $('.tw-task-add-checklist-item__input').val(''); // textarea 내용 비우기
        }

        $(document).on('keydown', '.tw-task-add-checklist-item__input', function (event) {
            debugger;
            if (event.which == 13) { // 13은 Enter 키의 키 코드입니다.
                event.preventDefault(); // 엔터 키의 기본 동작인 줄바꿈을 막습니다.
                classCounter++;
                enteredText = $(this).val(); // textarea의 내용을 가져옵니다.
                addChecklistItem(enteredText, classCounter, selectedTaskIndex);
            }
        });

        // checklist 글자가 생겼을 때 'enter 눌러주세요.' 글자 생기게 만드는 함수
        $('.tw-task-add-checklist-item__input').on('input', function() {
            var enter = $('.tw-task-add-checklist-item__enter-to-save');
            if ($(this).val().trim() !== '') {
                if (!enter.length) {
                    enter = $('<span class="tw-task-add-checklist-item__enter-to-save"> ↲ Enter로 저장 </span>');
                    $('.tw-task-add-checklist-item__input-container').append(enter);
                }
            } else {
                enter.remove();
            }
        });
        // 체크리스트 checkbox 관련
        
        // 체크리스트 삭제버튼 누르면 삭제되는 함수
        $(document).on('click', '.delete-checklist', function(){
            var classList = $(this).closest('.tw-task-checklist-pane__item-wrapper')
            thirdClassName = classList.attr('class').split(' ')[1];
            $( '.' + thirdClassName).remove()
            if ($('.task').eq(selectedTaskIndex).find('.task-card-checklist__content > div').length === $('.task').eq(selectedTaskIndex).find('.task-card-checklist__content > div.--checked').length) {
                $('.task').eq(selectedTaskIndex).find('.task-card-checklist').addClass('display');
            }     
        })
        
        function toggleChecklistItem(clickedElement) {
            var clickedIndex = $('.ax-task-checklist-item__checkbox').index(clickedElement);
            var isCompleted = $('.ax-task-checklist-item').eq(clickedIndex).hasClass('--checked');
            var hoursAgo = 0; // 수정: 시간 값 계산
            var done = $('<div class="tw-task-checklist-item__label-subtitle">' +
                '<span data-l10n-key="tasks.properties.completed_by">완료자</span>' +
                '<span class="tw-text --body">완 료자</span>' +
                '<span>' + hoursAgo + '<span style="display: none;"></span>시간전</span>' +
                '</div>');
        
            // 사이드바 체크리스트 완료되기 전 상태 
            if (!isCompleted) {
                $('.' + thirdClassName).find('.checklist-checkbox').addClass('--animate');
                setTimeout(function () {
                    $('.' + thirdClassName).find('.ax-task-checklist-item').addClass('--checked');
                    $('.' + thirdClassName).find('.checklist-checkbox').addClass('--completed');
                    $('.' + thirdClassName).find('.tw-checklist-assignee__no-assignee').addClass('--checked');
                    $('.' + thirdClassName).find('.tw-task-checklist-item__label').append(done); // 수정: 클래스 선택자를 선택한 요소로 변경
                }, 500);
            } else {
                $('.' + thirdClassName).find('.tw-task-checklist-item__label-subtitle').remove();
                $('.' + thirdClassName).find('.checklist-checkbox').removeClass('--animate')
                $('.' + thirdClassName).find('.ax-task-checklist-item').removeClass('--checked')
                $('.' + thirdClassName).find('.tw-checklist-assignee__no-assignee').removeClass('--checked')
                $('.' + thirdClassName).find('.checklist-checkbox').removeClass('--completed')
                // 하위메뉴에 메뉴 생겨야 해서 만든 함수( 조건이 있어야 할듯 막 생기면 안되고)
                if ($('.' + thirdClassName).hasClass('--checked')) {
                    $('.' + thirdClassName).removeClass('--checked')
                }
            }
            if ($('.task').eq(selectedTaskIndex).find('.task-card-checklist__content').children().length < 1) {
                $('taks').find('.task-card-checklist').remove()
            }
        }
        // 하위메뉴 checkbox 클릭 이벤트 
        function toggleTaskCheckbox(clickedElement) {
            var contain = $('.' + thirdClassName).find(clickedElement).hasClass('--completed');
            if (!contain) {
                $('.' + thirdClassName).find(clickedElement).addClass('--animate');
                $('.' + thirdClassName).find(clickedElement).closest('.task-card-checklist-item').addClass('--checked');
                $('.' + thirdClassName).find(clickedElement).addClass('--completed');
                $('.task').eq(selectedTaskIndex).find('.task-card-checklist').removeClass('display');
                // 모든 체크리스트 삭제
                if ($('.task').eq(selectedTaskIndex).find('.task-card-checklist__content > div').length === $('.task').eq(selectedTaskIndex).find('.task-card-checklist__content > div.--checked').length) {
                    $('.task').eq(selectedTaskIndex).find('.task-card-checklist').addClass('display');
                }                
                // 클릭되서 컨텐츠 없을때 사이드바에서 생기도록 만들어야함
            } else {
                $('.' + thirdClassName).find(clickedElement).removeClass('--completed');
                $('.' + thirdClassName).find(clickedElement).removeClass('--animate');
                $('.task').eq(selectedTaskIndex).find('.task-card-checklist').removeClass('display');
            }
        }
        
        $(document).on('click', '.task-checkbox.--small', function () {
            thirdClassName = $(this).closest('.task-card-checklist-item').attr('class').split(' ')[2];
            toggleTaskCheckbox(this);
            toggleChecklistItem('.ax-task-checklist-item__checkbox');
        });
        
        $(document).on('click', '.ax-task-checklist-item__checkbox', function () {
            // 클릭한 애의 인덱스값가져와서 main에 있는애의 index를 가져와서해야함 
            thirdClassName = $(this).closest('.tw-task-checklist-pane__item-wrapper').attr('class').split(' ')[1];
            toggleTaskCheckbox('.task-checkbox.--small');
            toggleChecklistItem(this);
        });
        
    });

    });

    // .tw-color-label.--bg-sky-blue를 클릭할 때
    $('.tw-color-label.--bg-sky-blue').click(function() {
        const selectedTask = $('.task.--is-selected');
        const taskColor = selectedTask.find('.task__task-color, .task-color');
        
        taskColor.removeClass(function(index, className) {
            return (className.match(/--bg-.+/) || []).join(' ');
        });
        taskColor.addClass('--bg-sky-blue');
    });
    // .tw-color-label.--bg-green를 클릭할 때
    $('.tw-color-label.--bg-green').click(function() {
        const selectedTask = $('.task.--is-selected');
        const taskColor = selectedTask.find('.task__task-color, .task-color');
        taskColor.removeClass(function(index, className) {
            return (className.match(/--bg-.+/) || []).join(' ');
        });
        taskColor.addClass('--bg-green');
    });
    // .tw-color-label.--bg-amber를 클릭할 때
    $('.tw-color-label.--bg-amber').click(function() {
        const selectedTask = $('.task.--is-selected');
        const taskColor = selectedTask.find('.task__task-color, .task-color');
        
        taskColor.removeClass(function(index, className) {
            return (className.match(/--bg-.+/) || []).join(' ');
        });
        taskColor.addClass('--bg-amber');
    });
    // .tw-color-label.--bg-pink를 클릭할 때
    $('.tw-color-label.--bg-pink').click(function() {
        const selectedTask = $('.task.--is-selected');
        const taskColor = selectedTask.find('.task__task-color, .task-color');
        
        taskColor.removeClass(function(index, className) {
            return (className.match(/--bg-.+/) || []).join(' ');
        });
        taskColor.addClass('--bg-pink');
    });
    // .tw-color-label.--bg-red를 클릭할 때
    $('.tw-color-label.--bg-red').click(function() {
        const selectedTask = $('.task.--is-selected');
        const taskColor = selectedTask.find('.task__task-color, .task-color');
        
        taskColor.removeClass(function(index, className) {
            return (className.match(/--bg-.+/) || []).join(' ');
        });
        taskColor.addClass('--bg-red');
    });
    // .tw-color-label.--bg-orange를 클릭할 때
    $('.tw-color-label.--bg-orange').click(function() {
        const selectedTask = $('.task.--is-selected');
        const taskColor = selectedTask.find('.task__task-color, .task-color');
        
        taskColor.removeClass(function(index, className) {
            return (className.match(/--bg-.+/) || []).join(' ');
        });
        taskColor.addClass('--bg-orange');
    });
    // .tw-color-label.--bg-brown를 클릭할 때
    $('.tw-color-label.--bg-brown').click(function() {
        const selectedTask = $('.task.--is-selected');
        const taskColor = selectedTask.find('.task__task-color, .task-color');
        
        taskColor.removeClass(function(index, className) {
            return (className.match(/--bg-.+/) || []).join(' ');
        });
        taskColor.addClass('--bg-brown');
    });
    // .tw-color-label.--bg-gray를 클릭할 때
    $('.tw-color-label.--bg-gray').click(function() {
        const selectedTask = $('.task.--is-selected');
        const taskColor = selectedTask.find('.task__task-color, .task-color');
        
        taskColor.removeClass(function(index, className) {
            return (className.match(/--bg-.+/) || []).join(' ');
        });
        taskColor.addClass('--bg-gray');
    });
    // .tw-color-label.--bg-rainbow를 클릭할 때
    $('.tw-color-label.--bg-rainbow').click(function() {
        const selectedTask = $('.task.--is-selected');
        const taskColor = selectedTask.find('.task__task-color, .task-color');
        
        taskColor.removeClass(function(index, className) {
            return (className.match(/--bg-.+/) || []).join(' ');
        });
        taskColor.addClass('--bg-rainbow');
    });
    // tw-task-properties-header-options__close-button 클릭 시 모든 task 초기화
    $(taskPropertiesCloseButton).click(function () {
        $('.task').removeClass('--is-selected');
        $('.task .task-meta-item').css('color', '');
    });

    //메인 // sidebar 체크 
    // sidbar 체크박스 클릭
    // $(document).on('click' , '.tw-task-completion-box__click-area', function(){
    //     slidebarCompleted();
    // })

    // main 체크박스 클릭
    $(document).on('click' , '.task-checkbox', function(){
        slidebarCompleted();
    });
      
    // main체크박스 / sidebar체크박스 연동
    function slidebarCompleted() {
        if (completed) {
          $('.tw-task-properties-header').addClass('--completed');
            $('.ax-task-completion-box').css({
              'width': '130px'
            });
            $('.tw-task-completion-box__background-center').css({
              'transform': 'scaleX(107)'
            });
            $('.tw-task-completion-box__background-right').css({
              'transform': 'translateX(122.391px)'
            });
            $('.tw-task-completion-box__completed-task').css({
              'display': 'flex'
            });
            // 선택한 $('.task').eq(selectedTaskIndex)의 자식요소의 체크박스 체크 확인
            $('.task').eq(selectedTaskIndex).find('.click-area task-checkbox, .--medium').addClass('--completed')
            $('.task').eq(selectedTaskIndex).addClass('--done')
            completedConponentTime()
      
          completed = false; // 상태를 토글합니다.
        } else {
          $('.tw-task-properties-header').removeClass('--completed');
          $('.ax-task-completion-box').css({
            'width': '34px'
          });
          $('.tw-task-completion-box__background-center').css({
            'transform': 'scaleX(1)'
          });
          $('.tw-task-completion-box__background-right').css({
            'transform': 'translateX(17px)'
          });
          $('.tw-task-completion-box__completed-task').css({
            'display': 'none'
          });
          $('.task').eq(selectedTaskIndex).find('.click-area task-checkbox, .--medium').removeClass('--completed')
          $('.task').eq(selectedTaskIndex).removeClass('--done')
          completedConponentTime()
          completed = true; // 상태를 토글합니다.
        }
    }

    // 완료된 시간 추가하기
    function completedConponentTime(){
        var today = new Date();
        var month = today.getMonth() + 1;
        var day = today.getDate(); 
        var $dateSummary = $(
                     '<div class="tw-divided-row">' +
                     '<div class="tw-task-date" data-testid="task-date">' +
                     '<span data-l10n-key="tasks.properties.due_date_status.completed_on">' +
                     '<span class="tw-text --weight-bold">' +
                     '<span data-l10n-key="tasks.properties.date.today">' + month +'월' + day + '일</span>' +
                     '</span>에 완료</span>' +
                     '</div>' +
                     '</div>' 
                    );

        var $dateSummaryBody = $('<div class="tw-task-body">' + 
                                    '<div class="tw-task-body__date-summary">'+
                                    '</div>'+
                                '</div>'
                                )

        if (!$('.task').eq(selectedTaskIndex).find('.tw-task-date').length > 0) {
            if ($('.task').eq(selectedTaskIndex).find('.tw-task-body').length > 0) {
                $('.task').eq(selectedTaskIndex).find('.tw-task-body__date-summary').append($dateSummary);
            }else{
                $('.task').eq(selectedTaskIndex).find('.task__except-color').append($dateSummaryBody);
                $('.task').eq(selectedTaskIndex).find('.tw-task-body__date-summary').append($dateSummary);
            }                                
        }else{
            $('.task').eq(selectedTaskIndex).find('.tw-task-body').remove();
        }
    }
});


    // sidebar_위치 소속 바꿔주기
    // tw-task-location-title__tasklist-title 내용가져와서 클릭한 요소의 부모요소인 header 내용 가져와서 소속에 넣어주기
    // 클릭한 요소 가져와서 그것의 소속input 내용 저장하고 클리하면 바로 내용 넣어주기