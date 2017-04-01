var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

console.log(window.screen.availWidth);

if (OSName === "Windows" || OSName === "UNIX" || OSName === "Linux") {
  $('.hidden').first().show();
  $('html, h1, .types').css('font-weight', '300');
} else {
  $('.hidden').first().slideDown(1000);    
}
  

$(function(){
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}  
  
  $(document).on('click', '.open_close', function(e) {
    e.preventDefault();
    $(this).parent().siblings('.hidden').slideToggle("slow");
    if ($(this).is(':visible')) {
       $("html, body").animate({scrollTop: $(this).offset().top});
    }
  });
});