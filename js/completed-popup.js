document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.completed-task-sorting-menu__sort-by');
    const popupLayer = document.querySelector('.popup-layer');

    buttons.forEach((button) => {
        button.addEventListener('click', function(e) {
            
            const popup = document.querySelector('.popup-content-wrapper');

            // 팝업 위치 설정
            const buttonRect = button.getBoundingClientRect();
            const popupLeft = buttonRect.left + window.scrollX + (buttonRect.width / 2) - (popup.offsetWidth / 2) - 104;
            const popupTop = buttonRect.bottom + window.scrollY + 6;

            popup.style.left = popupLeft + 'px';
            popup.style.top = popupTop + 'px';
            popup.style.position = 'absolute';
            
          
            if (popupLayer.style.display === 'none' || popupLayer.style.display === '') {
                popup.style.display = 'block';
                popupLayer.style.display = 'block';

               
                const closePopup = function() {
                    popup.style.display = 'none';
                    popupLayer.style.display = 'none';
                    document.removeEventListener('click', closePopup);
                };

                document.addEventListener('click', closePopup);
            } else {
                popup.style.display = 'none';
                popupLayer.style.display = 'none';
            }

            e.stopPropagation(); 
        });
    });
});