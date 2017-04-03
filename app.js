$(function(){
  let OS="Unknown OS";
  if (navigator.appVersion.indexOf("Win") != -1) OS = "Windows";
  if (navigator.appVersion.indexOf("Mac") != -1) OS = "Mac";
  if (navigator.appVersion.indexOf("X11") != -1) OS = "UNIX";
  if (navigator.appVersion.indexOf("Linux") != -1) OS = "Linux";
  if (OS === "Windows" || OS === "UNIX" || OS === "Linux" || window.screen.availWidth < 1025) {
    $('body, h1, .types').css('font-weight', '300');
    
    if (OS === "Windows" || OS === "UNIX" || OS === "Linux") {
      $('#profilepic').css('-webkit-filter', 'brightness(1.1) contrast(1.2) grayscale(0.3)');
      $('#profilepic').css('filter', 'brightness(1.1) contrast(1.2) grayscale(0.3)');
      $('#contact_line, #description2, #description3').css('transform', 'scaleX(0.94)');
      $('#description2').css('left', '-7px');
      $('#description3').css('right', '-7px');
    }
  }
  
  if (window.screen.availWidth < 1366) {
    $('body').css('background', 'none');
    $('#row4').addClass('mobile_row4');
  }
  
  $('.open_close').click(function(e) {
    e.preventDefault();
    if ($(window).width() < 768) {
      $(this).parent().siblings('.hidden').slideToggle(function(){
        $('html, body').animate({ scrollTop: $(this).parent('section').offset().top }, "slow");            
      });
    }      
  });
  
  $(document).on('click', '#scroll_up', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, "slow");
  });

  if (window.screen.availWidth > 768) {
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
  }
});