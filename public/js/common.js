$(window).resize(function () {
  if ($(window).width() < 1024) {

    $(window).scroll(function () {
      var scroll = $(document).scrollTop();

      if (scroll == 0) {
        $('.mobileHeader').stop().animate({
          opacity: '1'
        }, 200).css({
          display: 'block'
        });
      } else {
        $('.mobileHeader').stop().animate({
          opacity: '0'
        }, 200).css({
          display: 'none'
        });
      }
    });
  } else {
    $('.mobileHeader').css({
      display: 'none'
    });
    $(window).scroll(function () {

      $('.mobileHeader').css({
        display: 'none'
      });
    });

  }
});


$(document).ready(function () {
  if ($(window).width() < 1024) {
    $(window).scroll(function () {
      var scroll = $(document).scrollTop();

      if (scroll == 0) {
        $('.mobileHeader').stop().animate({
          opacity: '1'
        }, 200).css({
          display: 'block'
        });
      } else {
        $('.mobileHeader').stop().animate({
          opacity: '0'
        }, 200).css({
          display: 'none'
        });
      }
    });
  } else {
    $(window).scroll(function () {

      $('.mobileHeader').css({
        display: 'none'
      });
    });

  }



  $(".mobileHeader .hamburger").click(function () {

    $(this).toggleClass('active');

    if ($(".mobileHeader .hamburger").hasClass("active") === true) { // class가 존재함 
      $('.mobileHeader nav').addClass('active');
    } else { // class가 존재하지않음 }
      $('.mobileHeader nav').removeClass('active');
    }
  });


}); // document.ready 끝