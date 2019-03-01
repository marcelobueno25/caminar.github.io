$(function() {
  $('.convallis-box-img, .modal-button').click(function() {
    trocarImage = $(this).find('img').attr('src');
    $('.modal').fadeToggle(500);
    $('.modal-photo').attr('src', trocarImage);
});
});
