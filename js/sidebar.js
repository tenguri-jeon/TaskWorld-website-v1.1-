// 부트스트랩기능
    //dropdown기능 
    const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
    const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))

    //tooltip기능 
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new bootstrap.Tooltip(tooltipTriggerEl, {
        // trigger: 'hover' // 툴팁을 마우스 오버시에만 표시
      });
    });

// sidebar  에서 click box 
$(document).ready(function() {
    $('#checkbox').click(function() {
        var isCompleted = $('.tw-task-completion-box__check-mark').css('color') === 'rgb(255, 255, 255)';

        if (isCompleted) {
            // 원상복귀
            $('.tw-task-completion-box__background-left, .tw-task-completion-box__background-right').css({
                'background-color': 'unset',
                'border-color': '#D4D6DB'
            });
            $('.tw-task-completion-box__check-mark').css({
                'color': '#EEF0F2'
            });
            $('.ax-task-completion-box').data('bs-title', '클릭하여 업무 완료');

            $('.tw-task-completion-box__background-center').css({
                'transform': 'scaleX(1)',
                'background-color': 'unset',
                'border-color': '#D4D6DB;'
            });
            $('.tw-task-completion-box__background-right').css({
                'transform': 'translateX(17px)'
            });
            $('.ax-task-completion-box').css({
                'width': '38px'
            });
            $('.tw-task-completion-box__completed-task').css({
                'display': 'none'
            });
        } else {
            // 클릭시 변화
            $('.tw-task-completion-box__background-left, .tw-task-completion-box__background-right').css({
                'background-color': '#27b6ba',
                'border-color': '#259295'
            });
            $('.tw-task-completion-box__check-mark').css({
                'color': '#fff'
            });
            $('.ax-task-completion-box').data('bs-title', '클릭하여 다시 열기');

            setTimeout(function() {
                $('.tw-task-completion-box__background-center').css({
                    'transform': 'scaleX(106.391)',
                    'background-color': '#27b6ba',
                    'border-color': '#259295'
                });
                $('.tw-task-completion-box__background-right').css({
                    'transform': 'translateX(122.391px)'
                });
                $('.ax-task-completion-box').css({
                    'width': '140px'
                });
                $('.tw-task-completion-box__completed-task').css({
                    'display': 'flex'
                });
            }, 500); // 1초 대기 후 함수 실행
        }
    });
});

// sidebar- 잠금설정js
$(document).ready(function() {
    $('.ax-task-properties-header-options__lock-task-button').click(function() {
        var contain = $(this).hasClass('--square');

        if (contain) {
            $(this).removeClass('--square');
            $(this).addClass('--selected');
            $('#lock-icon').addClass('bi-lock');
            $('#lock-icon').removeClass('bi-unlock');
            $('.lock-text').css({'display' : 'block'});
        } else {
            $(this).addClass('--square');
            $(this).removeClass('--selected');
            $('#lock-icon').removeClass('bi-lock');
            $('#lock-icon').addClass('bi-unlock');
            $('.lock-text').css({'display' : 'none'});
        }
    });
});

// 링크 저장되었다는 알람 js
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder.append(wrapper)
  }
  
  const alertTrigger = document.getElementById('liveAlertBtn')
  if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
      appendAlert('Nice, you triggered this alert message!', 'success')
    })
}

// sidebar 창닫기 
$(document).ready(function() {
    // side bar 창 닫기
    $('.ax-floating-panel-close-button').click(function(){
      $('.ax-floating-panel-desktop').css('display', 'none');
    });

    // side bar 안에있는 요소 x 클릭 시 사라지는 함수
    $('.bi-x').click(function() {
        $(this).parent().parent().remove();
    });

  });

  $(document).ready(function(){
    // 클래스 '.undermenu-checkbox'를 가진 요소에 대한 클릭 이벤트 핸들러 설정
    $(document).on('click', '.undermenu-checkbox', function(){
        // 클릭한 요소와 해당 인덱스 가져오기
        var clickedElement = $(this);
        var clickedIndex = $('.undermenu-checkbox').index(clickedElement);

        // 관련 작업이 완료되었는지 확인
        var isCompleted = $('.js-task').eq(clickedIndex).hasClass('--done');

        // 현재 상태를 기반으로 완료 상태를 토글
        if (!isCompleted) {
            // 애니메이션 추가 및 완료로 표시
            $('.undermenu-checkbox').eq(clickedIndex).addClass('--animate');
            setTimeout(function() {
                $('.undermenu-checkbox').eq(clickedIndex).addClass('--completed');
                $('.js-task').eq(clickedIndex).addClass('--done');
            }, 500);
        } else {
            // 완료 상태 제거
            $('.undermenu-checkbox').eq(clickedIndex).removeClass('--animate');
            $('.undermenu-checkbox').eq(clickedIndex).removeClass('--completed');
            $('.js-task').eq(clickedIndex).removeClass('--done');
        }
    });
});


// 제목 focus 되면 input 으로 바뀜
$(document).ready(function() {

    var isInputMode = false;
    const taskChartWrapper = document.querySelectorAll('.task');
    const floatingSidebarModal = document.querySelector('.tw-floating-panel-desktop');
    const taskPropertiesCloseButton = document.querySelector('.tw-task-properties-header-options__close-button');
    let selectedTaskIndex = -1; // 전역 변수로 선택한 task의 index를 저장할 변수를 선언하고 초기값을 -1로 설정

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

            console.log(selectedTaskIndex);
            $('.task-header__title').eq(selectedTaskIndex).text(inputText)
            isInputMode = false;
        }
    }

    $(document).on('click', '#change-input', function() {
        toggleInputMode('.tw-editable-panel-title');
    });

    $(document).on('keypress', '.modify-input', function(event) {
        if (event.which === 13) {
            event.preventDefault();
            toggleInputMode('.tw-editable-panel-title');
        }
    });

    // task클릭 시 backgroundcolor 변경
    // task 클릭 시 background color 변경 및 sidebar 열기
    $(document).on('click', '.task', function() {
        const clickedTask = $(this);
        const contain = clickedTask.hasClass('--is-selected');
        const componentName = clickedTask.find('.task-header__title').text();
    
        // 모든 task 초기화
        $('.task').removeClass('--is-selected');
        $('.task .task-meta-item').css('color', ''); 
    
        if (!contain) {
            clickedTask.addClass('--is-selected');
            clickedTask.removeClass('--done');
    
            clickedTask.find('.task-meta-item').css('color', '#fff');
    
            floatingSidebarModal.style.display = 'block';
            $('.ax-editable-panel-title').text(componentName);
    
            // 클릭한 task의 index를 저장
            selectedTaskIndex = $('.task').index(clickedTask);
        } else {
            floatingSidebarModal.style.display = 'none';
        }
    });
        
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
                $('.ax-task-checklist-item__label-title').eq(clickedIndex).append(newDiv);
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
        $(document).on('keypress', '.checklist-input', function(event) {
            if (event.which === 13) {
                event.preventDefault();
                inputText = $('.checklist-input').val().trim();
                if (inputText.length === 0) {
                    return;
                }
                toggleInputMode('.checklist-input-text', clickedElementIndex);
            }
        });
        // 체크리스트 아이템 추가하기
        $(document).ready(function() {

            $('.tw-task-add-checklist-item__input').keypress(function(event) {
                if (event.which == 13) { // 13은 Enter 키의 키 코드입니다.
                    classCounter++;
                    event.preventDefault(); // 기본 엔터 동작을 막습니다.
                    var enteredText = $(this).val(); // textarea의 내용을 가져옵니다.
                    var newDiv =  $('<div class="tw-task-checklist-pane__item-wrapper unique-class-name-' + classCounter + '">' + 
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

                    var mainmoreview =  $('<div class="click-area task-card-checklist__footer" role="button" tabindex="0">').append(
                        $('<span class="tasks.checklist.footer.see_all_checklist_v2">').text("모든 체크리스트")
                    );
                
                    $('.tw-task-add-checklist-item').before(newDiv);
                    // 첫 추가
                    if ($('.task').eq(selectedTaskIndex).find('.task-card-checklist').length === 0) {
                        // task 내에 task-card-checklist가 하나 이상 있을 때
                        $('.task-body').eq(selectedTaskIndex).prepend(checklistHTML);
                        $('.task-card-checklist__content').eq(selectedTaskIndex).append(mainChecklistItem);
                    } else if ($('.task').eq(selectedTaskIndex).find('.task-card-checklist__content').children().length === 1) {
                        $('.task-card-checklist__content').eq(selectedTaskIndex).append(mainChecklistItem);
                        $('.task-card-checklist').eq(selectedTaskIndex).append(mainmoreview);
                    } else {
                        // 그 외의 경우
                        $('.task-card-checklist__footer').eq(selectedTaskIndex).before(mainChecklistItem);
                    }
                    $(this).val(''); // textarea 내용 비우기
                    alert (classCounter)
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
        });
        // 체크리스트 checkbox 관련
        $(document).ready(function(){
            
            // 체크리스트 삭제버튼 누르면 삭제되는 함수
            $(document).on('click', '.delete-checklist', function(){
                var clickedElement = $(this);
                var clickedIndex = $('.ax-task-checklist-item__checkbox').index(clickedElement);
                $('.tw-task-checklist-pane__item-wrapper').eq(clickedIndex).remove();
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
            
                // 체크리스트 완료되기 전 상태 
                if (!isCompleted) {
                    $('.checklist-checkbox').eq(clickedIndex).addClass('--animate');
                    setTimeout(function () {
                        $('.ax-task-checklist-item').eq(clickedIndex).addClass('--checked');
                        $('.checklist-checkbox').eq(clickedIndex).addClass('--completed');
                        $('.tw-checklist-assignee__no-assignee').eq(clickedIndex).addClass('--checked');
                        $('.tw-task-checklist-item__label').eq(clickedIndex).append(done); // 수정: 클래스 선택자를 선택한 요소로 변경
                    }, 500);
                } else {
                    $('.tw-task-checklist-item__label-subtitle').remove();
                    $('.checklist-checkbox').eq(clickedIndex).removeClass('--animate')
                    $('.ax-task-checklist-item').eq(clickedIndex).removeClass('--checked')
                    $('.tw-checklist-assignee__no-assignee').eq(clickedIndex).removeClass('--checked')
                    $('.checklist-checkbox').eq(clickedIndex).removeClass('--completed')
                    
                }
                if ($('.task').eq(selectedTaskIndex).find('.task-card-checklist__content').children().length < 1) {
                    $('taks').find('.task-card-checklist').remove()
                }
            }
            // 하위메뉴 checkbox 클릭 이벤트 
            function toggleTaskCheckbox(clickedElement) {
                var contain = $('.task').eq(selectedTaskIndex).find(clickedElement).hasClass('--completed');
                console.log(thirdClassName);
                if (!contain) {
                    $('.' + thirdClassName).find(clickedElement).addClass('--animate');
                    $('.' + thirdClassName).find(clickedElement).closest('.task-card-checklist-item').addClass('--checked');
                    $('.' + thirdClassName).find(clickedElement).addClass('--completed');
                    if ($('.task').eq(selectedTaskIndex).find('.task-card-checklist__content').children().length <= 1) {
                        $('task').eq(selectedTaskIndex).find('.task-card-checklist').remove()
                    }
                } else {
                    $('.' + thirdClassName).find(clickedElement).removeClass('--completed');
                    $('.' + thirdClassName).find(clickedElement).removeClass('--animate');
                }
            }
            
            // 클릭한 애의 부모의 data id값을 알아야하고 그걸 변수 처리해서 위에 함수에 적용해야한다.
            $(document).on('click', '.task-checkbox.--small', function () {
                debugger;
                thirdClassName = $('.task-card-checklist-item').attr('class').split(' ')[2];
                toggleTaskCheckbox(this);
                toggleChecklistItem('.ax-task-checklist-item__checkbox');
            });
            
            $(document).on('click', '.ax-task-checklist-item__checkbox', function () {
                // 클릭한 애의 인덱스값가져와서 main에 있는애의 index를 가져와서해야함 
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
        
    });

// sidebar_자동저장
$(document).ready(function() {
    $('.tw-minimal-switch').click(function() {
        var switchOn = $(this).hasClass('--on'); 

        if (switchOn) {
            $(this).removeClass('--on').addClass('--off'); // 스위치를 OFF로 변경
            $('.sidebar_input_Button_wrapper').removeClass('display');
        } else {
            $(this).removeClass('--off').addClass('--on'); // 스위치를 ON으로 변경
            $('.sidebar_input_Button_wrapper').addClass('display');
        }
    });
});

// $(document).ready(function() {
//     $(document).on('click' , '#change_textarea', function(){
//         changeEditor();
//         $('.button-wrapper').removeClass('display');
//     })
    
//     $(document).on('click' , '.save-button', function(){
//         changeTextarea();
//         $('.button-wrapper').addClass('display');
//     })
// })


// // aditor -> textarea
// function changeTextarea(){
//     var editorText = $('.fr-view').text()
    
//     // $('#editor').addClass('display')
//     $('.change-input').removeAttr('editor');
// }

// // textarea -> aditor
// function changeEditor(){
//     var inputText = $('#change_textarea').val()
//     $('.fr-view').empty().text(inputText);
//     $('.fr-placeholder').remove()
//     inputText = '';
// }









