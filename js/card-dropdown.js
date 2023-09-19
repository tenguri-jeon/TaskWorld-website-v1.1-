const titleElements = document.querySelectorAll('.task-card-subtask-list__title');

titleElements.forEach(titleElement => {
    const contentElement = titleElement.nextElementSibling;
    const chevronDownIcon = titleElement.querySelector('.bi-chevron-down');
    const chevronUpIcon = titleElement.querySelector('.bi-chevron-up');

    titleElement.addEventListener('click', () => {
        if (contentElement.style.display === 'none') {
            contentElement.style.display = 'block';
            chevronDownIcon.style.display = 'none';
            chevronUpIcon.style.display = 'inline';
        } else {
            contentElement.style.display = 'none';
            chevronDownIcon.style.display = 'inline';
            chevronUpIcon.style.display = 'none';
        }

        chevronDownIcon.classList.toggle('rotate-icon');
        chevronUpIcon.classList.toggle('rotate-icon');
    });

    // .task-card-subtask-list__content의 display 속성 변화를 감지
    const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                if (contentElement.style.display === 'none') {
                    titleElement.style.marginBottom = '5px';
                } else {
                    titleElement.style.marginBottom = '0';
                }
            }
        }
    });

    observer.observe(contentElement, { attributes: true });

    // 초기에도 체크
    if (contentElement.style.display === 'none') {
        titleElement.style.marginBottom = '5px';
    } 
});

