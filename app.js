$(function() {
  // Return OS name
  let OS="Unknown OS";
  if (navigator.appVersion.indexOf("Mac") != -1) OS = "Mac";
  if (navigator.appVersion.indexOf("Win") != -1) OS = "Windows";
  if (navigator.appVersion.indexOf("X11") != -1) OS = "UNIX";
  
  // For Windows and non-Mac other OS
  if (OS === "Windows" || OS === "UNIX") {
    $('#intro, .nav_text, .skills, .app_name').css('-webkit-text-stroke', '0.2px');
    $('#intro, .nav_text, .skills, .app_name').css('-webkit-font-smoothing', 'subpixel-antialiased');
    $('.fa').css('-webkit-text-stroke', '0');
    $('.hash_section, .types, .skills_description, .app_description, .app_details').css('font-family', "'Source Sans Pro', sans-serif");
    $('.hash_section, .skills_description, .app_details').css('font-size', "18px");
    $('.hash').css('font-family', "'Lato', sans-serif");
  }

  // For Internet Explorer or Microsoft Edge
  if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
    $('.nav_text').css('font-weight', '300');
    $('#hi_line, .transparent, .left_bracket, .skills, .app_name').css('text-shadow', '0 0 1px white');
    $('#about, #projects').css('background-attachment', 'scroll');
  }

  // Safari
  if (window.screen.availWidth > 1024 && navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    $('#intro, .nav_text, .hash, .punc').css('-webkit-text-stroke', '0.5px');
    $('.fa-hand-peace-o, .contact_icon').css('-webkit-text-stroke', '0');
    $('#intro, .nav_text').css('text-shadow','0 0 1px #555555');  
    $('#my_name').css('text-shadow','0 0 1px #666666');  
    $('#description2, #description3, #description4').css('opacity', '1');
  }

  // For mobile devices
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('body').css('-webkit-text-stroke', '0.3px');
    $('.fa').css('-webkit-text-stroke', '0');
    $('.types_icon').css('opacity', '0.6');
    $('#about, #skills, #projects').css('background-attachment', 'scroll');    
    
    // Nav bar only on portrait mode
    if ($(window).height() > 450) {
      $('nav').show();
    }
    
    // Display and hide nav bar when rotating screen
    $(window).resize(function() {
      if ($(window).height() > 450) {
        $('nav').show();
      } else {
        $('nav').hide();
      }
    });
    
  // For non-mobile devices
  } else {
    // Appearing/disappearing nav bar
    let height = $("#intro").outerHeight(true);
    
    $(window).scroll(function() {                          
      if ($(window).scrollTop() > (height - 55)) {
        $('nav').fadeIn("slow");
      } else {
        $('nav').fadeOut("fast");
      }
    });
    
    // Hovering effects
    function hoverToggleBoth(hoveredElement, toggleTarget1, cssClass1, toggleTarget2) {
      $(hoveredElement).hover(function() {
        toggleTarget1.toggleClass(cssClass1);
        toggleTarget2.toggleClass('icon_hover');
      });      
    }
  
    hoverToggleBoth('#about', $('h1#h1row2'), 'h1row2move', $('.fa-comment-o'));
    hoverToggleBoth('#skills', $('h1#h1row3'), 'h1row3move', $('.fa-code'));
    hoverToggleBoth('#projects', $('h1#h1row4'), 'h1row4move', $('.fa-cubes'));
    hoverToggleBoth('#email_link', $('#email_link'), 'text_hover', $('.fa-envelope'));
    
    $('.hash_section').hover(function() { $(this).children('.hash').toggleClass('text_hover') });  
    $('.app_name').hover(function() { $(this).children('a').children('i').toggleClass('icon_hover') });
    $('.type_section').hover(function() { $(this).children('.types').children('.types_icon').toggleClass('icon_hover') });
    $('.contact_link').hover(function() {
      $(this).children('.contact_icon').toggleClass('icon_hover');
      $(this).children('.icon_text').toggleClass('text_hover');
    });  
  }
  
// For any devices
  let speed = 400; // Default scroll speed
  
  // Adjust speed on ipad
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) speed = 0;
  
  //On-click scrolling event-handler function
  function scrollTo(links, destination) {
    $(document).on('click', links, function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $(destination).offset().top - 50 }, speed);
    });    
  }
  
  scrollTo('.to_top, .up', 'html');
  scrollTo('.to_about', '#about');
  scrollTo('.to_skills', '#skills');
  scrollTo('.to_projects, .down', '#projects');

  // Blinking up and down chevrons
  setInterval(function() {
    $('.fa-chevron-down, .fa-chevron-up').toggleClass('icon_hover');
  }, 1000);
});