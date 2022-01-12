$(window).scroll(function () {
	var scroll = $(document).scrollTop();
	console.log(scroll);

  if(scroll == 0) {
    $('.mobileHeader').css("opacity","1")
  }else{
    $('.mobileHeader').css("opacity","0")
  }
});

$(document).ready(function () {
  $(".mobileHeader .hamburger").click(function () {

    $(this).toggleClass('active');

    if ($(".mobileHeader .hamburger").hasClass("active") === true) { // class가 존재함 
      $('.mobileHeader nav').addClass('active');
    } else { // class가 존재하지않음 }
      $('.mobileHeader nav').removeClass('active');
    }
  });


}); // document.ready 끝