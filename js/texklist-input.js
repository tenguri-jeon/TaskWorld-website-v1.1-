document.addEventListener("DOMContentLoaded", function() {
    const iconElementsHeader = document.querySelectorAll('.tasklist-header__add-icon');
    const inputPanelsHeader = document.querySelectorAll('.tasklist-header__input-panel-container');
    const iconElementsFooter = document.querySelectorAll('.tasklist-footer__add-task-button');
    const inputPanelsFooter = document.querySelectorAll('.tasklist-footer__task-or-note-input-panel');
    const cancelButtonElements = document.querySelectorAll('.task-or-note-input-panel__cancel-button');
    const tasklistContainer = document.querySelectorAll('.tasklist__inner-container')

    let activePanelHeader = null;
    let activePanelFooter = null;

    // function togglePanel(icon, panel, container) {
    //     if (activePanelHeader !== panel && activePanelFooter !== panel) {
    //         if (activePanelHeader) {
    //             activePanelHeader.style.display = 'none';
    //             const index = Array.from(inputPanelsHeader).indexOf(activePanelHeader);
    //             if (index !== -1) {
    //                 tasklistContainer[index].style.height = '656px';
    //             }
    //         }
    //         if (activePanelFooter) {
    //             activePanelFooter.style.display = 'none';
    //             const index = Array.from(inputPanelsFooter).indexOf(activePanelFooter);
    //             if (index !== -1) {
    //                 tasklistContainer[index].style.height = '656px';
    //             }
    //         }
    //         panel.style.display = 'block';
    //         const index = Array.from(tasklistContainer).indexOf(container);
    //         if (index !== -1) {
    //             tasklistContainer[index].style.height = '543px';
    //         }
    //         if (icon.classList.contains('tasklist-header__add-icon')) {
    //             activePanelHeader = panel;
    //         } else if (icon.classList.contains('tasklist-footer__add-task-button')) {
    //             activePanelFooter = panel;
    //         }
    //     } else {
    //         panel.style.display = 'none';
    //         const index = Array.from(tasklistContainer).indexOf(container);
    //         if (index !== -1) {
    //             tasklistContainer[index].style.height = '656px';
    //         }
    //         if (icon.classList.contains('tasklist-header__add-icon')) {
    //             activePanelHeader = null;
    //         } else if (icon.classList.contains('tasklist-footer__add-task-button')) {
    //             activePanelFooter = null;
    //         }
    //     }
    // }

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
    
    function attachClickEventToDynamicElements() {
        var dynamicIcons = document.querySelectorAll('.click-area.create-tasklist-button');
        
        dynamicIcons.forEach(function(icon, index) {
          icon.addEventListener('click', function() {
            const panel = inputPanelsHeader[index]; // 동적으로 생성된 요소의 패널과 컨테이너 선택
            const container = tasklistContainer[index];
            togglePanel(icon, panel, container);
          });
        });
      }
      
      // 페이지가 로드될 때 초기화 및 이벤트 핸들러 연결
      document.addEventListener('DOMContentLoaded', function() {
        // 초기 요소에 대한 이벤트 핸들러 연결
        iconElementsHeader.forEach((icon, index) => {
          icon.addEventListener('click', function() {
            const panel = inputPanelsHeader[index];
            const container = tasklistContainer[index];
            togglePanel(icon, panel, container);
          });
        });
        
        // 동적 요소에 대한 이벤트 핸들러 연결
        attachClickEventToDynamicElements();
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

    $(document).ready(function() {
        // 부모 요소에서 input 이벤트를 감지하여 하위 요소에 위임
        $(document).on('input', '.task-or-note-input-panel__input-box', function() {
        const inputField = $(this);
        const createButton = inputField.closest('.task-or-note-input-panel').find('.task-or-note-input-panel__create-button');
        toggleButtonState(inputField, createButton);
        });
    
        function toggleButtonState(inputField, createButton) {
        if (inputField.val().trim() !== '') {
            createButton.addClass('active').prop('disabled', false);
        } else {
            createButton.removeClass('active').prop('disabled', true);
        }
        }
    
        // 초기 상태 설정
        $('.task-or-note-input-panel__input-box').each(function(index) {
        const createButton = $('.task-or-note-input-panel__create-button').eq(index);
        toggleButtonState($(this), createButton);
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