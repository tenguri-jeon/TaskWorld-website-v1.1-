// 새로 만들기
$(document).ready(function() {
    // 새로만들기 클릭하면
    // 새로운 컴포넌트 만들어짐.
    // 기능은 이미 되어 있으니까 틀만 잘 만들면 됨.
    // 해서 엔터를 누르면새로운 새로운 section형성
    $('.create-tasklist-button').click(function(){
        debugger;
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

})

// kanban 차트에서 + 클릭시 contents 생성
$(document).ready(function() {
    dividedIndex = null;

    // component만드는 함수
    function makeNewProject(title, clickindex) {
        var newComponent = $('<div class="task__outer">').append(
            $('<div class="task__wrapper">').append(
                $('<section class="task">').append(
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
                                )
                            )
                        )
                    )
                )
            )
        );

        $('.tasklist__inner-container').eq(clickindex).append(newComponent);
        $('.task-or-note-input-panel__input-box').val('')
        $('.task-or-note-input-panel__create-button').removeClass('active');
        $('.task-or-note-input-panel__create-button').prop('disabled', false)
    }

    
    // 버튼 클릭시 컴포넌트 생성하는 이벤트
    $(document).on('click', '.task-or-note-input-panel__create-button', function() {
        componentTextbox = $(this).closest('.task-or-note-input-panel').find('.task-or-note-input-panel__input-box');
        var index = $('.task-or-note-input-panel__create-button').index(this);
        var dividedIndex = Math.floor(index / 2); 
        var componentTitle = componentTextbox.val()

        makeNewProject(componentTitle , dividedIndex);
    })

    $(document).on('keydown', '.task-or-note-input-panel__input-box', function(event) {
        if (event.which === 13) {
            event.preventDefault();
            var componentTitle = $(this).val();
            var index = $('.task-or-note-input-panel__create-button').index();
            var dividedIndex = Math.floor(index / 2); 
    
            makeNewProject(componentTitle, dividedIndex);
        }
    });
    

})