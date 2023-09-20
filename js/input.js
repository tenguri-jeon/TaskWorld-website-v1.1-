// 제목 input
$(document).ready(function() {
  var isInputMode = false;
  var clickedElementIndex = null;
  var inputText = '';

  function toggleInputMode(textElement, index) {
    var checklistName = $(textElement).eq(index).text();
    // 텍스트 -> input
    if (!isInputMode) {
      if (inputText = checklistName ) {
        $('.editable-text-field').eq(index).remove();
        var newDiv = $('<div class="tw-click-area tw-editable-text-field ax-editable-text-field --textfield" role="button" tabindex="0">').append(
          $('<input class="tw-editable-text-field__input" type="text" style="border:2px solid #27b6ba; border-radius:8px; color:#696f7a; font-size:14px; font-weight:600; width:207px; padding:2px; padding-left:10px">').val(checklistName),
          );
          $('.tasklist-header__editable-text-field-container').eq(index).append(newDiv);
          $('.tw-editable-text-field__input').focus();
          isInputMode = true;
        }
    } else {
      // input -> 텍스트
      var newInputText = $('.tw-editable-text-field__input').val();
      $('.tw-editable-text-field').remove();
      var newDiv = $('<div class="click-area editable-text-field --plain-text" role="button" tabindex="0">').append(
        $('<div class="editable-text-field__text">').text(newInputText).append(
          $('<i class="icon editable-text-field__icon" data-icon="pen">').append(
            $('<i class="bi bi-pencil">')
          )
        )
      );
      $('.tasklist-header__editable-text-field-container').eq(index).append(newDiv);
      isInputMode = false;
    }
  }

  // input에서 다른곳 클릭시 text로 바뀜
  function handleOutsideClick(event) {
    inputText = $(this).text();
    textareaInputText = $('.tw-editable-text-field__input').val();

    if (!$(event.target).closest('.editable-text-field__text').length) {
      if (inputText === textareaInputText || typeof textareaInputText === 'undefined') {
        return;
      }
      $(document).off('click', handleOutsideClick);
      toggleInputMode('.editable-text-field__text', clickedElementIndex);
    } else {
      return;
    }
  }

  // input -> text바뀌는 이벤트
  $(document).on('click', '.editable-text-field__text', function(event) {
    // text내용과 input내용이 일치하는지 확인 후 이벤트 발생 (input이 이상한곳에 생기지 않도록 하기 위한 장치)
    inputText = $(this).text();
    textareaInputText = $('.tw-editable-text-field__input').val();
    // console.log(inputText,'일치?', textareaInputText)
    
    
    if (!$(event.target).hasClass('editable-text-field__text')) {
      return;
    }
    
    if (inputText === textareaInputText || typeof textareaInputText === 'undefined') {
      if (inputText && inputText.trim().length === 0) {
        return;
      }
      
      $(document).on('click', handleOutsideClick);
      clickedElementIndex = $(this).index('.editable-text-field__text');
      toggleInputMode('.editable-text-field__text', clickedElementIndex);
    } else {
      return;
    }
  });

  $(document).on('keypress', '.tw-editable-text-field__input', function(event) {
    if (event.which === 13) {
      event.preventDefault();
      toggleInputMode('.editable-text-field__text', clickedElementIndex);
    }
  });
  
});
