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