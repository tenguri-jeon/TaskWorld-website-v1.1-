document.addEventListener("DOMContentLoaded", function() {
    const iconElementsHeader = document.querySelectorAll('.tasklist-header__add-icon');
    const inputPanelsHeader = document.querySelectorAll('.tasklist-header__input-panel-container');
    const iconElementsFooter = document.querySelectorAll('.tasklist-footer__add-task-button');
    const inputPanelsFooter = document.querySelectorAll('.tasklist-footer__task-or-note-input-panel');
    const cancelButtonElements = document.querySelectorAll('.task-or-note-input-panel__cancel-button');
    const tasklistContainer = document.querySelectorAll('.tasklist__inner-container')

    let activePanelHeader = null;
    let activePanelFooter = null;

    function togglePanel(icon, panel, container) {
        if (activePanelHeader !== panel && activePanelFooter !== panel) {
            if (activePanelHeader) {
                activePanelHeader.style.display = 'none';
                const index = Array.from(inputPanelsHeader).indexOf(activePanelHeader);
                if (index !== -1) {
                    tasklistContainer[index].style.height = '656px';
                }
            }
            if (activePanelFooter) {
                activePanelFooter.style.display = 'none';
                const index = Array.from(inputPanelsFooter).indexOf(activePanelFooter);
                if (index !== -1) {
                    tasklistContainer[index].style.height = '656px';
                }
            }
            panel.style.display = 'block';
            const index = Array.from(tasklistContainer).indexOf(container);
            if (index !== -1) {
                tasklistContainer[index].style.height = '543px'; //9/18수정//
            }
            if (icon.classList.contains('tasklist-header__add-icon')) {
                activePanelHeader = panel;
            } else if (icon.classList.contains('tasklist-footer__add-task-button')) {
                activePanelFooter = panel;
            }
        } else {
            panel.style.display = 'none';
            const index = Array.from(tasklistContainer).indexOf(container);
            if (index !== -1) {
                tasklistContainer[index].style.height = '656px';
            }
            if (icon.classList.contains('tasklist-header__add-icon')) {
                activePanelHeader = null;
            } else if (icon.classList.contains('tasklist-footer__add-task-button')) {
                activePanelFooter = null;
            }
        }
    }

    iconElementsHeader.forEach((icon, index) => {
        icon.addEventListener('click', function() {
            const panel = inputPanelsHeader[index];
            const container = tasklistContainer[index];
            togglePanel(icon, panel, container);
        });
    });

    iconElementsFooter.forEach((button, index) => {
        button.addEventListener('click', function() {
            const panelFooter = inputPanelsFooter[index];
            const container = tasklistContainer[index];
            togglePanel(button, panelFooter, container);
        });
    });

    cancelButtonElements.forEach((cancelButton, index) => {
        cancelButton.addEventListener('click', function() {
            const cancelButtonPanelHeader = cancelButton.closest('.tasklist-header__input-panel-container');
            const cancelButtonPanelFooter = cancelButton.closest('.tasklist-footer__task-or-note-input-panel');
            
            if (cancelButtonPanelHeader) {
                cancelButtonPanelHeader.style.display = 'none';
                const index = Array.from(inputPanelsHeader).indexOf(cancelButtonPanelHeader);
                if (index !== -1) {
                    tasklistContainer[index].style.height = '656px';
                }
                activePanelHeader = null;
            }

            if (cancelButtonPanelFooter) {
                cancelButtonPanelFooter.style.display = 'none';
                const index = Array.from(inputPanelsFooter).indexOf(cancelButtonPanelFooter);
                if (index !== -1) {
                    tasklistContainer[index].style.height = '656px';
                }
                activePanelFooter = null;
            }
        });
    });
});


// create-button active
document.addEventListener("DOMContentLoaded", function() {
    const inputFields = document.querySelectorAll('.task-or-note-input-panel__input-box');
    const createButtons = document.querySelectorAll('.task-or-note-input-panel__create-button');

    function toggleButtonState(inputField, createButton) {
        if (inputField.value.trim() !== '') {
            createButton.classList.add('active');
            createButton.removeAttribute('disabled');
        } else {
            createButton.classList.remove('active');
            createButton.setAttribute('disabled', 'disabled');
        }
    }

    inputFields.forEach((inputField, index) => {
        const createButton = createButtons[index];
        
        inputField.addEventListener('input', function() {
            toggleButtonState(inputField, createButton);
        });

        // 초기 상태 설정
        toggleButtonState(inputField, createButton);
    });
});


//tasklist-header title-pen
const leftSections = document.querySelectorAll('.tasklist-header__left-section');

leftSections.forEach(leftSection => {
    const icon = leftSection.querySelector('.editable-text-field__icon');

    leftSection.addEventListener('mouseover', () => {
        icon.style.display = 'block'; 
    });

    leftSection.addEventListener('mouseout', () => {
        icon.style.display = 'none'; 
    });
});