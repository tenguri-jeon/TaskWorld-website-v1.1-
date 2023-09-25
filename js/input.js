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

  function makeNewProject(){
    var newTitle = $('.tw-editable-text-field__input').val();
    var newDiv = $(
      '<div class="kanban-board-columns__column" style="width: 300px;">' +
        '<section class="tasklist">' +
          '<div class="kanban-list-header">' +
            '<div class="tasklist__frame-top">' +
              '<div>' +
                '<div class="tasklist-header --bg-blue2">' +
                  '<div class="tasklist-header__left-section">' +
                    '<div class="tasklist-header__editable-text-field-container">' +
                      '<div class="click-area editable-text-field --plain-text" role="button" tabindex="0">' +
                        '<div class="editable-text-field__text">' + newTitle + '</div>' +
                        '<i class="icon editable-text-field__icon" data-icon="pen">' +
                          '<i class="bi bi-pencil"></i>' +
                        '</i>' +
                      '</div>' +
                    '</div>' +
                  '</div>' +
                  '<div class="tasklist-header__right-section">' +
                    '<div class="click-area tasklist-header__add-icon" role="button">' +
                      '<i class="bi bi-plus fs-4"></i>' +
                    '</div>' +
                    '<div class="tasklist-menu">' +
                      '<div class="click-area tasklist-menu__button" role="button">' +
                        '<i class="bi bi-three-dots-vertical"></i>' +
                      '</div>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
                '<div class="tasklist-header__input-panel-container" style="display: none;">' +
                  '<section class="task-or-note-input-panel">' +
                    '<textarea class="task-or-note-input-panel__input-box hack-scrollbar" placeholder="새 업무 만들기" style="height: inherit;"></textarea>' +
                    '<div class="task-or-note-input-panel__panels">' +
                      '<div class="task-or-note-input-panel__panel-left">' +
                        '<div class="task-properties-panel">' +
                          '<div class="click-area task-properties-panel__member-panel-item" role="button" tabindex="0">' +
                            '<i class="icon bi bi-person-plus"></i>' +
                          '</div>' +
                          '<div class="click-area task-properties-panel__tag-panel-item" role="button" tabindex="0">' +
                            '<i class="icon bi bi-tag"></i>' +
                          '</div>' +
                          '<div class="click-area task-properties-panel__calendar-panel-item" role="button" tabindex="0">' +
                            '<i class="icon bi bi-calendar4-week"></i>' +
                          '</div>' +
                        '</div>' +
                      '</div>' +
                      '<div class="task-or-note-input-panel__panel-right">' +
                        '<button class="button --size-28 --secondary task-or-note-input-panel__cancel-button" type="button">' +
                          '<div class="button__main-container">' +
                            '<span class="tasks.buttonns.cancel">취소</span>' +
                          '</div>' +
                        '</button>' +
                        '<button class="button --size-28 task-or-note-input-panel__create-button" type="button" disabled="disabled">' +
                          '<div class="button__main-container">' +
                            '<span class="tasks.buttonns.create">만들기</span>' +
                          '</div>' +
                        '</button>' +
                      '</div>' +
                    '</div>' +
                  '</section>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</section>' +
      '</div>'
    );
    var newElement = $(
      '<div class="click-area create-tasklist-button" role="button" tabindex="0">' +
        '<i class="tw-icon bi bi-plus-lg"></i>' +
        '<span class="projects.button.create-tasklist-button_new_tasklist">새 업무리스트 만들기</span>' +
      '</div>'
    );

    var newElementParent = $('<div class="kanban-column"></div>'
    )
        
    $('.tw-editable-text-field__input').closest('.kanban-column').append(newDiv);
    $('.kanban-board__new-tasklist-area').remove();
    $('.kanban-columns').prepend(newElementParent);
    $('.kanban-column').eq(0).append(newElement);

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

  //  main input -> text바뀌는 이벤트
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
      if ($(this).closest('.pre-created-tasklist').length > 0) {
        makeNewProject();
        return;
      }else{
        toggleInputMode('.editable-text-field__text', clickedElementIndex);
      }
    }
  });

});
