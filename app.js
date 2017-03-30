$(function(){
  $('.hidden').first().slideDown(1000);
  
  $(document).on('click', '.open_close', function() {
    $(this).parent().siblings('.hidden').slideToggle("slow");
    if ($(this).is(':visible')) {
       $("html, body").animate({scrollTop: $(this).offset().top});
    }
  });
});