$(document).on('click', '.tasklist-footer__toggle-completed-tasks-link', function () {
    var index = $('.tasklist-footer__toggle-completed-tasks-link').index(this)
    var value = $('.tasklist__completed-taks-header').eq(index).css('display');
    var doneTask = $('.tasklist__inner-container').eq(index).find('.task.--done')
    var doneTaskWrapper = $('.tasklist__inner-container').eq(index).find('.task__outer.completed-task')

    // 클릭한 click-area tasklist-footer__toggle-completed-tasks-link 의 task의 자손 중에 --done이 있으면 display 처리해줘야 함
    switch (value) {
        // 보이는 상태  -> 안보이는 상태
                case 'flex':
            doneTask.css({
                'display': 'none'
            })
            doneTaskWrapper.css({
                'display': 'none'
            })
            $('.tasklist__completed-taks-header').eq(index).css({
                'display' : 'none'
            })
            break;

        // 숨김 안보이는 상태 -> 보이는 상태
        case 'none':
            doneTask.css({
                'display': 'block'
            })
            doneTaskWrapper.css({
                'display': 'block'
            })
            $('.tasklist__completed-taks-header').eq(index).css({
                'display' : 'flex'
            })
            break;

        default:
            break;
    }
})