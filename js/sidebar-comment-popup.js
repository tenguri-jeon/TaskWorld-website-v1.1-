// 에디터
$(function () {
    var editor = new FroalaEditor('#editor')
}); 

// 댓글중 like 버튼 누르면 좋아요 눌러지는 기능
$(document).ready(function() {
var likeThumb = $('<div class="tw-reaction-container__summary">' + 
    '<div class="tw-click-area tw-reaction-summary-icon ax-reaction-summary-icon --variant-image --selected --clickable">' +
        '<i id="like-button" class="me-1 tw-icon bi bi-hand-thumbs-up liked"></i>' + 
        '<span class="tw-text --micro" style="color:rgb(105, 111, 121)">1</span>' +
    '</div>' + '</div>'
);

var isLiked = false;

$('.tw-reaction-add-button').on('click', function() {
    $('#like-button').toggleClass('liked');
    if (isLiked) {
        $('.tw-reaction-container__summary').remove();
        isLiked = false;
    } else {
        $('.tw-reaction-container').append(likeThumb);
        isLiked = true;
    }
});
});

// 창 위에 고정하기 창 나오는 기능
$(document).ready(function() {
var bubbleHtml = `
<div class= "tw-spacer tw-pin-message-container__bubble ax-pin-message-container__bubble" style="flex-direction: column; gap: 0px; align-items: stretch; justify-content: start;">
    <div class="tw-spacer tw-pin-message-container__bubble-content" style="flex-direction: column; gap: 14px; align-items: stretch; justify-content: start;">
        <div class="tw-spacer" style="flex-direction: row; gap: 5px; align-items: center; justify-content: start;">
            <div class="tw-spacer__expandable">
                <div class="tw-click-area --clickable" role="button" tabindex="0" style="display: block;">
                    <div class="tw-spacer tw-pin-message-container__content" style="flex-direction: row; gap: 10px; align-items: stretch; justify-content: start;">
                        <div class="tw-spacer__expandable">
                            <div class="tw-click-area --clickable" role="button" tabindex="0" style="display: block;">
                                <div class="tw-spacer tw-pin-message-container__content" style="flex-direction: row; gap: 10px; align-items: stretch; justify-content: start;">
                                    <div class="tw-spacer__expandable">
                                        <article class="tw-markdown-content tw-pin-message-container__text ax-pin-message-container__text">
                                            <p>텍스트</p>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chevron-down-wrapper">
                            <button type="button" class="tw-click-logic tw-button-v-2 --size-28-px --square --round --variant-icon ax-pin-message-container__expand-button">
                                <div class="tw-button-v-2__main-container">
                                    <i class="tw-icon bi bi-chevron-down"></i>
                                </div>
                            </button>
                            <span style="display: none;"></span>
                        </div>
                        <div>
                            <button type="button" class="tw-click-logic tw-button-v-2 --size-28-px --square --round --variant-gray ax-pin-message-container__close-button">
                                <div class="tw-button-v-2__main-container">
                                    <i class="tw-icon tw-button-v-2__icon tw-pin-message-container__close-icon bi bi-x-lg"></i>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
var messageHtml = `
    <div class="tw-click-area tw-pin-message-container__expanded-content-clickable-area ax-pin-message-container__expanded-content-clickable-area --clickable">
        <div class="tw-spacer tw-pin-message-container__expanded-content tw-hack-scrollbar" style="flex-direction: column; gap: 0px; align-items: stretch; justify-content: start;">
            <div class="tw-spacer" style="margin-bottom: 9px; flex-direction: row; gap: 0px; align-items: center; justify-content: start;">
                <div class="tw-spacer__expandable">
                    <div class="tw-spacer" style="flex-direction: row; gap: 5px; align-items: stretch; justify-content: start;">
                        <span class="tw-text --weight-bold --base">사 용자</span>
                        <span class="tw-text --mini">m월 dd일 00:00</span>
                    </div>
                </div>
                <button type="button" class="tw-click-logic tw-button-v-2 --size-28-px --square --round --variant-icon ax-pin-message-options">
                    <div class="tw-button-v-2__main-container">
                        <i class="tw-icon tw-button-v-2__icon bi bi-three-dots-vertical"></i>
                    </div>
                </button>
            </div>
            <div class="tw-spacer__expandable">
                <article class="tw-markdown-content">
                    <p>테스트</p>
                </article>
            </div>
        </div>
    </div>
    `;
var footerHtml = `
    <div class="tw-spacer tw-pin-message-container__expanded-footer" style="height: 48px; flex-direction: row; gap: 0px; align-items: center; justify-content: start;">
        <div class="tw-spacer__expandable">
            <div class="tw-click-area ax-pin-message-container__unpin-button --clickable">
                <span class="tw-text --subheading --base">
                    <span data-l10n-key="common.unpin"> 고정해제</span>
                </span>
            </div>
        </div>
        <div>
            <button id="close-contents" type="button" class="tw-click-logic tw-button-v-2 --size-28-px --square --round --variant-icon">
                <div class="tw-button-v-2__main-container">
                    <i class="tw-icon tw-button-v-2__icon bi bi-chevron-up"></i>
                </div>
            </button>
        </div>
    </div>
    `;
 var button = `
    <button type="button" class="tw-click-logic tw-button-v-2 --size-28-px --square --round --variant-icon ax-pin-message-container__expand-button">
        <div class="tw-button-v-2__main-container">
            <i class="tw-icon bi bi-chevron-down"></i>
        </div>
    </button>
    `;

// 닫기 버튼 누르면 없어지는 이벤트
$('.ax-pin-message-container__close-button').click(function(){
    $('.tw-pin-message-container__bubble').remove();
    $('.tw-pin-message-container__triangle').remove();
})
// 호버하면 아이콘 바뀌는 이벤트
$('.tw-pin-message-container__pin').hover(function(){
    $(this).toggleClass('bi-pin-angle-fill bi-x-lg');
});

// 고정 버튼 눌렀을 때 내용이 생기고 지워지는 toggle이벤트 
$(document).on('click', '.tw-pin-message-container__pin', function() {
    var bubbleContainer = $('.tw-pin-message-container__bubble');
    var triangle = $('.tw-pin-message-container__triangle');

    if (bubbleContainer.length > 0) {
        bubbleContainer.remove();
        triangle.remove();
    } else {
        $('#toggleEvent').append(bubbleHtml);
    }
});

// 밑의 화살표 누르면 밑에있는 내용 나오는 이벤트
$('.chevron-down-wrapper').on('click', function(){
    $('.tw-pin-message-container__bubble-content').addClass('--expanded');
    $('.tw-pin-message-container__bubble-content').append(messageHtml);
    $('.tw-pin-message-container__bubble').append(footerHtml);
    $('.ax-pin-message-container__expand-button').remove();

    $('#close-contents').on('click', function(){
        $('.tw-pin-message-container__bubble-content').removeClass('--expanded');
       $('.tw-pin-message-container__expanded-content-clickable-area').remove()
       $('.tw-pin-message-container__expanded-footer').remove()
       $('.chevron-down-wrapper').append(button);
    })
})

})

$(function () {
var editor = new FroalaEditor('#newproject')
}); 