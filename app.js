$(function(){
  
  //Return OS name
  let OS="Unknown OS";
  if (navigator.appVersion.indexOf("Mac") != -1) OS = "Mac";
  if (navigator.appVersion.indexOf("Win") != -1) OS = "Windows";
  if (navigator.appVersion.indexOf("X11") != -1) OS = "UNIX";
  
  //For Windows and non-Mac other OS
  if (OS === "Windows" || OS === "UNIX") {
    $('#row1, .nav_text, .skills, .app_name').css('-webkit-text-stroke', '0.2px');
    $('#row1, .nav_text, .skills, .app_name').css('-webkit-font-smoothing', 'subpixel-antialiased');
    $('.fa').css('-webkit-text-stroke', '0');
    $('.hash_section, .types, .skills_description, .app_description, .app_details').css('font-family', "'Source Sans Pro', sans-serif");
    $('.hash_section, .skills_description, .app_details').css('font-size', "18px");
    $('.hash').css('font-family', "'Lato', sans-serif");
  }

  //For Internet Explorer or Microsoft Edge
  if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
    $('.nav_text').css('font-weight', '300');
    $('#hi_line, .transparent, .left_bracket, .skills, .app_name').css('text-shadow', '0 0 1px white');
    $('#row2, #row4').css('background-attachment', 'scroll');
  }

  //Safari
  if (window.screen.availWidth > 1024 && navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    $('#row1, .nav_text, .hash, .punc').css('-webkit-text-stroke', '0.5px');
    $('#row1, .nav_text').css('text-shadow','0 0 1px #555555');  
    $('#my_name').css('text-shadow','0 0 1px #666666');  
    $('.fa-hand-peace-o, .contact_icon').css('-webkit-text-stroke', '0');
    $('#description2, #description3, #description4').css('opacity', '1');
  }

  //For Mobile Devices
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('nav').show();
    $('body').css('-webkit-text-stroke', '0.3px');
    $('.fa').css('-webkit-text-stroke', '0');
    $('.types_icon').css('opacity', '0.6');
    $('#row2, #row3, #row4').css('background-attachment', 'scroll');
  } else {
    //Appearing/disappearing nav bar
    let height = $("#row1").outerHeight(true);
    
    $(window).scroll(function(){                          
      if ($(window).scrollTop() > (height - 55)){
          $('nav').fadeIn("slow");
      } else {
          $('nav').fadeOut("fast");
      }
    });
    
    //Click-scrolling to sections
    $(document).on('click', '.to_top, .up', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, "slow");
    });
    
    $(document).on('click', '.to_about, .down', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $('#row2').offset().top - 50 }, "slow");
    });
  
    $(document).on('click', '.to_skills', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $('#row3').offset().top - 50 }, "slow");
    });
  
    $(document).on('click', '.to_projects', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $('#row4').offset().top - 50 }, "slow");
    });
  }

  let url = window.location.toString();
  url = url.split("#")[0];
  
  $('#scroll_up').click(function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, "slow");
  });

  $('.contact_link').hover(function() {
    $(this).children('.contact_icon').toggleClass('icon_hover');
    $(this).children('.icon_text').toggleClass('text_hover');
  });

  if (window.screen.availWidth > 768) {
    $('.hash_section').hover(function(){
      $(this).children('.hash').toggleClass('text_hover');
    });  
    
    $('#row2').hover(function() {
      $('h1#h1row2').toggleClass('h1row2move');
      $('.fa-comment-o').toggleClass('icon_hover');
    });  
  
    $('#row3').hover(function() {
      $('h1#h1row3').toggleClass('h1row3move');
      $('.fa-code').toggleClass('icon_hover');
    });
    
    $('#row4').hover(function() {
      $('#h1row4').toggleClass('h1row4move');
      $('.fa-cubes').toggleClass('icon_hover');  
    });
    
    $('.app_name').hover(function() {
      $(this).children('a').children('i').toggleClass('icon_hover');
    });
    
    $('.type_section').hover(function() {
      $(this).toggleClass('highlight_type');
      $(this).children('.types').children('.types_icon').toggleClass('icon_hover');     
    });
  }
  
  setInterval(function() {
      $('.fa-chevron-down, .fa-chevron-up').toggleClass('icon_hover');
  }, 1000);
  
});