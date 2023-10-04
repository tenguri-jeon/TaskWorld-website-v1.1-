// 새로 만들기
$(document).ready(function() {

    $(document).on('click' , '.create-tasklist-button' , function(){
        // newDiv 는 새로만들기 클릭했을 때, kanban header제목 정해주는 영역임
        var newDiv = $( '<div class="kanban-board__new-tasklist-area">' +
                '<div>' +
                  '<div class="pre-created-tasklist --view-column">' +
                    '<div class="click-area editable-text-field --textfield" role="button" tabindex="0">' +
                        '<input class="tw-editable-text-field__input" type="text" style="border:2px solid #27b6ba; border-radius:8px; color:#696f7a; font-size:14px; font-weight:600; width:207px; padding:2px; padding-left:10px" placeholder="업무리스트 이름">' +
                    '</div>' +
                    '<div class="tw-click-area tw-pre-created-tasklist__icon ax-pre-created-tasklist__icon --clickable" role="button" tabindex="0">' +
                      '<i class="tw-icon bi bi-x-lg" data-icon="close"></i>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
              '</div>' 
          );
        
        $('.create-tasklist-button').closest('.kanban-column').append(newDiv);
        $('.create-tasklist-button').remove();
    })

    // 닫기버튼
    $(document).on('click', '.tw-pre-created-tasklist__icon .bi-x-lg', function() {
        var newElement = $(
            '<div class="click-area create-tasklist-button" role="button" tabindex="0">' +
              '<i class="tw-icon bi bi-plus-lg"></i>' +
              '<span class="projects.button.create-tasklist-button_new_tasklist">새 업무리스트 만들기</span>' +
            '</div>'
          );
        $(this).closest('.kanban-column').append(newElement);
        $(this).closest('.pre-created-tasklist').remove()

    })

})

// kanban 차트에서 + 클릭시 contents 생성
$(document).ready(function() {
    dividedIndex = null;

    // component만드는 함수
    function makeNewProject(title, clickindex) {
        var dataIndex = $('.task').length + 1;
        var newComponent = $('<div class="task__outer" draggable="true">').append(
            $('<div class="task__wrapper">').append(
                $('<section class="task" data-task-index="' + dataIndex + '">').append(
                    $('<div class="task-color task__task-color"></div>'),
                    $('<div class="task__except-color">').append(
                        $('<div class="task__front">').append(
                            $('<div class="sapcer" style="flex-direction: row; gap: 5px; align-items: stretch; justify-content: start;"></div>')
                        ),
                        $('<div class="task__inner">').append(
                            $('<div class="task__main">').append(
                                $('<div class="task-header">').append(
                                    $('<div class="task-header__checkbox">').append(
                                        $('<div class="click-area task-checkbox --medium" role="button" tabindex="0">').append(
                                            $('<i class="icon task-checkbox__check-mark bi bi-check"></i>')
                                        )
                                    ),
                                    $('<span class="task-header__title">'+ title +'</span>')
                                ),
                                $('<div class="task-body"></div>')
                            )
                        )
                    )
                )
            )
        );
        $('.tasklist__inner-container').eq(clickindex).append(newComponent);
        $('.task-or-note-input-panel__input-box').val('')
        $('.task-or-note-input-panel__create-button').eq(clickindex).removeClass('active');
        $('.task-or-note-input-panel__create-button').eq(clickindex).prop('disabled', true);
    }

    
    // 버튼 클릭시 컴포넌트 생성하는 이벤트
    $(document).on('click', '.task-or-note-input-panel__create-button', function() {
        componentTextbox = $(this).closest('.task-or-note-input-panel').find('.task-or-note-input-panel__input-box');
        kanbanColumn = $(this).closest('.tasklist');
        var index = $('.task-or-note-input-panel__create-button').index(this);
        var componentTitle = componentTextbox.val()

        if (!kanbanColumn.find('.tasklist__inner-container').length) {
            var makeKanban = $('<div class="kanban-items hack-scrollbar">' + 
            '<div class="tasklist__container" style ="overflow: hidden; height: 0px; width: 0px;">'+
                '<div class="tasklist__inner-container" style="position: relative; height: 656px; width: 300px; overflow: auto; will-change: trasform; direction: 1tr;">' + 
                '</div>' + 
            '</div>' +
            '</div>'
            )
            kanbanColumn.append(makeKanban);
            makeNewProject(componentTitle , index);
        }else{
            makeNewProject(componentTitle , index);
        }
    })

    $(document).on('keydown', '.task-or-note-input-panel__input-box', function(event) {
        if (event.which === 13) {
            debugger;
            event.preventDefault();
            var componentTitle = $(this).val();
            var index = $('.task-or-note-input-panel__create-button').index(this);


            if (!kanbanColumn.find('.tasklist__inner-container').length) {
                var makeKanban = $('<div class="kanban-items hack-scrollbar">' + 
                '<div class="tasklist__container" style ="overflow: hidden; height: 0px; width: 0px;">'+
                    '<div class="tasklist__inner-container" style="position: relative; height: 656px; width: 300px; overflow: auto; will-change: trasform; direction: 1tr;">' + 
                    '</div>' + 
                '</div>' +
                '</div>'
                )
                kanbanColumn.append(makeKanban);
                makeNewProject(componentTitle , index);
            }else{
                makeNewProject(componentTitle , index);
            }
        }
    });

    $(document).ready(function() {
        // tasklist-header__add-icon를 클릭할 때 이벤트 핸들러 추가
        $(document).on('click', '.tasklist-header__add-icon', function() {
            // 클릭된 아이콘과 관련된 패널을 보여줍니다.
            $(this).closest('.kanban-column').find('.tasklist-header__input-panel-container').css('display', 'block');
        });
    
        // task-or-note-input-panel__cancel-button를 클릭할 때 이벤트 핸들러 추가
        $(document).on('click', '.task-or-note-input-panel__cancel-button', function() {
            // 클릭된 버튼과 관련된 패널을 숨깁니다.
            $(this).closest('.tasklist-header__input-panel-container').css('display', 'none');
        });
    });

})