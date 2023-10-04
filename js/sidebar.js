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

// editor 변경란
$(document).ready(function() {
  // if문실행
  $(document).on('click', '.ck-editor__editable', function() {
    editor()
  })
  
  // else문 실행
  $(document).on('click', '.save-button', function() {
    editor()
  })

// editor취소버튼 누르면 다시 돌아오는 이벤트
  $(document).on('click', '.delete-button', function() {
    $('#editor').css('display', 'none');
    $('.tw-task-description-row').removeClass('display')
    $('.button-wrapper').addClass('display')
  })

  function editor(){
    var contain = $('.ax-task-description-row').hasClass('display')
    // 먼저 text-> editor
    if (!contain) {
          let innerText = $('.ck-editor__editable').text()
          $('.fr-element p').text(innerText);
          innerText = ''
          $('#editor').css('display', 'block');
          $('.tw-task-description-row').addClass('display')
          $('.button-wrapper').removeClass('display')
          $('.fr-placeholder').remove()
          $('.fr-element p').focus();
    }else{
      // editor -> text
          let editorText = $('.fr-view').eq(0).children('p').text()
          let text = editorText.replace(/\n/g, ' ');
          $('.ck-editor__editable p').text(text)
          editorText = ''
          $('#editor').css('display', 'none');
          $('.tw-task-description-row').removeClass('display')
          $('.button-wrapper').addClass('display')
    }
  }

})
