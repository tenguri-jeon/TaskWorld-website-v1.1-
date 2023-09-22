// 부트스트랩기능
    //dropdown기능 
    const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
    const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))

    //tooltip기능 
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new bootstrap.Tooltip(tooltipTriggerEl, {
        // trigger: 'hover' // 툴팁을 마우스 오버시에만 표시
      });
    });

// 링크 저장되었다는 알람 js
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder.append(wrapper)
  }
  
  const alertTrigger = document.getElementById('liveAlertBtn')
  if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
      appendAlert('Nice, you triggered this alert message!', 'success')
    })
}

// sidebar 창닫기 
$(document).ready(function() {
    // side bar 창 닫기
    $('.ax-floating-panel-close-button').click(function(){
      $('.ax-floating-panel-desktop').css('display', 'none');
    });

    // side bar 안에있는 요소 x 클릭 시 사라지는 함수
    $('.bi-x').click(function() {
        $(this).parent().parent().remove();
    });

  });

//   $(document).ready(function(){
//     // 클래스 '.undermenu-checkbox'를 가진 요소에 대한 클릭 이벤트 핸들러 설정
//     $(document).on('click', '.undermenu-checkbox', function(){
//         // 클릭한 요소와 해당 인덱스 가져오기
//         var clickedElement = $(this);
//         var clickedIndex = $('.undermenu-checkbox').index(clickedElement);

//         // 관련 작업이 완료되었는지 확인
//         var isCompleted = $('.js-task').eq(clickedIndex).hasClass('--done');

//         // 현재 상태를 기반으로 완료 상태를 토글
//         if (!isCompleted) {
//             // 애니메이션 추가 및 완료로 표시
//             $('.undermenu-checkbox').eq(clickedIndex).addClass('--animate');
//             setTimeout(function() {
//                 $('.undermenu-checkbox').eq(clickedIndex).addClass('--completed');
//                 $('.js-task').eq(clickedIndex).addClass('--done');
//             }, 500);
//         } else {
//             // 완료 상태 제거
//             $('.undermenu-checkbox').eq(clickedIndex).removeClass('--animate');
//             $('.undermenu-checkbox').eq(clickedIndex).removeClass('--completed');
//             $('.js-task').eq(clickedIndex).removeClass('--done');
//         }
//     });
// });

// 완료 버튼 누를 시 sidebar => .tw-task-properties-header --completed
// #checkbox 안에 있는 task-completion-box = "task-completion-box" --completed
// tw-task-completion-box__background-center transform scaleX(106.391)
// tw-task-completion-box__background-right  transform translateX(122.391px)
// tw-task-completion-box__completed-task display flex


// $(document).ready(function() {
//     $(document).on('click' , '#change_textarea', function(){
//         changeEditor();
//         $('.button-wrapper').removeClass('display');
//     })
    
//     $(document).on('click' , '.save-button', function(){
//         changeTextarea();
//         $('.button-wrapper').addClass('display');
//     })
// })


// // aditor -> textarea
// function changeTextarea(){
//     var editorText = $('.fr-view').text()
    
//     // $('#editor').addClass('display')
//     $('.change-input').removeAttr('editor');
// }

// // textarea -> aditor
// function changeEditor(){
//     var inputText = $('#change_textarea').val()
//     $('.fr-view').empty().text(inputText);
//     $('.fr-placeholder').remove()
//     inputText = '';
// }









