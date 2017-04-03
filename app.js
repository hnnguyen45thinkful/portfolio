let OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

if (OSName === "Windows" || OSName === "UNIX" || OSName === "Linux" || window.screen.availWidth < 1025) {
  $('body, h1, .types').css('font-weight', '300');
  $('#profilepic').css('-webkit-filter', 'brightness(1.1) contrast(1.2) grayscale(0.3)');
  $('#profilepic').css('filter', 'brightness(1.1) contrast(1.2) grayscale(0.3)');
  $('#contact_line, #description2, #description3').css('transform', 'scaleX(0.94)');
  $('#description2').css('left', '-7px');
  $('#description3').css('right', '-7px');
}

$(function(){  
  $(document).on('click', '.open_close', function(e) {
    e.preventDefault();
    if (window.screen.availWidth < 1025) {
      $(this).parent().siblings('.hidden').slideToggle();
    } else if ($(this).is(':visible')) {
       $("html, body").animate({scrollTop: $(this).offset().top});
    }      
  });
  
  $('.hash_section').hover(function(){
    $(this).children('.hash').toggleClass('hash_hover');
  });  
  
  $('#row2').hover(function(){
    $('h1#h1row2').toggleClass('h1row2move');
    $('.fa-comment-o').toggleClass('section_icon_hover');
  });  

  $('#row3').hover(function(){
    $('h1#h1row3').toggleClass('h1row3move');
    $('.fa-code').toggleClass('section_icon_hover');
  });
  
  $('#row4').hover(function(){
    $('#h1row4').toggleClass('h1row4move');
    $('.fa-cubes').toggleClass('section_icon_hover');  
  });
});