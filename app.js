var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

if (OSName === "Windows" || OSName === "UNIX" || OSName === "Linux" || window.screen.availWidth < 1025) {
  $('.hidden').first().show();
  $('html, h1, .types').css('font-weight', '300');
} else {
  $('.hidden').first().slideDown(1000);    
}

$(function(){  
  $(document).on('click', '.open_close', function(e) {
    e.preventDefault();
    $(this).parent().siblings('.hidden').slideToggle("slow");
    if ($(this).is(':visible')) {
       $("html, body").animate({scrollTop: $(this).offset().top});
    }
  });
});