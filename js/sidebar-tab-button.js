document.addEventListener("DOMContentLoaded", function(){
    const commentTabButtonProperties = document.querySelector('.comment-tab-button-properties');
    const fileLinkTabButtonProperties = document.querySelector('.file-link-tab-button-properties');
    const propertiesTabButtonComment = document.querySelector('.properties-tab-button-comment');
    const fileLinkTabButtonComment = document.querySelector('.file-link-tab-button-comment');
    const propertiesTabButtonFilelink = document.querySelector('.properties-tab-button-filelink');
    const commentTabButtonFilelink = document.querySelector('.comment-tab-button-filelink');
    const taskPropertiesPopup = document.querySelector('.task-properties-popup');
    const taskCommentPopup = document.querySelector('.task-comment-popup');
    const taskFileLinkPopup = document.querySelector('.task-file-link-popup');

    commentTabButtonProperties.addEventListener('click', function(){
        if (taskPropertiesPopup) {
            taskPropertiesPopup.style.display = 'none';
        }
        if (taskCommentPopup) {
            taskCommentPopup.style.display = 'block';
        }
    })

    fileLinkTabButtonProperties.addEventListener('click', function(){
        if (taskPropertiesPopup) {
            taskPropertiesPopup.style.display = 'none';
        }
        if (taskFileLinkPopup) {
            taskFileLinkPopup.style.display = 'block';
        }
    })

    propertiesTabButtonComment.addEventListener('click', function(){
        if (taskCommentPopup) {
            taskCommentPopup.style.display = 'none';
        }
        if (taskPropertiesPopup) {
            taskPropertiesPopup.style.display = 'block';
        }
    })

    fileLinkTabButtonComment.addEventListener('click', function(){
        if (taskCommentPopup) {
            taskCommentPopup.style.display = 'none';
        }
        if (taskFileLinkPopup) {
            taskFileLinkPopup.style.display = 'block';
        }
    })

    propertiesTabButtonFilelink.addEventListener('click', function(){
        if (taskFileLinkPopup) {
            taskFileLinkPopup.style.display = 'none';
        }
        if (taskPropertiesPopup) {
            taskPropertiesPopup.style.display = 'block';
        }
    })

    commentTabButtonFilelink.addEventListener('click', function(){
        if (taskFileLinkPopup) {
            taskFileLinkPopup.style.display = 'none';
        }
        if (taskCommentPopup) {
            taskCommentPopup.style.display = 'block';
        }
    })

})  