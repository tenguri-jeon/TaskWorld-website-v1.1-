document.addEventListener("DOMContentLoaded", function() {
    const toggleLinks = document.querySelectorAll('.tasklist-footer__toggle-completed-tasks-link');
    const completedTasksHeaders = document.querySelectorAll('.tasklist__completed-taks-header');
    const completedTaskContents = document.querySelectorAll('.completed-task')

    toggleLinks.forEach((toggleLink, index) => {
        toggleLink.addEventListener('click', function(event) {
            event.preventDefault();

            completedTasksHeaders[index].style.display = (completedTasksHeaders[index].style.display === 'none') ? 'flex' : 'none';
            completedTaskContents[index].style.display = (completedTaskContents[index].style.display === 'none') ? 'block' : 'none';
        });
    });
});
