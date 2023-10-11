document.addEventListener("DOMContentLoaded", function(){
    const sidebarPlusMoveButton = document.querySelector('.plus-move-button')
    const sidebarPlusMovePopup = document.querySelector('.tw-popup-content-wrapper-plus-move')
    const sidebarPlusMoveLayer = document.querySelector('.tw-popup-layer-plus-move')
    const sidebarPlusMoveCloseButton = document.querySelector('.tw-input-kit-widget__plus-move-buttons-wrapper')
    const sidebarWorkspaceButton = document.querySelector('.workspace-popup-button')
    const sidebarWorkspacePopup = document.querySelector('.tw-popup-content-wrapper-workspace')
    const sidebarWorkspaceLayer = document.querySelector('.tw-popup-layer-workspace')
    const sidebarWorkspaceCloseButton = document.querySelector('.tw-input-kit-widget__workspace-buttons-wrapper')
    const sidebarWorkspaceBackButton = document.querySelector('.workspace-popup-back-button')
    const sidebarprojectButton = document.querySelector('.project-popup-button')
    const sidebarprojectPopup = document.querySelector('.tw-popup-content-wrapper-project')
    const sidebarprojectLayer = document.querySelector('.tw-popup-layer-project')
    const sidebarprojectCloseButton = document.querySelector('.tw-input-kit-widget__project-buttons-wrapper')
    const sidebarprojectBackButton = document.querySelector('.project-popup-back-button')
    const sidebartasklistButton = document.querySelector('.tasklist-popup-button')
    const sidebartasklistPopup = document.querySelector('.tw-popup-content-wrapper-tasklist')
    const sidebartasklistLayer = document.querySelector('.tw-popup-layer-tasklist')
    const sidebartasklistCloseButton = document.querySelector('.tw-input-kit-widget__tasklist-buttons-wrapper')
    const sidebartasklistBackButton = document.querySelector('.tasklist-popup-back-button')
    const sidebarNewtasklistButton = document.querySelector('.new-tasklist-popup-button')
    const sidebarNewtasklistPopup = document.querySelector('.tw-popup-content-wrapper-new-tasklist')
    const sidebarNewtasklistLayer = document.querySelector('.tw-popup-layer-new-tasklist')
    const sidebarNewtasklistCloseButton = document.querySelector('.tw-input-kit-widget__new-tasklist-buttons-wrapper')
    const sidebarNewtasklistBackButton = document.querySelector('.new-tasklist-popup-back-button')
    const sidebarMemberPlusButton = document.querySelector('.tw-add-members-box__button')
    const sidebarMemberPopup = document.querySelector('.tw-popup-content-wrapper-sidebar-member')
    const sidebarMemberLayer = document.querySelector('.tw-popup-layer-sidebar-member')
    const sidebarMemberInviteButton = document.querySelector('.member-invite-popup-button')
    const sidebarMemberInvitePopup = document.querySelector('.tw-popup-content-wrapper-member-invite')
    const sidebarMemberInviteLayer = document.querySelector('.tw-popup-layer-sidebar-member-invite')
    const sidebarMemberInviteCloseButton = document.querySelector('.tw-input-kit-widget__member-invite-buttons-wrapper')
    const sidebarMemberInviteBackButton = document.querySelector('.member-invite-popup-back-button')
    const sidebarlocationDuplicateButton = document.querySelector('.duplication-location-popup-button')
    const sidebarlocationDuplicatePopup = document.querySelector('.tw-popup-content-wrapper-sidebar-duplication-location')
    const sidebarlocationDuplicateLayer = document.querySelector('.tw-popup-layer-sidebar-duplication-location')
    const sidebarlocationDuplicateCloseButton = document.querySelector('.tw-input-kit-widget__duplication-location-buttons-wrapper')
    const sidebarCloseButton = document.querySelector('.tw-input-kit-widget__sidebar-member-buttons-wrapper')
    const sidebarlocationTextButton = document.querySelector('.tw-task-location-selector__location')
    const sidebarlocationPopup = document.querySelector('.tw-popup-content-wrapper-sidebar-location')
    const sidebarlocationCloseButton = document.querySelector('.tw-input-kit-widget__location-buttons-wrapper')
    const sidebarlocationLayer = document.querySelector('.tw-popup-layer-sidebar-location')
    const sidebarLocationProjectButton = document.querySelector('.location-project-popup-button')
    const sidebarLocationProjectPopup = document.querySelector('.tw-popup-content-wrapper-location-project')
    const sidebarLocationProjectLayer = document.querySelector('.tw-popup-layer-location-project')
    const sidebarLocationProjectCloseButton = document.querySelector('.tw-input-kit-widget__location-project-buttons-wrapper')
    const sidebarLocationProjectBackButton = document.querySelector('.location-project-popup-back-button')
    const sidebarLocationTasklistButton = document.querySelector('.location-tasklist-popup-button')
    const sidebarLocationTasklistPopup = document.querySelector('.tw-popup-content-wrapper-location-tasklist')
    const sidebarLocationTasklistLayer = document.querySelector('.tw-popup-layer-location-tasklist')
    const sidebarLocationTasklistCloseButton = document.querySelector('.tw-input-kit-widget__location-tasklist-buttons-wrapper')
    const sidebarLocationTasklistBackButton = document.querySelector('.location-tasklist-popup-back-button')
    const sidebarFollowerPlusButton = document.querySelector('.tw-add-follower-box')
    const sidebarFollowerPopup = document.querySelector('.tw-popup-content-wrapper-sidebar-follower')
    const sidebarFollowerLayer = document.querySelector('.tw-popup-layer-sidebar-follower')
    const sidebarFollowClosePopup = document.querySelector('.tw-input-kit-widget__sidebar-follower-buttons-wrapper')
    const sidebarFollowInviteButton = document.querySelector('.follower-invite-popup-button')
    const sidebarFollowInvitePopup = document.querySelector('.tw-popup-content-wrapper-follower-invite')
    const sidebarFollowInviteLayer = document.querySelector('.tw-popup-layer-sidebar-follower-invite')
    const sidebarFollowInviteCloseButton = document.querySelector('.tw-input-kit-widget__follower-invite-buttons-wrapper')
    const sidebarFollowInviteBackButton = document.querySelector('.follower-invite-popup-back-button')
    const sidebarTagPlusButton = document.querySelector('.add-tag-box')
    const sidebarTagPopup = document.querySelector('.tw-popup-content-wrapper-sidebar-tag')
    const sidebarTagCloseButton = document.querySelector('.tw-input-kit-widget__tags-buttons-wrapper')
    const sidebarTagLayer = document.querySelector('.tw-popup-layer-sidebar-tag')
    const sidebarNewTagButton = document.querySelector('.new-tag-popup-button')
    const sidebarNewTagPopup = document.querySelector('.tw-popup-content-wrapper-new-tag')
    const sidebarNewTagLayer = document.querySelector('.tw-popup-layer-new-tag')
    const sidebarNewTagCloseButton = document.querySelector('.tw-input-kit-widget__new-tag-buttons-wrapper')
    const sidebarNewTagBackButton = document.querySelector('.new-tag-back-button')
    const sidebarTagEditButton = document.querySelectorAll('.tag-edit-popup-button')
    const sidebarTagEditPopup = document.querySelector('.tw-popup-content-wrapper-tag-edit')
    const sidebarTagEditLayer = document.querySelector('.tw-popup-layer-tag-edit')
    const sidebarTagEditCloseButton = document.querySelector('.tw-input-kit-widget__tag-edit-buttons-wrapper')
    const sidebarTagEditBackButton = document.querySelector('.tag-edit-back-button')
    const sidebarNameCardButton = document.querySelector('.member-namecard-button')
    const sidebarNameCardPopup = document.querySelector('.tw-popup-content-wrapper-sidebar-namecard')
    const sidebarNameCardLayer = document.querySelector('.tw-popup-layer-sidebar-namecard')
    const sidebarNameCardCloseButton = document.querySelector('.tw-task-properties-pane__wrapper')
    const sidebarTimePlusButton = document.querySelector('.add-time-box')
    const sidebarTimePopup = document.querySelector('.tw-popup-content-wrapper-sidebar-time')
    const sidebarTimeCloseButton = document.querySelector('.tw-input-kit-widget__time-buttons-wrapper')
    const sidebarTimeLayer = document.querySelector('.tw-popup-layer-sidebar-time')
    const sidebarRecordTimeButton = document.querySelector('.tw-task-time-spent-button')
    const sidebarRecordTimePopup = document.querySelector('.tw-popup-content-wrapper-sidebar-record-time')
    const sidebarRecordTimeCloseButton = document.querySelector('.tw-input-kit-widget__record-time-buttons-wrapper')
    const sidebarRecordTimeLayer = document.querySelector('.tw-popup-layer-sidebar-record-time')
    const sidebarUserTimeButton = document.querySelector('.user-time-popup-button')
    const sidebarUserTimePopup = document.querySelector('.tw-popup-content-wrapper-user-time')
    const sidebarUserTimeLayer = document.querySelector('.tw-popup-layer-user-time')
    const sidebarUserTimeCloseButton = document.querySelector('.tw-input-kit-widget__user-tmebuttons-wrapper')
    const sidebarUserTimeBackButton = document.querySelector('.user-time-back-button')
    const sidebarUndertaskDropmenuPopup = document.querySelector('.tw-popup-content-wrapper-undertask-dropmenu')
    const sidebarUndertaskDropmenuLayer = document.querySelector('.tw-popup-layer-undertask-dropmenu')
    const sidebarUndertaskDropmenuButton = document.querySelectorAll('.undertask-dropmenu-popup-button')

    
    let isSidebarPlusMovePopupOpen = false;
    let isSidebarWorkspacePopupOpen = false;
    let isSidebarprojectPopupOpen = false;
    let isSidebartasklistPopupOpen = false;
    let isSidebarNewtasklistPopupOpen =false;
    let isSidebarlocationDuplicatePopupOpen = false;
    let isSidebarMemberPopupOpen = false;
    let isSidebarMemberInvitePopupOpen = false;
    let isSidebarFollowerPopupOpen = false;
    let isSidebarFollowPopupOpen = false;
    let isSidebarLocationPopupOpen = false;
    let isSidebarLocationProjectPopupOpen = false;
    let isSidebarLocationTasklistPopupOpen = false;
    let isSidebarTagPopupOpen = false;
    let isSidebarNewTagPopupOpen = false;
    let isSidebarTagEditPopupOpen = false;
    let isSidebarNameCardPopupOpen = false;
    let isSidebarTimePopupOpen = false;
    let isSidebarRecordTimePopupOpen = false;
    let isSidebarUserTimePopupOpen = false;
    let isSidebarUndertaskPopupOpen = false;


    //이동... popup
    sidebarPlusMoveButton.addEventListener('click', function(e){

        const sidebarPlusMoveButtonRect = sidebarPlusMoveButton.getBoundingClientRect(); 
        const sidebarPlusMovePopupLeft = sidebarPlusMoveButtonRect.left + window.scrollX + (sidebarPlusMoveButtonRect.width / 2) - (sidebarPlusMovePopup.offsetWidth / 2) - 484;
        const sidebarPlusMovePopupTop = sidebarPlusMoveButtonRect.bottom + window.scrollY - 40;

        sidebarPlusMovePopup.style.left = sidebarPlusMovePopupLeft + 'px';
        sidebarPlusMovePopup.style.top = sidebarPlusMovePopupTop + 'px';
        sidebarPlusMovePopup.style.position = 'absolute';

        if (sidebarPlusMoveLayer.style.display === 'none' || sidebarPlusMoveLayer.style.display === '') {
            sidebarPlusMovePopup.style.display = 'block';
            sidebarPlusMoveLayer.style.display = 'block';
    
            isSidebarPlusMovePopupOpen = true;
    
            const moveSidebarPlusMovePopup = function(event) {
                if (!isSidebarPlusMovePopupOpen) {
                sidebarPlusMovePopup.style.display = 'none';
                sidebarPlusMoveLayer.style.display = 'none';
                document.removeEventListener('click', moveSidebarPlusMovePopup);
                }
            };
    
            document.addEventListener('click', moveSidebarPlusMovePopup);
        }   else {
            sidebarPlusMovePopup.style.display = 'none';
            sidebarPlusMoveLayer.style.display = 'none';
        }

        sidebarPlusMoveCloseButton.addEventListener('click', function(e){
            sidebarPlusMovePopup.style.display = 'none';
            sidebarPlusMoveLayer.style.display = 'none';
        })
    
        e.stopPropagation(); 
    })
    //워크스페이스 popup
    sidebarWorkspaceButton.addEventListener('click', function(e){

        const sidebarWorkspaceButtonRect = sidebarWorkspaceButton.getBoundingClientRect(); 
        const sidebarWorkspacePopupLeft = sidebarWorkspaceButtonRect.left + window.scrollX + (sidebarWorkspaceButtonRect.width / 2) - (sidebarWorkspacePopup.offsetWidth / 2) - 175;
        const sidebarWorkspacePopupTop = sidebarWorkspaceButtonRect.bottom + window.scrollY - 122;

        sidebarWorkspacePopup.style.left = sidebarWorkspacePopupLeft + 'px';
        sidebarWorkspacePopup.style.top = sidebarWorkspacePopupTop + 'px';
        sidebarWorkspacePopup.style.position = 'absolute';

        if (sidebarWorkspaceLayer.style.display === 'none' || sidebarWorkspaceLayer.style.display === '') {
            sidebarWorkspacePopup.style.display = 'block';
            sidebarWorkspaceLayer.style.display = 'block';
            sidebarPlusMovePopup.style.display = 'none';
            sidebarPlusMoveLayer.style.display = 'none';
    
            isSidebarWorkspacePopupOpen = true;
    
            const moveSidebarWorkspacePopup = function(event) {
                if (!isSidebarWorkspacePopupOpen) {
                sidebarWorkspacePopup.style.display = 'none';
                sidebarWorkspaceLayer.style.display = 'none';
                document.removeEventListener('click', moveSidebarWorkspacePopup);
                }
            };
    
            document.addEventListener('click', moveSidebarWorkspacePopup);
        }   else {
            sidebarWorkspacePopup.style.display = 'none';
            sidebarWorkspaceLayer.style.display = 'none';
        }

        sidebarWorkspaceCloseButton.addEventListener('click', function(e){
            sidebarWorkspacePopup.style.display = 'none';
            sidebarWorkspaceLayer.style.display = 'none';
            sidebarPlusMovePopup.style.display = 'none';
            sidebarPlusMoveLayer.style.display = 'none';
        })

        sidebarWorkspaceBackButton.addEventListener('click', function(e){
            sidebarWorkspacePopup.style.display = 'none';
            sidebarWorkspaceLayer.style.display = 'none';
            sidebarPlusMovePopup.style.display = 'block';
            sidebarPlusMoveLayer.style.display = 'block';
        })
    
        e.stopPropagation(); 
        
    })
    //프로젝트 popup
    sidebarprojectButton.addEventListener('click', function(e){

        const sidebarprojectButtonRect = sidebarprojectButton.getBoundingClientRect(); 
        const sidebarprojectPopupLeft = sidebarprojectButtonRect.left + window.scrollX + (sidebarprojectButtonRect.width / 2) - (sidebarprojectPopup.offsetWidth / 2) - 175;
        const sidebarprojectPopupTop = sidebarprojectButtonRect.bottom + window.scrollY - 195;

        sidebarprojectPopup.style.left = sidebarprojectPopupLeft + 'px';
        sidebarprojectPopup.style.top = sidebarprojectPopupTop + 'px';
        sidebarprojectPopup.style.position = 'absolute';

        if (sidebarprojectLayer.style.display === 'none' || sidebarprojectLayer.style.display === '') {
            sidebarprojectPopup.style.display = 'block';
            sidebarprojectLayer.style.display = 'block';
            sidebarPlusMovePopup.style.display = 'none';
            sidebarPlusMoveLayer.style.display = 'none';
    
            isSidebarprojectPopupOpen = true;
    
            const moveSidebarprojectPopup = function(event) {
                if (!isSidebarprojectPopupOpen) {
                sidebarprojectPopup.style.display = 'none';
                sidebarprojectLayer.style.display = 'none';
                document.removeEventListener('click', moveSidebarprojectPopup);
                }
            };
    
            document.addEventListener('click', moveSidebarprojectPopup);
        }   else {
            sidebarprojectPopup.style.display = 'none';
            sidebarprojectLayer.style.display = 'none';
        }

        sidebarprojectCloseButton.addEventListener('click', function(e){
            sidebarprojectPopup.style.display = 'none';
            sidebarprojectLayer.style.display = 'none';
            sidebarPlusMovePopup.style.display = 'none';
            sidebarPlusMoveLayer.style.display = 'none';
        })

        sidebarprojectBackButton.addEventListener('click', function(e){
            sidebarprojectPopup.style.display = 'none';
            sidebarprojectLayer.style.display = 'none';
            sidebarPlusMovePopup.style.display = 'block';
            sidebarPlusMoveLayer.style.display = 'block';
        })
    
        e.stopPropagation(); 
    })
    //업무리스트 popup
    sidebartasklistButton.addEventListener('click', function(e){

        const sidebartasklistButtonRect = sidebartasklistButton.getBoundingClientRect(); 
        const sidebartasklistPopupLeft = sidebartasklistButtonRect.left + window.scrollX + (sidebartasklistButtonRect.width / 2) - (sidebartasklistPopup.offsetWidth / 2) - 175;
        const sidebartasklistPopupTop = sidebartasklistButtonRect.bottom + window.scrollY - 270;

        sidebartasklistPopup.style.left = sidebartasklistPopupLeft + 'px';
        sidebartasklistPopup.style.top = sidebartasklistPopupTop + 'px';
        sidebartasklistPopup.style.position = 'absolute';

        if (sidebartasklistLayer.style.display === 'none' || sidebartasklistLayer.style.display === '') {
            sidebartasklistPopup.style.display = 'block';
            sidebartasklistLayer.style.display = 'block';
            sidebarPlusMovePopup.style.display = 'none';
            sidebarPlusMoveLayer.style.display = 'none';
    
            isSidebartasklistPopupOpen = true;
    
            const moveSidebartasklistPopup = function(event) {
                if (!isSidebartasklistPopupOpen) {
                sidebartasklistPopup.style.display = 'none';
                sidebartasklistLayer.style.display = 'none';
                document.removeEventListener('click', moveSidebartasklistPopup);
                }
            };
    
            document.addEventListener('click', moveSidebartasklistPopup);
        }   else {
            sidebartasklistPopup.style.display = 'none';
            sidebartasklistLayer.style.display = 'none';
        }

        sidebartasklistCloseButton.addEventListener('click', function(e){
            sidebartasklistPopup.style.display = 'none';
            sidebartasklistLayer.style.display = 'none';
            sidebarPlusMovePopup.style.display = 'none';
            sidebarPlusMoveLayer.style.display = 'none';
        })

        sidebartasklistBackButton.addEventListener('click', function(e){
            sidebartasklistPopup.style.display = 'none';
            sidebartasklistLayer.style.display = 'none';
            sidebarPlusMovePopup.style.display = 'block';
            sidebarPlusMoveLayer.style.display = 'block';
        })
    
        e.stopPropagation(); 
    })
    //새 업무리스트 만들기 popup
    sidebarNewtasklistButton.addEventListener('click', function(e){

        const sidebarNewtasklistButtonRect = sidebarNewtasklistButton.getBoundingClientRect(); 
        const sidebarNewtasklistPopupLeft = sidebarNewtasklistButtonRect.left + window.scrollX + (sidebarNewtasklistButtonRect.width / 2) - (sidebarNewtasklistPopup.offsetWidth / 2) - 175;
        const sidebarNewtasklistPopupTop = sidebarNewtasklistButtonRect.bottom + window.scrollY - 375;

        sidebarNewtasklistPopup.style.left = sidebarNewtasklistPopupLeft + 'px';
        sidebarNewtasklistPopup.style.top = sidebarNewtasklistPopupTop + 'px';
        sidebarNewtasklistPopup.style.position = 'absolute';

        if (sidebarNewtasklistLayer.style.display === 'none' || sidebarNewtasklistLayer.style.display === '') {
            sidebarNewtasklistPopup.style.display = 'block';
            sidebarNewtasklistLayer.style.display = 'block';
            sidebartasklistPopup.style.display = 'none';
            sidebartasklistLayer.style.display = 'none';
            sidebarPlusMovePopup.style.display = 'none';
            sidebarPlusMoveLayer.style.display = 'none';
           
            isSidebarNewtasklistPopupOpen = true;
    
            const moveSidebarNewtasklistPopup = function(event) {
                if (!isSidebarNewtasklistPopupOpen) {
                sidebarNewtasklistPopup.style.display = 'none';
                sidebarNewtasklistLayer.style.display = 'none';
                document.removeEventListener('click', moveSidebarNewtasklistPopup);
                }
            };
    
            document.addEventListener('click', moveSidebarNewtasklistPopup);
        }   else {
            sidebarNewtasklistPopup.style.display = 'none';
            sidebarNewtasklistLayer.style.display = 'none';
        }

        sidebarNewtasklistCloseButton.addEventListener('click', function(e){
            sidebarNewtasklistPopup.style.display = 'none';
            sidebarNewtasklistLayer.style.display = 'none';
            sidebarPlusMovePopup.style.display = 'none';
            sidebarPlusMoveLayer.style.display = 'none';
        })

        sidebarNewtasklistBackButton.addEventListener('click', function(e){
            sidebarNewtasklistPopup.style.display = 'none';
            sidebarNewtasklistLayer.style.display = 'none';
            sidebartasklistPopup.style.display = 'block';
            sidebartasklistLayer.style.display = 'block';
        })
    
        e.stopPropagation(); 
    })

    //배정된 멤버 popup
    sidebarMemberPlusButton.addEventListener('click', function(e){

        const sidebarMemberPlusButtonRect = sidebarMemberPlusButton.getBoundingClientRect(); 
        const sidebarMemberPopupLeft = sidebarMemberPlusButtonRect.left + window.scrollX + (sidebarMemberPlusButtonRect.width / 2) - (sidebarMemberPopup.offsetWidth / 2) - 336;
        const sidebarMemberPopupTop = sidebarMemberPlusButtonRect.bottom + window.scrollY + 5;

        sidebarMemberPopup.style.left = sidebarMemberPopupLeft + 'px';
        sidebarMemberPopup.style.top = sidebarMemberPopupTop + 'px';
        sidebarMemberPopup.style.position = 'absolute';

        if (sidebarMemberLayer.style.display === 'none' || sidebarMemberLayer.style.display === '') {
            sidebarMemberPopup.style.display = 'block';
            sidebarMemberLayer.style.display = 'block';
    
            isSidebarMemberPopupOpen = true;
    
            const moveSidebarMemberPopup = function(event) {
                if (!isSidebarMemberPopupOpen) {
                sidebarMemberPopup.style.display = 'none';
                sidebarMemberLayer.style.display = 'none';
                document.removeEventListener('click', moveSidebarMemberPopup);
                }
            };
    
            document.addEventListener('click', moveSidebarMemberPopup);
        }   else {
            sidebarMemberPopup.style.display = 'none';
            sidebarMemberLayer.style.display = 'none';
        }

        sidebarCloseButton.addEventListener('click', function(e){
            sidebarMemberPopup.style.display = 'none';
            sidebarMemberLayer.style.display = 'none';
        })
    
        e.stopPropagation(); 
    })
    //멤버 초대하기 popup
    sidebarMemberInviteButton.addEventListener('click', function(e){

        const sidebarMemberInviteButtonRect = sidebarMemberInviteButton.getBoundingClientRect(); 
        const sidebarMemberInvitePopupLeft = sidebarMemberInviteButtonRect.left + window.scrollX + (sidebarMemberInviteButtonRect.width / 2) - (sidebarMemberInvitePopup.offsetWidth / 2) - 170;
        const sidebarMemberInvitePopupTop = sidebarMemberInviteButtonRect.bottom + window.scrollY - 370;

        sidebarMemberInvitePopup.style.left = sidebarMemberInvitePopupLeft + 'px';
        sidebarMemberInvitePopup.style.top = sidebarMemberInvitePopupTop + 'px';
        sidebarMemberInvitePopup.style.position = 'absolute';

        if (sidebarMemberInviteLayer.style.display === 'none' || sidebarMemberInviteLayer.style.display === '') {
            sidebarMemberInvitePopup.style.display = 'block';
            sidebarMemberInviteLayer.style.display = 'block';
            sidebarMemberPopup.style.display = 'none';
            sidebarMemberLayer.style.display = 'none';
    
            isSidebarMemberInvitePopupOpen = true;
    
            const moveSidebarMemberPopup = function(event) {
                if (!isSidebarMemberInvitePopupOpen) {
                sidebarMemberInvitePopup.style.display = 'none';
                sidebarMemberInviteLayer.style.display = 'none';
                document.removeEventListener('click', moveSidebarMemberPopup);
                }
            };
    
            document.addEventListener('click', moveSidebarMemberPopup);
        }   else {
            sidebarMemberInvitePopup.style.display = 'none';
            sidebarMemberInviteLayer.style.display = 'none';
        }

        sidebarMemberInviteCloseButton.addEventListener('click', function(e){
            sidebarMemberInvitePopup.style.display = 'none';
            sidebarMemberInviteLayer.style.display = 'none';
        })

        sidebarMemberInviteBackButton.addEventListener('click', function(e){
            sidebarMemberInvitePopup.style.display = 'none';
            sidebarMemberInviteLayer.style.display = 'none';
            sidebarMemberPopup.style.display = 'block';
            sidebarMemberLayer.style.display = 'block';
        })
    
        e.stopPropagation(); 
    })
    //배정하기 모달(sidebar-new-tasklist-modal) HTML 파일 경로 설정
    const newTasklistModalHtmlPath = 'sidebar-new-tasklist-modal.html';

    function openNewTasklistModal() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', newTasklistModalHtmlPath, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const newTasklistModalHtml = xhr.responseText;
                displayNewTasklistModal(newTasklistModalHtml);
            }
        };
        xhr.send();
    }

    function displayNewTasklistModal(newTasklistModalHtml) {
        const newTasklistmodalContainer = document.createElement('div');
        newTasklistmodalContainer.classList.add('custom-newTasklistmodal'); 
        newTasklistmodalContainer.innerHTML = newTasklistModalHtml; 

        document.body.appendChild(newTasklistmodalContainer);

        // 닫기 버튼 클릭 이벤트 처리
        const closeButton = newTasklistmodalContainer.querySelector('.tw-button-v-2');
        closeButton.addEventListener('click', closeNewTasklistModal);

        // 모달 외부 클릭 시 닫기
        newTasklistmodalContainer.addEventListener('click', function (e) {
            if (e.target === newTasklistmodalContainer) {
                closeNewTasklistModal();
            }
        });

        newTasklistmodalContainer.style.display = 'block';
    }
 
    // 모달 닫기 함수
    function closeNewTasklistModal() {
        const newTasklistmodalContainer = document.querySelector('.custom-newTasklistmodal');
        if (newTasklistmodalContainer) {
            newTasklistmodalContainer.style.display = 'none';
            document.body.removeChild(newTasklistmodalContainer);
        }
    }

    const newTasklistButton = document.querySelector('.new-tasklist-modal-button');
    newTasklistButton.addEventListener('click', function (e) {
        e.stopPropagation();
        openNewTasklistModal();
    });

    //위치 Text popup
    sidebarlocationTextButton.addEventListener('click', function(e){

        const sidebarlocationTextButtonButtonRect = sidebarlocationTextButton.getBoundingClientRect(); 
        const sidebarlocationPopupLeft = sidebarlocationTextButtonButtonRect.left + window.scrollX + (sidebarlocationTextButtonButtonRect.width / 2) - (sidebarlocationPopup.offsetWidth / 2) - 45;
        const sidebarlocationPopupTop = sidebarlocationTextButtonButtonRect.bottom + window.scrollY;

        sidebarlocationPopup.style.left = sidebarlocationPopupLeft + 'px';
        sidebarlocationPopup.style.top = sidebarlocationPopupTop + 'px';
        sidebarlocationPopup.style.position = 'absolute';

        if (sidebarlocationLayer.style.display === 'none' || sidebarlocationLayer.style.display === '') {
            sidebarlocationPopup.style.display = 'block';
            sidebarlocationLayer.style.display = 'block';
    
            isSidebarLocationPopupOpen = true;
    
            const moveSidebarLocationPopup = function(event) {
                if (!isSidebarLocationPopupOpen) {
                sidebarlocationPopup.style.display = 'none';
                sidebarlocationLayer.style.display = 'none';
                document.removeEventListener('click', moveSidebarLocationPopup);
                }
            };
    
            document.addEventListener('click', moveSidebarLocationPopup);
        }   else {
            sidebarlocationPopup.style.display = 'none';
            sidebarlocationLayer.style.display = 'none';
        }

        sidebarlocationCloseButton.addEventListener('click', function(e){
            sidebarlocationPopup.style.display = 'none';
            sidebarlocationLayer.style.display = 'none';
        })
    
        e.stopPropagation(); 
    })
    //위치 Text->프로젝트 popup
    sidebarLocationProjectButton.addEventListener('click', function(e){

        const sidebarLocationProjectButtonRect = sidebarLocationProjectButton.getBoundingClientRect(); 
        const sidebarLocationProjectPopupLeft = sidebarLocationProjectButtonRect.left + window.scrollX + (sidebarLocationProjectButtonRect.width / 2) - (sidebarLocationProjectPopup.offsetWidth / 2) - 175;
        const sidebarLocationProjectPopupTop = sidebarLocationProjectButtonRect.bottom + window.scrollY - 120;

        sidebarLocationProjectPopup.style.left = sidebarLocationProjectPopupLeft + 'px';
        sidebarLocationProjectPopup.style.top = sidebarLocationProjectPopupTop + 'px';
        sidebarLocationProjectPopup.style.position = 'absolute';

        if (sidebarLocationProjectLayer.style.display === 'none' || sidebarLocationProjectLayer.style.display === '') {
            sidebarLocationProjectPopup.style.display = 'block';
            sidebarLocationProjectLayer.style.display = 'block';
            sidebarlocationPopup.style.display = 'none';
            sidebarlocationLayer.style.display = 'none';
    
            isSidebarLocationProjectPopupOpen = true;
    
            const moveSidebarLocationProjectPopup = function(event) {
                if (! isSidebarLocationProjectPopupOpen) {
                sidebarLocationProjectPopup.style.display = 'none';
                sidebarLocationProjectLayer.style.display = 'none';
                document.removeEventListener('click', moveSidebarLocationProjectPopup);
                }
            };
    
            document.addEventListener('click', moveSidebarLocationProjectPopup);
        }   else {
            sidebarLocationProjectPopup.style.display = 'none';
            sidebarLocationProjectLayer.style.display = 'none';
        }

        sidebarLocationProjectCloseButton.addEventListener('click', function(e){
            sidebarLocationProjectPopup.style.display = 'none';
            sidebarLocationProjectLayer.style.display = 'none';
        })

        sidebarLocationProjectBackButton.addEventListener('click', function(e){
            sidebarLocationProjectPopup.style.display = 'none';
            sidebarLocationProjectLayer.style.display = 'none';
            sidebarlocationPopup.style.display = 'block';
            sidebarlocationLayer.style.display = 'block';
        })
    
        e.stopPropagation(); 
    })
    //위치 Text->업무리스트 popup
    sidebarLocationTasklistButton.addEventListener('click', function(e){

        const sidebarLocationTasklistButtonRect = sidebarLocationTasklistButton.getBoundingClientRect(); 
        const sidebarLocationTasklistPopupLeft = sidebarLocationTasklistButtonRect.left + window.scrollX + (sidebarLocationTasklistButtonRect.width / 2) - (sidebarLocationTasklistPopup.offsetWidth / 2) - 175;
        const sidebarLocationTasklistPopupTop = sidebarLocationTasklistButtonRect.bottom + window.scrollY - 195;

        sidebarLocationTasklistPopup.style.left = sidebarLocationTasklistPopupLeft + 'px';
        sidebarLocationTasklistPopup.style.top = sidebarLocationTasklistPopupTop + 'px';
        sidebarLocationTasklistPopup.style.position = 'absolute';

        if (sidebarLocationTasklistLayer.style.display === 'none' || sidebarLocationTasklistLayer.style.display === '') {
            sidebarLocationTasklistPopup.style.display = 'block';
            sidebarLocationTasklistLayer.style.display = 'block';
            sidebarlocationPopup.style.display = 'none';
            sidebarlocationLayer.style.display = 'none';
    
            isSidebarLocationTasklistPopupOpen = true;
    
            const moveSidebarLocationTasklistPopup = function(event) {
                if (! isSidebarLocationTasklistPopupOpen) {
                sidebarLocationTasklistPopup.style.display = 'none';
                sidebarLocationTasklistLayer.style.display = 'none';
                document.removeEventListener('click', moveSidebarLocationTasklistPopup);
                }
            };
    
            document.addEventListener('click', moveSidebarLocationTasklistPopup);
        }   else {
            sidebarLocationTasklistPopup.style.display = 'none';
            sidebarLocationTasklistLayer.style.display = 'none';
        }

        sidebarLocationTasklistCloseButton.addEventListener('click', function(e){
      
            sidebarLocationTasklistPopup.style.display = 'none';
            sidebarLocationTasklistLayer.style.display = 'none';
        })

        sidebarLocationTasklistBackButton.addEventListener('click', function(e){
            sidebarLocationTasklistPopup.style.display = 'none';
            sidebarLocationTasklistLayer.style.display = 'none';
            sidebarlocationPopup.style.display = 'block';
            sidebarlocationLayer.style.display = 'block';
        })
    
        e.stopPropagation(); 
    })

    //9/18수정//
    //달력 plus버튼 생성
    // const removeDateButton = document.querySelector('.tw-add-combined-date-panel__remove-date');
    // const combinedDatePanel = document.querySelector('.date-panel-plus-button');

    // removeDateButton.addEventListener('click', function() {
    //     combinedDatePanel.style.display = 'block';
    // });
    //9/18수정//

    //팔로워 popup
    sidebarFollowerPlusButton.addEventListener('click', function(e){

        const sidebarFollowerPlusButtonRect = sidebarFollowerPlusButton.getBoundingClientRect(); 
        const sidebarFollowerPopupLeft = sidebarFollowerPlusButtonRect.left + window.scrollX + (sidebarFollowerPlusButtonRect.width / 2) - (sidebarFollowerPopup.offsetWidth / 2) - 335;
        const sidebarFollowerPopupTop = sidebarFollowerPlusButtonRect.bottom + window.scrollY - 365;

        sidebarFollowerPopup.style.left = sidebarFollowerPopupLeft + 'px';
        sidebarFollowerPopup.style.top = sidebarFollowerPopupTop + 'px';
        sidebarFollowerPopup.style.position = 'absolute';

        if (sidebarFollowerLayer.style.display === 'none' || sidebarFollowerLayer.style.display === '') {
            sidebarFollowerPopup.style.display = 'block';
            sidebarFollowerLayer.style.display = 'block';
    
            isSidebarFollowerPopupOpen = true;
    
            const moveSidebarFollowerPopup = function(event) {
                if (!isSidebarFollowerPopupOpen) {
                    sidebarFollowerPopup.style.display = 'none';
                sidebarFollowerLayer.style.display = 'none';
                document.removeEventListener('click', moveSidebarFollowerPopup);
                }
            };
    
            document.addEventListener('click', moveSidebarFollowerPopup);
        }   else {
            sidebarFollowerPopup.style.display = 'none';
            sidebarFollowerLayer.style.display = 'none';
        }

        sidebarFollowClosePopup.addEventListener('click', function(e){
            sidebarFollowerPopup.style.display = 'none';
            sidebarFollowerLayer.style.display = 'none';
        })
    
        e.stopPropagation(); 

    })
    //팔로워 멤버 초대하기 popup
    sidebarFollowInviteButton.addEventListener('click', function(e){

        const sidebarFollowInviteButtonRect = sidebarFollowInviteButton.getBoundingClientRect(); 
        const sidebarFollowInvitePopupLeft = sidebarFollowInviteButtonRect.left + window.scrollX + (sidebarFollowInviteButtonRect.width / 2) - (sidebarFollowInvitePopup.offsetWidth / 2) - 170;
        const sidebarFollowInvitePopupTop = sidebarFollowInviteButtonRect.bottom + window.scrollY - 370;

        sidebarFollowInvitePopup.style.left = sidebarFollowInvitePopupLeft + 'px';
        sidebarFollowInvitePopup.style.top = sidebarFollowInvitePopupTop + 'px';
        sidebarFollowInvitePopup.style.position = 'absolute';

        if (sidebarFollowInviteLayer.style.display === 'none' || sidebarFollowInviteLayer.style.display === '') {
            sidebarFollowInvitePopup.style.display = 'block';
            sidebarFollowInviteLayer.style.display = 'block';
            sidebarFollowerPopup.style.display = 'none';
            sidebarFollowerLayer.style.display = 'none';
    
            isSidebarFollowPopupOpen = true;
    
            const moveSidebarFollowPopup = function(event) {
                if (!isSidebarFollowPopupOpen) {
                sidebarFollowInvitePopup.style.display = 'none';
                sidebarFollowInviteLayer.style.display = 'none';
                document.removeEventListener('click', moveSidebarFollowPopup);
                }
            };
    
            document.addEventListener('click', moveSidebarFollowPopup);
        }   else {
            sidebarFollowInvitePopup.style.display = 'none';
            sidebarFollowInviteLayer.style.display = 'none';
        }

        sidebarFollowInviteCloseButton.addEventListener('click', function(e){
            sidebarFollowInvitePopup.style.display = 'none';
            sidebarFollowInviteLayer.style.display = 'none';
        })

        sidebarFollowInviteBackButton.addEventListener('click', function(e){
            sidebarFollowInvitePopup.style.display = 'none';
            sidebarFollowInviteLayer.style.display = 'none';
            sidebarFollowerPopup.style.display = 'block';
            sidebarFollowerLayer.style.display = 'block';
        })
    
        e.stopPropagation(); 
    })

    //태그 popup
    sidebarTagPlusButton.addEventListener('click', function(e){

        const sidebarTagPlusButtonRect = sidebarTagPlusButton.getBoundingClientRect(); 
        const sidebarTagPopupLeft = sidebarTagPlusButtonRect.left + window.scrollX + (sidebarTagPlusButtonRect.width / 2) - (sidebarTagPopup.offsetWidth / 2) - 335;
        const sidebarTagPopupTop = sidebarTagPlusButtonRect.bottom + window.scrollY - 542;

        sidebarTagPopup.style.left = sidebarTagPopupLeft + 'px';
        sidebarTagPopup.style.top = sidebarTagPopupTop + 'px';
        sidebarTagPopup.style.position = 'absolute';


        const scrollHandler = function() {
            const scrollTop = window.scrollY || window.pageYOffset;
    
            if (scrollTop > 100) { 
                const sidebarTagPlusButtonRect = sidebarTagPlusButton.getBoundingClientRect(); 
                const sidebarTagPopupLeft = sidebarTagPlusButtonRect.left + window.scrollX + (sidebarTagPlusButtonRect.width / 2) - (sidebarTagPopup.offsetWidth / 2);
                const sidebarTagPopupTop = sidebarTagPlusButtonRect.bottom + window.scrollY;

                sidebarTagPopup.style.left = sidebarTagPopupLeft + 'px';
                sidebarTagPopup.style.top = sidebarTagPopupTop + 'px';
                sidebarTagPopup.style.position = 'absolute';
            } else {
                const sidebarTagPlusButtonRect = sidebarTagPlusButton.getBoundingClientRect(); 
                const sidebarTagPopupLeft = sidebarTagPlusButtonRect.left + window.scrollX + (sidebarTagPlusButtonRect.width / 2) - (sidebarTagPopup.offsetWidth / 2) - 335;
                const sidebarTagPopupTop = sidebarTagPlusButtonRect.bottom + window.scrollY - 542;
        
                sidebarTagPopup.style.left = sidebarTagPopupLeft + 'px';
                sidebarTagPopup.style.top = sidebarTagPopupTop + 'px';
                sidebarTagPopup.style.position = 'absolute';        
            }
        };
    
        window.addEventListener('scroll', scrollHandler);


        if (sidebarTagLayer.style.display === 'none' || sidebarTagLayer.style.display === '') {
            sidebarTagPopup.style.display = 'block';
            sidebarTagLayer.style.display = 'block';
    
            isSidebarTagPopupOpen = true;
    
            const moveSidebarTagPopup = function(event) {
                if (!isSidebarTagPopupOpen) {
                sidebarTagPopup.style.display = 'none';
                sidebarTagLayer.style.display = 'none';
                document.removeEventListener('click', moveSidebarTagPopup);
                }
            };
    
            document.addEventListener('click', moveSidebarTagPopup);
        }   else {
            sidebarTagPopup.style.display = 'none';
            sidebarTagLayer.style.display = 'none';
        }

        sidebarTagCloseButton.addEventListener('click', function(e){
            sidebarTagPopup.style.display = 'none';
            sidebarTagLayer.style.display = 'none';
        })
    
        e.stopPropagation(); 
    })
    //새 태그 만들기 popup
    sidebarNewTagButton.addEventListener('click', function(e){

        const sidebarNewTagButtonRect = sidebarNewTagButton.getBoundingClientRect(); 
        const sidebarNewTagPopupLeft = sidebarNewTagButtonRect.left + window.scrollX + (sidebarNewTagButtonRect.width / 2) - (sidebarNewTagPopup.offsetWidth / 2) - 175;
        const sidebarNewTagPopupTop = sidebarNewTagButtonRect.bottom + window.scrollY - 210;

        sidebarNewTagPopup.style.left = sidebarNewTagPopupLeft + 'px';
        sidebarNewTagPopup.style.top = sidebarNewTagPopupTop + 'px';
        sidebarNewTagPopup.style.position = 'absolute';

        if (sidebarNewTagLayer.style.display === 'none' || sidebarNewTagLayer.style.display === '') {
            sidebarNewTagPopup.style.display = 'block';
            sidebarNewTagLayer.style.display = 'block';
            sidebarTagPopup.style.display = 'none';
            sidebarTagLayer.style.display = 'none';
    
            isSidebarNewTagPopupOpen = true;
    
            const moveSidebarNewTagPopupPopup = function(event) {
                if (!isSidebarNewTagPopupOpen) {
                sidebarNewTagPopup.style.display = 'none';
                sidebarNewTagLayer.style.display = 'none';
                document.removeEventListener('click', moveSidebarNewTagPopupPopup);
                }
            };
    
            document.addEventListener('click',moveSidebarNewTagPopupPopup);
        }   else {
            sidebarNewTagPopup.style.display = 'none';
            sidebarNewTagLayer.style.display = 'none';
        }

        sidebarNewTagCloseButton.addEventListener('click', function(e){
            sidebarNewTagPopup.style.display = 'none';
            sidebarNewTagLayer.style.display = 'none';
        })

        sidebarNewTagBackButton.addEventListener('click', function(e){
            sidebarNewTagPopup.style.display = 'none';
            sidebarNewTagLayer.style.display = 'none';
            sidebarTagPopup.style.display = 'block';
            sidebarTagLayer.style.display = 'block';
        })
    
        e.stopPropagation(); 
    })
    //태그편집 popup
    sidebarTagEditButton.forEach((button) => {
        button.addEventListener('click', function(e){

            const sidebarTagEditButtonRect = button.getBoundingClientRect(); 
            const sidebarTagEditPopupLeft = sidebarTagEditButtonRect.left + window.scrollX + (sidebarTagEditButtonRect.width / 2) - (sidebarTagEditPopup.offsetWidth / 2) - 315;
            const sidebarTagEditPopupTop = sidebarTagEditButtonRect.bottom + window.scrollY + 90;

            sidebarTagEditPopup.style.left = sidebarTagEditPopupLeft + 'px';
            sidebarTagEditPopup.style.top = sidebarTagEditPopupTop + 'px';
            sidebarTagEditPopup.style.position = 'absolute';

            if (sidebarTagEditLayer.style.display === 'none' || sidebarTagEditLayer.style.display === '') {
                sidebarTagEditPopup.style.display = 'block';
                sidebarTagEditLayer.style.display = 'block';
                sidebarTagPopup.style.display = 'none';
                sidebarTagLayer.style.display = 'none';
        
                isSidebarTagEditPopupOpen = true;
        
                const moveSidebarTagEditPopup = function(event) {
                    if (!isSidebarTagEditPopupOpen) {
                    sidebarTagEditPopup.style.display = 'none';
                    sidebarTagEditLayer.style.display = 'none';
                    document.removeEventListener('click', moveSidebarTagEditPopup);
                    }
                };
        
                document.addEventListener('click', moveSidebarTagEditPopup);
            }   else {
                sidebarTagEditPopup.style.display = 'none';
                sidebarTagEditLayer.style.display = 'none';
            }

            sidebarTagEditCloseButton.addEventListener('click', function(e){
                sidebarTagEditPopup.style.display = 'none';
                sidebarTagEditLayer.style.display = 'none';
            })

            sidebarTagEditBackButton.addEventListener('click', function(e){
                sidebarTagEditPopup.style.display = 'none';
                sidebarTagEditLayer.style.display = 'none';
                sidebarTagPopup.style.display = 'block';
                sidebarTagLayer.style.display = 'block';
            })
        
            e.stopPropagation(); 
        })
    })

    //명함카드 popup
    sidebarNameCardButton.addEventListener('click', function(e){

        const sidebarNameCardButtonRect = sidebarNameCardButton.getBoundingClientRect(); 
        const sidebarNameCardPopupLeft = sidebarNameCardButtonRect.left + window.scrollX + (sidebarNameCardButtonRect.width / 2) - (sidebarNameCardPopup.offsetWidth / 2) - 45;
        const sidebarNameCardPopupTop = sidebarNameCardButtonRect.bottom + window.scrollY + 4;

        sidebarNameCardPopup.style.left = sidebarNameCardPopupLeft + 'px';
        sidebarNameCardPopup.style.top = sidebarNameCardPopupTop + 'px';
        sidebarNameCardPopup.style.position = 'absolute';

        if (sidebarNameCardLayer.style.display === 'none' || sidebarNameCardLayer.style.display === '') {
            sidebarNameCardPopup.style.display = 'block';
            sidebarNameCardLayer.style.display = 'block';
    
            isSidebarNameCardPopupOpen = true;
    
            const moveSidebarNameCardPopup = function(event) {
                if (!isSidebarNameCardPopupOpen) {
                sidebarNameCardPopup.style.display = 'none';
                sidebarNameCardLayer.style.display = 'none';
                document.removeEventListener('click', moveSidebarNameCardPopup);
                }
            };
    
            document.addEventListener('click', moveSidebarNameCardPopup);
        }   else {
            sidebarNameCardPopup.style.display = 'none';
            sidebarNameCardLayer.style.display = 'none';
        }
    
        e.stopPropagation(); 
    });

    //명함카드 popup window에 클릭 이벤트 추가
    window.addEventListener('click', function (e) {
        // 팝업이 열려있고 팝업 외부를 클릭한 경우 팝업을 닫음
        if (isSidebarNameCardPopupOpen && e.target !== sidebarNameCardPopup && !sidebarNameCardPopup.contains(e.target)) {
            // 팝업을 닫지 않는 예외적인 경우 처리
            if (e.target === sidebarNameCardCloseButton || sidebarNameCardCloseButton.contains(e.target)) {
                // .tw-task-properties-pane__wrapper 또는 그 하위 요소를 클릭한 경우 팝업을 닫지 않음
                return;
            }
            sidebarNameCardPopup.style.display = 'none';
            sidebarNameCardLayer.style.display = 'none';
            isSidebarNameCardPopupOpen = false;
        }
    });

    //작업시간 popup
    sidebarTimePlusButton.addEventListener('click', function(e){

        const sidebarTimePlusButtonRect = sidebarTimePlusButton.getBoundingClientRect(); 
        const sidebarTimePopupLeft = sidebarTimePlusButtonRect.left + window.scrollX + (sidebarTimePlusButtonRect.width / 2) - (sidebarTimePopup.offsetWidth / 2) - 15;
        const sidebarTimePopupTop = sidebarTimePlusButtonRect.bottom + window.scrollY - 205;

        sidebarTimePopup.style.left = sidebarTimePopupLeft + 'px';
        sidebarTimePopup.style.top = sidebarTimePopupTop + 'px';
        sidebarTimePopup.style.position = 'absolute';

        if (sidebarTimeLayer.style.display === 'none' || sidebarTimeLayer.style.display === '') {
            sidebarTimePopup.style.display = 'block';
            sidebarTimeLayer.style.display = 'block';
    
            isSidebarTimePopupOpen = true;
    
            const moveSidebarTimePopup = function(event) {
                if (!isSidebarTimePopupOpen) {
                sidebarTimePopup.style.display = 'none';
                sidebarTimeLayer.style.display = 'none';
                document.removeEventListener('click', moveSidebarTimePopup);
                }
            };
    
            document.addEventListener('click', moveSidebarTimePopup);
        }   else {
            sidebarTimePopup.style.display = 'none';
            sidebarTimeLayer.style.display = 'none';
        }

        sidebarTimeCloseButton.addEventListener('click', function(e){
            sidebarTimePopup.style.display = 'none';
            sidebarTimeLayer.style.display = 'none';
        })
    
        e.stopPropagation(); 
    })
    //기록된시간 popup
    sidebarRecordTimeButton.addEventListener('click', function(e){

        const sidebarRecordTimeButtonRect = sidebarRecordTimeButton.getBoundingClientRect(); 
        const sidebarRecordTimePopupLeft = sidebarRecordTimeButtonRect.left + window.scrollX + (sidebarRecordTimeButtonRect.width / 2) - (sidebarRecordTimePopup.offsetWidth / 2) - 75;
        const sidebarRecordTimePopupTop = sidebarRecordTimeButtonRect.bottom + window.scrollY - 150;

        sidebarRecordTimePopup.style.left = sidebarRecordTimePopupLeft + 'px';
        sidebarRecordTimePopup.style.top = sidebarRecordTimePopupTop + 'px';
        sidebarRecordTimePopup.style.position = 'absolute';

        if (sidebarRecordTimeLayer.style.display === 'none' || sidebarRecordTimeLayer.style.display === '') {
            sidebarRecordTimePopup.style.display = 'block';
            sidebarRecordTimeLayer.style.display = 'block';
    
            isSidebarRecordTimePopupOpen = true;
    
            const moveSidebarRecordTimePopup = function(event) {
                if (!isSidebarRecordTimePopupOpen) {
                    sidebarRecordTimePopup.style.display = 'none';
                    sidebarRecordTimeLayer.style.display = 'none';
                document.removeEventListener('click', moveSidebarRecordTimePopup);
                }
            };
    
            document.addEventListener('click', moveSidebarRecordTimePopup);
        }   else {
            sidebarRecordTimePopup.style.display = 'none';
            sidebarRecordTimeLayer.style.display = 'none';
        }

        sidebarRecordTimeCloseButton.addEventListener('click', function(e){
            sidebarRecordTimePopup.style.display = 'none';
            sidebarRecordTimeLayer.style.display = 'none';
        })
    
        e.stopPropagation(); 
    })
    //개인 기록된 시간 popup
    sidebarUserTimeButton.addEventListener('click', function(e){

        const sidebarUserTimeButtonRect = sidebarUserTimeButton.getBoundingClientRect(); 
        const sidebarUserTimePopupLeft = sidebarUserTimeButtonRect.left + window.scrollX + (sidebarUserTimeButtonRect.width / 2) - (sidebarUserTimePopup.offsetWidth / 2) - 178;
        const sidebarUserTimePopupTop = sidebarUserTimeButtonRect.bottom + window.scrollY - 182;

        sidebarUserTimePopup.style.left = sidebarUserTimePopupLeft + 'px';
        sidebarUserTimePopup.style.top = sidebarUserTimePopupTop + 'px';
        sidebarUserTimePopup.style.position = 'absolute';

        if (sidebarUserTimeLayer.style.display === 'none' || sidebarUserTimeLayer.style.display === '') {
            sidebarUserTimePopup.style.display = 'block';
            sidebarUserTimeLayer.style.display = 'block';
            sidebarRecordTimePopup.style.display = 'none';
            sidebarRecordTimeLayer.style.display = 'none';
    
            isSidebarUserTimePopupOpen = true;
    
            const moveSidebarUserTimePopup = function(event) {
                if (!isSidebarUserTimePopupOpen) {
                    sidebarUserTimePopup.style.display = 'none';
                    sidebarUserTimeLayer.style.display = 'none';
                document.removeEventListener('click', moveSidebarUserTimePopup);
                }
            };
    
            document.addEventListener('click', moveSidebarUserTimePopup);
        }   else {
            sidebarUserTimePopup.style.display = 'none';
            sidebarUserTimeLayer.style.display = 'none';
        }

        sidebarUserTimeCloseButton.addEventListener('click', function(e){
            sidebarUserTimePopup.style.display = 'none';
            sidebarUserTimeLayer.style.display = 'none';
        })

        sidebarUserTimeBackButton.addEventListener('click', function(e){
            sidebarUserTimePopup.style.display = 'none';
            sidebarUserTimeLayer.style.display = 'none';
            sidebarRecordTimePopup.style.display = 'block';
            sidebarRecordTimeLayer.style.display = 'block';
        })
    
        e.stopPropagation(); 
    })

    //하위업무 더보기 popup
    sidebarUndertaskDropmenuButton.forEach((button) => {
        button.addEventListener('click', function(e){

            const sidebarUndertaskDropmenuButtonRect = button.getBoundingClientRect(); 
            const sidebarUndertaskDropmenuPopupLeft = sidebarUndertaskDropmenuButtonRect.left + window.scrollX + (sidebarUndertaskDropmenuButtonRect.width / 2) - (sidebarUndertaskDropmenuPopup.offsetWidth / 2) - 215;
            const sidebarUndertaskDropmenuPopupTop = sidebarUndertaskDropmenuButtonRect.bottom + window.scrollY ;
    
            sidebarUndertaskDropmenuPopup.style.left = sidebarUndertaskDropmenuPopupLeft + 'px';
            sidebarUndertaskDropmenuPopup.style.top = sidebarUndertaskDropmenuPopupTop + 'px';
            sidebarUndertaskDropmenuPopup.style.position = 'absolute';
    
            if (sidebarUndertaskDropmenuLayer.style.display === 'none' || sidebarUndertaskDropmenuLayer.style.display === '') {
                sidebarUndertaskDropmenuPopup.style.display = 'block';
                sidebarUndertaskDropmenuLayer.style.display = 'block';
        
                isSidebarUndertaskPopupOpen = true;
        
                const moveSidebarUndertaskPopup = function(event) {
                    if (!isSidebarUndertaskPopupOpen) {
                    sidebarUndertaskDropmenuPopup.style.display = 'none';
                    sidebarUndertaskDropmenuLayer.style.display = 'none';
                    document.removeEventListener('click', moveSidebarUndertaskPopup);
                    }
                };
        
                document.addEventListener('click', moveSidebarUndertaskPopup);
            }   else {
                sidebarUndertaskDropmenuPopup.style.display = 'none';
                sidebarUndertaskDropmenuLayer.style.display = 'none';
            }
        
            e.stopPropagation(); 
        })
    })
    
    // 문서의 다른 부분을 클릭 시 해당 팝업만 닫음
    document.addEventListener('click', function(e) {
        if (!sidebarUndertaskDropmenuPopup.contains(e.target) && !sidebarUndertaskDropmenuPopup.contains(e.target)) {
            if (isSidebarUndertaskPopupOpen) {
                isSidebarUndertaskPopupOpen = false;
            }
    
            document.querySelector('.tw-popup-content-wrapper-undertask-dropmenu').style.display = 'none';
            document.querySelector('.tw-popup-layer-undertask-dropmenu').style.display = 'none';
    
        }
    });
        
    // 모달(email-comment) HTML 파일 경로 설정
    const emailCommentModalHtmlPath = 'sidebar-email-modal.html';

    function openemailCommentModal() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', emailCommentModalHtmlPath, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const emailCommentModalHtml = xhr.responseText;
                displayemailCommentModal(emailCommentModalHtml);
            }
        };
        xhr.send();
    }

    function displayemailCommentModal(emailCommentModalHtml) {
        const emailCommentmodalContainer = document.createElement('div');
        emailCommentmodalContainer.classList.add('custom-emailCommentmodal'); 
        emailCommentmodalContainer.innerHTML = emailCommentModalHtml; 

        document.body.appendChild(emailCommentmodalContainer);

        // 닫기 버튼 클릭 이벤트 처리
        const closeButton = emailCommentmodalContainer.querySelector('.tw-button-v-2');
        closeButton.addEventListener('click', closeEmailCommentModal);

        // 모달 외부 클릭 시 닫기
        emailCommentmodalContainer.addEventListener('click', function (e) {
            if (e.target === emailCommentmodalContainer) {
                closeEmailCommentModal();
            }
        });

        emailCommentmodalContainer.style.display = 'block';
    }
 
    // 모달 닫기 함수
    function closeEmailCommentModal() {
        const emailCommentmodalContainer = document.querySelector('.custom-emailCommentmodal');
        if (emailCommentmodalContainer) {
            emailCommentmodalContainer.style.display = 'none';
            document.body.removeChild(emailCommentmodalContainer);
        }
    }

    const emailCommentButton = document.querySelector('.email-comment-button');
    emailCommentButton.addEventListener('click', function (e) {
        e.stopPropagation();
        openemailCommentModal();
    });

    const undermenuEmailCommentButton = document.querySelector('.undermenu-email-comment-button');
    undermenuEmailCommentButton.addEventListener('click', function (e) {
        e.stopPropagation();
        openemailCommentModal();
    });


    // 모달(confirmation) HTML 파일 경로 설정
    const confirmationModalHtmlPath = 'sidebar-confirmation-modal.html';

    function openeConfirmationModal() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', confirmationModalHtmlPath, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const confirmationModalHtml = xhr.responseText;
                displayconfirmationModal(confirmationModalHtml);
            }
        };
        xhr.send();
    }

    function displayconfirmationModal(confirmationModalHtml) {
        const confirmationmodalContainer = document.createElement('div');
        confirmationmodalContainer.classList.add('custom-confirmationmodal'); 
        confirmationmodalContainer.innerHTML = confirmationModalHtml; 

        document.body.appendChild(confirmationmodalContainer);

        // 닫기 버튼 클릭 이벤트 처리
        const closeButtons = confirmationmodalContainer.querySelectorAll('.tw-button-v-2');

        closeButtons.forEach(function (button) {
            button.addEventListener('click', closeConfirmationModal);
        });

        // 모달 외부 클릭 시 닫기
        confirmationmodalContainer.addEventListener('click', function (e) {
            if (e.target === confirmationmodalContainer) {
                closeConfirmationModal();
            }
        });

        confirmationmodalContainer.style.display = 'block';
    }
 
    // 모달 닫기 함수
    function closeConfirmationModal() {
        const confirmationmodalContainer = document.querySelector('.custom-confirmationmodal');
        if (confirmationmodalContainer) {
            confirmationmodalContainer.style.display = 'none';
            document.body.removeChild(confirmationmodalContainer);
        }
    }

    const confirmationButton = document.querySelector('.confirmation-button');
    confirmationButton.addEventListener('click', function (e) {
        e.stopPropagation();
        openeConfirmationModal();
    });

    const undermenuConfirmationButton = document.querySelector('.undermenu-confirmation-button');
    undermenuConfirmationButton.addEventListener('click', function (e) {
        e.stopPropagation();
        openeConfirmationModal();
    });


    // 모달(under-duplication) HTML 파일 경로 설정
    const underDuplicationModalHtmlPath = 'sidebar-duplicate-modal.html';

    function openeUnderDuplicationModal() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', underDuplicationModalHtmlPath, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const underDuplicationModalHtml = xhr.responseText;
                displayUnderDuplicationModal(underDuplicationModalHtml);
            }
        };
        xhr.send();
    }

    function displayUnderDuplicationModal(underDuplicationModalHtml) {
        const underDuplicationmodalContainer = document.createElement('div');
        underDuplicationmodalContainer.classList.add('custom-underDuplicationmodal'); 
        underDuplicationmodalContainer.innerHTML = underDuplicationModalHtml; 

        document.body.appendChild(underDuplicationmodalContainer);

        // 닫기 버튼 클릭 이벤트 처리
        const closeButton = underDuplicationmodalContainer.querySelector('.button-v-2');
        closeButton.addEventListener('click', closeUnderDuplicationModal);

        // 모달 외부 클릭 시 닫기
        underDuplicationmodalContainer.addEventListener('click', function (e) {
            if (e.target === underDuplicationmodalContainer) {
                closeUnderDuplicationModal();
            }
        });

        underDuplicationmodalContainer.style.display = 'block';
    }
 
    // 모달 닫기 함수
    function closeUnderDuplicationModal() {
        const underDuplicationmodalContainer = document.querySelector('.custom-underDuplicationmodal');
        if (underDuplicationmodalContainer) {
            underDuplicationmodalContainer.style.display = 'none';
            document.body.removeChild(underDuplicationmodalContainer);
        }
    }

    const underDuplicationButton = document.querySelector('.under-duplication-button');
    underDuplicationButton.addEventListener('click', function (e) {
        e.stopPropagation();
        openeUnderDuplicationModal();
    });

    const undermenuDuplicationButton = document.querySelector('.undermenu-duplication-button');
    undermenuDuplicationButton.addEventListener('click', function (e) {
        e.stopPropagation();
        openeUnderDuplicationModal();
    });


})

// 파일/ 링크 더보기 dropdown메뉴 
$(document).ready(function() { 
    $('.ax-file-or-link-row__more-button').click(function(e){
        e.stopPropagation(); // 클릭 이벤트 버블링 방지
        var $moreview = $('#moreview');
        var popupTop = $(this).offset().top + $(this).outerHeight();  // 상대 위치 계산
        var popupRight = $(this).offset().right; // 상대 위치 계산
        var contain = $('#moreview').hasClass('display');
    
        if(contain){
            $moreview.removeClass('display');
            $moreview.css({
                'top' : popupTop - 330,
                'left' : popupRight
            });
        }else{
            $moreview.addClass('display');
        }
    });
    
    // 다른 곳을 클릭하면 팝업 숨기기
    $(document).click(function(e) {
        if (!$(e.target).closest('.ax-file-or-link-row__more-button').length) {
            $('#moreview').addClass('display');
        }
    });
})

// 코멘트 title dropdown
$(document).ready(function() {
    $('[data-task-id="comment"]').click(function() {
        var contain = $('#approval-dropdown').hasClass('display')
        if (contain) {   
            $('#approval-dropdown').removeClass('display')
        } else {
            $('#approval-dropdown').addClass('display')
        }
    })
});

// 코멘트 내용 dropdown 
$(document).ready(function() {
    var $clickedButton; 

    // 회신하기 메뉴 클릭 시 이벤트
    $('.tw-reply-option').click(function() {
        var newDiv = $('<div class="tw-reply-to-message ax-reply-to-message tw-task-properties-comments-pane__reply-to-message --new-ui --small">' +
                        '<div class="tw-reply-to-message__container --new-ui">' +
                        '<i class="tw-icon" data-icon="reply"></i>' +
                        '<div class="tw-reply-to-message__metadata-wrapper">' +
                        '<div class="tw-reply-to-message__metadata --new-ui">' +
                        '<div>' +
                        '<span data-l10n-key="reply_message.replying_to">회신하기</span>' +
                        '<span class="tw-text --weight-bold">사 용자</span>' +
                        '<span class="tw-text" style="color: rgb(105, 111, 122);">m월 d일 00:00</span>' +
                        '</div>' +
                        '</div>' +
                        '<div class="tw-reply-message-body --new-ui" data-reply-id="64fa5e051c8b59712cb98865">' +
                        '<span class="tw-markdown-line tw-reply-message-body__markdown-content ax-reply-message-body__markdown-content --small --new-ui">' +
                        '<p> 테스트하겠습니다. (수정됨)</p>' +
                        '</span>' +
                        '</div>' +
                        '</div>' +
                        '<button type="button" class="tw-click-logic tw-link --color-gray tw-floating-close-button --new-ui --small" style="font-size: 14px; line-height: 32px;">' +
                        '<i class="tw-icon tw-floating-close-button__icon bi bi-x-lg"></i>' +
                        '</button>' +
                        '</div>' +
                        '</div>');

        $('.tw-task-properties-comments-pane__message-input-container').prepend(newDiv)
        $('.tw-floating-close-button').click(function(){
            $('.tw-reply-to-message').remove();
        })
    }) 

    // 더보기 버튼 클릭 시 dropdown메뉴 호출
    $('.ax-message-body-ellipsis-option__vertical-dots-button').click(function(e) {
        e.stopPropagation(); 
        $clickedButton = $(this); 
        var $moreview = $('#comment_dropdown_menu');
        var $unlockPinModla = $('#moreview_delete_pin');
        // 위치 계산
        var popupTop = $clickedButton.offset().top + $clickedButton.outerHeight(); 
        var contain = $('#comment_dropdown_menu').hasClass('display');
        var pinContents = $(this).closest('.ax-message').hasClass('--highlight')

        
        // 컨텐츠가 내용이 고정되어있는지 없는지 여부에 따라 다른 모달이 나오도록 만드는 함수
        switch (pinContents) {
            // 컨텐츠가 고정되어 있는 상테에서는 고정해제글자가 들어가 있는 popup호출
            case true:
                if (contain) {
                    $unlockPinModla.removeClass('display');
                    $unlockPinModla.css({
                        'top': popupTop - 46,
                        'right': '3%'
                    });
                } else {
                    $unlockPinModla.addClass('display');
                }
                break;
            // 컨텐츠가 고정되어 있지 않는 상태에서는 고정하기 들어가 있는 popup호출
            case false:
                if (contain) {
                    $moreview.removeClass('display');
                    $moreview.css({
                        'top': popupTop - 46,
                        'right': '3%'
                    });
                } else {
                    $moreview.addClass('display');
                }
                break;

            default:
            break;
        }
    });

    // 다른 곳을 클릭하면 팝업 숨기기
    $(document).click(function(e) {
        if (!$(e.target).closest('.ax-message-body-ellipsis-option__vertical-dots-button').length) {
            $('#comment_dropdown_menu').addClass('display');
            $('#moreview_delete_pin').addClass('display');
        }
    });

    // 고정하기 누르면 고정 active 효과 들어감
    $('#pin_contents').click(function() {
        var contain = $('.ax-message').hasClass('--highlight')
        var index = $('.ax-message-body-ellipsis-option__vertical-dots-button').index($clickedButton);
        var div = '<div id="whos-pin" class="tw-spacer" style="flex-direction: row; gap: 5px; align-items: center; justify-content: start;">' +
        '<i class="tw-icon tw-pinned-message-metadata__pin bi bi-pin-angle-fill"></i>' +
        '<span class="tw-text --small" style="color: rgb(141, 145, 154);">' +
            '<span data-l10n-key="pinned_message.metadata">' +
                '<span class="tw-text --weight-bold --small" style="color: rgb(141, 145, 154);">' +
                    '9월 14일 14:57' +
                        '</span>' +
                            ': ' +
                        '<span class="tw-text --weight-bold --small" style="color: rgb(141, 145, 154);">' +
                            '아 무개' +
                        '</span>' +
                    '님이 코멘트를 고정했습니다.' +
                '</span>' +
            '</span>' +
        '</div>';

        if (!contain) {
            $('.ax-message').eq(index).addClass('--highlight');
            $('.ax-message').eq(index).prepend(div);
            $('#pin_to_top').removeClass('display')
        }else{
            // 고정 코멘트 교체하시겠습니까 모달창 나와야함
            const unpinDeleteModalHtmlPath = 'sidebar_replace_pinComment_modal.html';
            fetch(unpinDeleteModalHtmlPath)
                .then(response => response.text())
                .then(deleteModalHtml => {
                    afterPindeleteModalOpen(deleteModalHtml);
                })
                .catch(error => {
                    console.error('Error fetching modal HTML:', error);
                });
        }
    });

    // 고정해제 누르면 모달창 뜨는 이벤트
    $('#unpin_contents').click(function() {
        const unpinModalHtmlPath = 'sidebar_comment_unpin.html';
    
        fetch(unpinModalHtmlPath)
            .then(response => response.text())
            .then(deleteModalHtml => {
                unPinModalOpen(deleteModalHtml);
            })
            .catch(error => {
                console.error('Error fetching modal HTML:', error);
            });

        unPinModalOpen()
    })
    // 고정 전, 삭제 버튼 누르면 모달창 뜨는 이벤트
    $('#before_pin_delete-comment').on('click', function() {
        const unpinDeleteModalHtmlPath = 'sidebar_beforepin_delete_modal.html';
        fetch(unpinDeleteModalHtmlPath)
            .then(response => response.text())
            .then(deleteModalHtml => {
                beforeUnPindeleteModalOpen(deleteModalHtml);
            })
            .catch(error => {
                console.error('Error fetching modal HTML:', error);
            });

        beforeUnPindeleteComment(deleteModalHtml)
    })

    // 고정 후, 삭제 버튼 누르면 모달창 뜨는 이벤트
    $('#after_delete-comment').click(function() {
        const unpinDeleteModalHtmlPath = 'sidebar_comment_delete.html';
        fetch(unpinDeleteModalHtmlPath)
            .then(response => response.text())
            .then(deleteModalHtml => {
                afterPindeleteModalOpen(deleteModalHtml);
            })
            .catch(error => {
                console.error('Error fetching modal HTML:', error);
            });
    })

    // 업무로 만들기 모달창 뜨는 이벤트
    $('.make-project').click(function() {
        const unpinDeleteModalHtmlPath = 'sidebar_newproject_modal.html';
        fetch(unpinDeleteModalHtmlPath)
            .then(response => response.text())
            .then(deleteModalHtml => {
                afterPindeleteModalOpen(deleteModalHtml);
            })
            .catch(error => {
                console.error('Error fetching modal HTML:', error);
            });
    })

    // 고정 후 모달창 띄우는 함수
    function afterPindeleteModalOpen(deleteModalHtml) {
        const unpinCommentmodalContainer = document.createElement('div');
        unpinCommentmodalContainer.classList.add('custom-deleteCommentmodal');
        unpinCommentmodalContainer.innerHTML = deleteModalHtml;

        document.body.appendChild(unpinCommentmodalContainer);

        const closeButton = document.querySelector('.tw-confirmation-modal__close-button');
        const unpinButton = document.querySelector('.ax-file-or-link-row__confirm-button');
        const cancelButton = document.querySelector('.ax-file-or-link-row__cancel-button');
        
        closeButton.addEventListener('click', closedeleteModal);
        cancelButton.addEventListener('click', function() {
            closedeleteModal();
        });
        unpinButton.addEventListener('click', closedeleteModal);

        deleteCommentmodalContainer.addEventListener('click', function (e) {
            if (e.target === deleteCommentmodalContainer) {
                closedeleteModal();
            }
        });
        deleteCommentmodalContainer.style.display = 'block';
    }
    // 고정 해제하는 함수
    function unPin(params) {
        var index = $('.ax-message-body-ellipsis-option__vertical-dots-button').index($clickedButton);
        $('.ax-message').eq(index).removeClass('--highlight');
        $('#pin_to_top').remove();
        $('#whos-pin').remove();
    }
    // 코멘트 삭제하는 함수 
    function deleteCommentText() {
        var index = $('.ax-message-body-ellipsis-option__vertical-dots-button').index($clickedButton);
        $('.tw-message').eq(index).remove();
    }
    // 고정 전 모달창 띄우는 함수
    function beforeUnPindeleteModalOpen(deleteModalHtml) {
        const unpinCommentmodalContainer = document.createElement('div');
        unpinCommentmodalContainer.classList.add('custom-deleteCommentmodal');
        unpinCommentmodalContainer.innerHTML = deleteModalHtml;

        document.body.appendChild(unpinCommentmodalContainer);

        const closeButton = document.querySelector('.tw-confirmation-modal__close-button');
        const unpinButton = document.querySelector('.ax-file-or-link-row__confirm-button');
        const cancelButton = document.querySelector('.ax-file-or-link-row__cancel-button');
        
        closeButton.addEventListener('click', closedeleteModal);
        cancelButton.addEventListener('click', function() {
            closedeleteModal();
        });
        unpinButton.addEventListener('click', closedeleteModal);

        deleteCommentmodalContainer.addEventListener('click', function (e) {
            if (e.target === deleteCommentmodalContainer) {
                closedeleteModal();
            }
        });
        deleteCommentmodalContainer.style.display = 'block';
    }
    // 고정 전 코멘트 삭제하겠습니까 함수
    function beforeUnPindeleteComment() {
        const unpinCommentmodalContainer = document.createElement('div');
        unpinCommentmodalContainer.classList.add('custom-deleteCommentmodal');
        unpinCommentmodalContainer.innerHTML = deleteModalHtml;

        document.body.appendChild(unpinCommentmodalContainer);

        const closeButton = document.querySelector('.tw-confirmation-modal__close-button');
        const deleteButton = document.querySelector('.ax-file-or-link-row__confirm-button');
        const cancelButton = document.querySelector('.ax-file-or-link-row__cancel-button');
        
        closeButton.addEventListener('click', closedeleteModal);
        cancelButton.addEventListener('click', closedeleteModal);
        deleteButton.addEventListener('click', function(e) {
            e.preventDefault()
            closedeleteModal();
            deleteCommentText ()
        });

        deleteCommentmodalContainer.addEventListener('click', function (e) {
            if (e.target === deleteCommentmodalContainer) {
                closedeleteModal();
            }
        });
        deleteCommentmodalContainer.style.display = 'block';
    }
    // 모달창 띄우는 함수
    function unPinModalOpen(deleteModalHtml) {
        const unpinCommentmodalContainer = document.createElement('div');
        unpinCommentmodalContainer.classList.add('custom-deleteCommentmodal');
        unpinCommentmodalContainer.innerHTML = deleteModalHtml;

        document.body.appendChild(unpinCommentmodalContainer);

        const closeButton = document.querySelector('.tw-confirmation-modal__close-button');
        const unpinButton = document.querySelector('.ax-file-or-link-row__confirm-button');
        const cancelButton = document.querySelector('.ax-file-or-link-row__cancel-button');
        
        closeButton.addEventListener('click', closedeleteModal);
        cancelButton.addEventListener('click', closedeleteModal);
        // 고정해제 버튼을 누르면 일어나는 이벤트
        unpinButton.addEventListener('click', function (e) {
            e.preventDefault()
            unPin()
            closedeleteModal()
        });

        deleteCommentmodalContainer.addEventListener('click', function (e) {
            if (e.target === deleteCommentmodalContainer) {
                closedeleteModal();
            }
        });

        deleteCommentmodalContainer.style.display = 'block';
    }
    // 모달창 지우는 함수
    function closedeleteModal() {
        const deletemodalContainer = document.querySelector('.custom-deleteCommentmodal');
        if (deletemodalContainer) {
            deletemodalContainer.style.display = 'none';
            deletemodalContainer.remove();
        }
    }  
    // check-list 수정하기 버튼 클릭 시 내용 수정
    function toggleInputMode(textElement, clickedIndex) {
        if (!isInputMode) {
            var checklistName = $(textElement).eq(clickedIndex).text();
            $('.tw-message-body__content').eq(clickedIndex).remove();
            var newDiv = $('<div class="tw-text-editor-guide">').append(
                $('<div style="flex-direction: column;" class="tw-task-add-checklist-item">').append(
                    $('<textarea class="checklist-modify-input" style="height: 30px;">').val(checklistName),
                    $('<div class="tw-task-add-checklist-item__enter-to-save" style="display: flex; justify-content: space-around; justify-content: space-between;">').append(
                        $('<span>').text('shift-Enter로 줄바꿈'),
                        $('<span>').html('"굵게" ..기울임.. "취소선" &gt; 인용 \'코드\'')
                    )
                )
            );
            $('.tw-message-body__content-wrapper ').eq(clickedIndex).append(newDiv);
            $('.checklist-modify-input').focus(); // <textarea>에 포커스 설정
            isInputMode = true;
        } else {
            var inputChecklistName = $('.checklist-modify-input').val();
            $('.tw-text-editor-guide').eq(0).remove();

            var newDiv = $('<div class="tw-editable-text-area ax-editable-text-area --editable --plain-text">').append(
                $('<article class="tw-markdown-content tw-editable-text-area__text ax-editable-text-area__text">').append(
                    $('<p class="checklist-input-text">').text(inputChecklistName)
                )
            );

            $('.tw-message-body__content-wrapper ').eq(clickedIndex).append(newDiv);
            isInputMode = false;
        }
    }
    $(document).on('click', '.modify_comment_contents', function() {
        isInputMode = false;

        var index = $('.ax-message-body-ellipsis-option__vertical-dots-button').index($clickedButton);
        var inputText = $('.checklist-modify-input').eq(index).val();
    
        if (inputText && inputText.trim().length === 0) {
            return; // 아무 글자도 입력되지 않으면 이벤트 넘어가지 않음
        }
    
        toggleInputMode('.tw-markdown-content p', index);
    });
    
    $(document).on('keydown', '.checklist-modify-input', function(event) {
        if (event.which === 13 && !event.shiftKey) { // Enter 키 코드이면서 Shift 키가 눌리지 않았을 때
            event.preventDefault();
    
            var index = $('.ax-message-body-ellipsis-option__vertical-dots-button').index($clickedButton);
            var inputText = $('.checklist-modify-input').val().trim();
            isInputMode = true;
            toggleInputMode('.tw-markdown-content p', index);
    
            if (inputText.length === 0) {
                return; // 아무 글자도 입력되지 않으면 이벤트 넘어가지 않음
            }
        }
    });

    //고정하기 상단고정 위 팝업박스
    $('.ax-pin-message-options').click(function() {
        
    })
 
});

// 파일첨부 dropdown menu
$(document).ready(function() {
    $('.ax-task-properties-resources-pane__attach-more-button').click(function(){
        var contain = $('#linkbutton_downarrow').hasClass('display');
        if (contain) {
            $('#linkbutton_downarrow').removeClass('display');
        }else{
            $('#linkbutton_downarrow').addClass('display');
        }
    })
})

// 파일 링크 더보기 삭제 버튼 눌렀을 경우 삭제버튼 나오는 popup
document.addEventListener('DOMContentLoaded', function () {
    const makeProjectModalButton = document.querySelector('#delete-project-file');
    const deleteModalHtmlPath = 'sidebar_delete_modal.html';

    // 클로저를 사용하여 .tw-resource-table__tabletw-resource-table__table 요소의 인덱스 저장
    let tableIndex = null;

    makeProjectModalButton.addEventListener('click', function () {
        fetch(deleteModalHtmlPath)
            .then(response => response.text())
            .then(deleteModalHtml => {
                // 클릭 시 .tw-resource-table__tabletw-resource-table__table 요소의 인덱스 저장
                const tableElements = document.querySelectorAll('.tw-resource-table__tabletw-resource-table__table');
                tableIndex = Array.from(tableElements).indexOf(this.closest('.tw-resource-table__tabletw-resource-table__table'));
                displayDeleteModal(deleteModalHtml);
            })
            .catch(error => {
                console.error('Error fetching modal HTML:', error);
            });
    });

    function displayDeleteModal(deleteModalHtml) {
        const deleteCommentmodalContainer = document.createElement('div');
        deleteCommentmodalContainer.classList.add('custom-deleteCommentmodal');
        deleteCommentmodalContainer.innerHTML = deleteModalHtml;

        document.body.appendChild(deleteCommentmodalContainer);

        const closeButton = document.querySelector('.tw-confirmation-modal__close-button');
        const deleteButton = document.querySelector('.ax-file-or-link-row__confirm-button');
        const cancelButton = document.querySelector('.ax-file-or-link-row__cancel-button');
        
        closeButton.addEventListener('click', closedeleteModal);
        deleteButton.addEventListener('click', closedeleteModal);
        cancelButton.addEventListener('click', closedeleteModal);

        deleteCommentmodalContainer.addEventListener('click', function (e) {
            if (e.target === deleteCommentmodalContainer) {
                closedeleteModal();
            }
        });

        deleteCommentmodalContainer.style.display = 'block';
    }

    function closedeleteModal() {
        const deletemodalContainer = document.querySelector('.custom-deleteCommentmodal');
        if (deletemodalContainer) {
            deletemodalContainer.style.display = 'none';
            deletemodalContainer.remove();
        }
    }

    function deleteTable() {
        if (tableIndex !== null) {
            const tableContents = document.querySelectorAll('.tw-resource-table__tabletw-resource-table__table');
            if (tableIndex >= 0 && tableIndex < tableContents.length) {
                tableContents[tableIndex].remove();
            }
        }
    }
});



