$(function(){
  let OS="Unknown OS";
  if (navigator.appVersion.indexOf("Win") != -1) OS = "Windows";
  if (navigator.appVersion.indexOf("Mac") != -1) OS = "Mac";
  if (navigator.appVersion.indexOf("X11") != -1) OS = "UNIX";
  if (navigator.appVersion.indexOf("Linux") != -1) OS = "Linux";
  
  if (OS === "Windows" || OS === "UNIX" || OS === "Linux" || window.screen.availWidth < 1025 || navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    $('body, h1, .types').css('font-weight', '300');
    
    if (OS === "Windows" || OS === "UNIX" || OS === "Linux") {
      $('#profilepic').css('-webkit-filter', 'brightness(1.1) contrast(1.2) grayscale(0.3)');
      $('#profilepic').css('filter', 'brightness(1.1) contrast(1.2) grayscale(0.3)');
      $('#contact_line, #description2, #description3').css('transform', 'scaleX(0.94)');
      $('#description2').css('left', '-7px');
      $('#description3').css('right', '-7px');
    }
    
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
      $('body').css('text-shadow', '0 0 2px #111111');
    }
  }

  if ($(window).width() > 767) {
    var height = $("#row1").outerHeight(true);    
    
    $(window).scroll(function(){                          
      if ($(window).scrollTop() > (height - 10)){
          $('nav').fadeIn("slow");
      } else {
          $('nav').fadeOut("fast");
      }
    });
  }
    
  $('.open_close').click(function() {
    if ($(window).width() < 768) {
      $(this).siblings('.hidden').slideToggle(function() {
        $('html, body').animate({ scrollTop: $(this).parent('section').parent('div').offset().top }, "slow");            
      });
    }      
  });
  
  $('#scroll_up').click(function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, "slow");
  });

  if (window.screen.availWidth > 768) {
    $('.hash_section').hover(function(){
      $(this).children('.hash').toggleClass('hash_hover');
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

    $('#scroll_div').hover(function() {
      $(this).children('a').children('i').toggleClass('icon_hover');
    });

    $(document).on('click', '.to_top', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, "slow");
    });
    
    $(document).on('click', '.to_about', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $('#row2').offset().top - 50 }, 'slow');
    });

    $(document).on('click', '.to_skills', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $('#row3').offset().top - 50 }, 'slow');
    });

    $(document).on('click', '.to_projects', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $('#row4').offset().top - 50 }, 'slow');
    });
  }
});