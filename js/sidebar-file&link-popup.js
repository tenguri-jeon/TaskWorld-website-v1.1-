// 코멘트 화살표 누르면 팝업 뜨는 이벤트
function clickDropDown() {
    // 'contain' 변수에 '#approval-dropdown' 요소가 'display' 클래스를 가지고 있는지 여부를 저장합니다.
    const contain = $('#approval-dropdown').hasClass('display');
    
    if (contain) {
        // 만약 'contain'이 참(즉, 'display' 클래스가 있으면), 해당 클래스를 제거합니다.
        $('#approval-dropdown').removeClass('display');
    } else {
        // 'contain'이 거짓(즉, 'display' 클래스가 없으면), 해당 클래스를 추가합니다.
        $('#approval-dropdown').addClass('display');
    }
}
function clickDropDown2() {
    // 'contain' 변수에 'file-link-dropdown' 요소가 'display' 클래스를 가지고 있는지 여부를 저장합니다.
    const contain = $('#file-link-dropdown').hasClass('display');
    
    if (contain) {
        // 만약 'contain'이 참(즉, 'display' 클래스가 있으면), 해당 클래스를 제거합니다.
        $('#file-link-dropdown').removeClass('display');
    } else {
        // 'contain'이 거짓(즉, 'display' 클래스가 없으면), 해당 클래스를 추가합니다.
        $('#file-link-dropdown').addClass('display');
    }
}


// 체크박스
$(document).ready(function() {
    $(document).on('click', '.tw-choice', function(){
        var contain = $(this).hasClass('--checked');
        var checkIcon = $('<i class="tw-icon bi bi-check-lg"></i>')
        var numberOfCheckElements = $('.bi-check-lg').length;

        // 제일 위에 있는 체크박스가 클릭될 시, 밑에있는 하위 체크박스는 모두 체크된다
        if ($(this).is('.ax-resource-table-head__header-cell .tw-choice')) {
            if (!contain) {
                $('.bi-check-lg').remove();
                $('.tw-choice').addClass('--checked')
                $(this).find('.tw-choice__checkbox').append(checkIcon);
                $('.tw-choice__checkbox').append(checkIcon);
                downloadContents()
            } else{
                $('.tw-choice').removeClass('--checked')
                $(this).find('.bi-check-lg').remove();
                $('.bi-check-lg').remove();
                $('.tw-resource-table__download-panel').remove()
            }
        }else{   
            if (!contain) {
                $(this).addClass('--checked')
                $(this).find('.tw-choice__checkbox').append(checkIcon);
                downloadContents()
            } else{
                $(this).removeClass('--checked')
                $(this).find('.bi-check-lg').remove();
                $('.tw-resource-table__download-panel').remove()
            }
        }
    })

    function  downloadContents() {
        var newDiv = $('<div class="tw-resource-table__download-panel ax-resource-table__download-panel --new-ui">' +
        '<div class="tw-click-area tw-choice --size-m --checked --clickable" role="button" tabindex="0">' +
        '<div class="tw-choice__checkbox">' +
        '<div class="tw-choice__dash"></div>' +
        '</div>' +
        '<div class="tw-choice__label ax-choice__label">' +
        '2' +
        '<span data-l10n-key="task.file.selected"> 선택됨 </span>' +
        '</div>' +
        '</div>' +
        '<div class="tw-resource-table__divider"></div>' +
        '<button type="button" class="tw-click-logic tw-link --color-teal">' +
        '<span data-110n-key="task.file.select_all">모두 선택하기</span>' +
        '</button>' +
        '<button class="tw-button --size-34 --padding-normal" type="button">' +
        '<div class="tw-button__main-container ax-button__main-container" style="display: flex; align-items: center;">' +
        '<i class="tw-icon tw-resource-table__download-icon bi bi-download"></i>' +
        '<span data-110n-key="task.file.downloading">다운로드</span>' +
        '121.68KB' +
        '</div>' +
        '</button>' +
        '</div>');


        $('.tw-resource-table').append(newDiv);
    }

})
