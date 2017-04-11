$(function(){
  
  //Return OS name
  let OS="Unknown OS";
  if (navigator.appVersion.indexOf("Mac") != -1) OS = "Mac";
  if (navigator.appVersion.indexOf("Win") != -1) OS = "Windows";
  if (navigator.appVersion.indexOf("X11") != -1) OS = "UNIX";
  
  //For Windows and non-Mac other OS
  if (OS === "Windows" || OS === "UNIX") {
    $('#intro, .nav_text, .skills, .app_name').css('-webkit-text-stroke', '0.2px');
    $('#intro, .nav_text, .skills, .app_name').css('-webkit-font-smoothing', 'subpixel-antialiased');
    $('.fa').css('-webkit-text-stroke', '0');
    $('.hash_section, .types, .skills_description, .app_description, .app_details').css('font-family', "'Source Sans Pro', sans-serif");
    $('.hash_section, .skills_description, .app_details').css('font-size', "18px");
    $('.hash').css('font-family', "'Lato', sans-serif");
  }

  //For Internet Explorer or Microsoft Edge
  if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
    $('.nav_text').css('font-weight', '300');
    $('#hi_line, .transparent, .left_bracket, .skills, .app_name').css('text-shadow', '0 0 1px white');
    $('#about, #projects').css('background-attachment', 'scroll');
  }

  //Safari
  if (window.screen.availWidth > 1024 && navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    $('#intro, .nav_text, .hash, .punc').css('-webkit-text-stroke', '0.5px');
    $('#intro, .nav_text').css('text-shadow','0 0 1px #555555');  
    $('#my_name').css('text-shadow','0 0 1px #666666');  
    $('.fa-hand-peace-o, .contact_icon').css('-webkit-text-stroke', '0');
    $('#description2, #description3, #description4').css('opacity', '1');
  }

  //For Mobile Devices
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //Nav bar only on portrait mode
    if ($(window).height() > 450) {
      $('nav').show();
    }
    $(window).resize(function(){
      if ($(window).height() > 450) {
        $('nav').show();
      } else {
        $('nav').hide();
      }
    });
    $('body').css('-webkit-text-stroke', '0.3px');
    $('.fa').css('-webkit-text-stroke', '0');
    $('.types_icon').css('opacity', '0.6');
    $('#about, #skills, #projects').css('background-attachment', 'scroll');
  } else {
    //Appearing/disappearing nav bar
    let height = $("#intro").outerHeight(true);
    
    $(window).scroll(function(){                          
      if ($(window).scrollTop() > (height - 55)){
          $('nav').fadeIn("slow");
      } else {
          $('nav').fadeOut("fast");
      }
    });
  }
  
  if (!/iPad/i.test(navigator.userAgent)) {
    //Click-scrolling to sections
    $(document).on('click', '.to_top, .up', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, "fast");
    });
    
    $(document).on('click', '.to_about, .down', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $('#about').offset().top - 50 });
    });
  
    $(document).on('click', '.to_skills', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $('#skills').offset().top - 50 });
    });
  
    $(document).on('click', '.to_projects', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $('#projects').offset().top - 50 });
    });
    
    $('#scroll_up').click(function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, "slow");
    });
  
    $('.contact_link').hover(function() {
      $(this).children('.contact_icon').toggleClass('icon_hover');
      $(this).children('.icon_text').toggleClass('text_hover');
    });
  }

  setInterval(function() {
      $('.fa-chevron-down, .fa-chevron-up').toggleClass('icon_hover');
  }, 1000);

  if (window.screen.availWidth > 768) {
    $('.hash_section').hover(function(){
      $(this).children('.hash').toggleClass('text_hover');
    });  
    
    $('#about').hover(function() {
      $('h1#h1row2').toggleClass('h1row2move');
      $('.fa-comment-o').toggleClass('icon_hover');
    });  
  
    $('#skills').hover(function() {
      $('h1#h1row3').toggleClass('h1row3move');
      $('.fa-code').toggleClass('icon_hover');
    });
    
    $('#projects').hover(function() {
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
  
});