$(window).on('scroll', function () {

  $('.figureWrap > figure').each(function () {
    if ($(window).scrollTop() >= $(this).offset().top - 10) {
      var id = $(this).attr('id');
      $('.aLink a').removeClass('active');
      $('.aLink a[href=#' + id + ']').addClass('active');
    }
  });
});

//   service
$(document).ready(function () {
  $('.aLink a').on('click', function (event) {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

  // 기획
  let section1 = $('.section1').outerHeight();
  // 디자인
  let section2 = $('.section2').outerHeight();
  // 개발
  let section3 = $('.section3').outerHeight();

  // ------------------------------------------------
  let currentUrl = $(location).attr('href');
  let splitUrl = currentUrl.split('#');
  let getAlink = splitUrl[1];


  if (getAlink == 'developing') {
    $('.serviceAll').css({
      'left': '-200vw'
    });

    $('.serviceSlide').outerHeight(section3);

  } else if (getAlink == 'designing') {
    $('.serviceAll').css({
      'left': '-100vw'
    });
    $('.serviceSlide').outerHeight(section2);

  } else {
    $('.serviceAll').css({
      'left': '0'
    });
    $('.serviceSlide').outerHeight(section1);

  }

  $('.section1 .navigation a:first-child').click(function () {
    $('.serviceAll').animate({
      'left': '-200vw'
    }, 200);
    $("body, html").delay(200).animate({
      scrollTop: 0
    }, 500);
    $('.serviceSlide').outerHeight(section3);
    
  });

  $('.section2 .navigation a:first-child').click(function () {
    $('.serviceAll').animate({
      'left': '0'
    }, 200);
    $("body, html").delay(200).animate({
      scrollTop: 0
    }, 500);
    $('.serviceSlide').outerHeight(section1);
  });

  $('.section3 .navigation a:first-child').click(function () {
    $('.serviceAll').animate({
      'left': '-100vw'
    }, 200);
    $("body, html").delay(200).animate({
      scrollTop: 0
    }, 500);
    $('.serviceSlide').outerHeight(section2);
  });


  $('.section1 .navigation a:last-child').click(function () {
    $('.serviceAll').animate({
      'left': '-100vw'
    }, 200);
    $("body, html").delay(200).animate({
      scrollTop: 0
    }, 500);
    $('.serviceSlide').outerHeight(section2);
  });

  $('.section2 .navigation a:last-child').click(function () {
    $('.serviceAll').animate({
      'left': '-200vw'
    }, 200);
    $("body, html").delay(200).animate({
      scrollTop: 0
    }, 500);
    $('.serviceSlide').outerHeight(section3);
  });

  $('.section3 .navigation a:last-child').click(function () {

    $('.serviceAll').animate({
      'left': '0'
    }, 200);
    $("body, html").delay(200).animate({
      scrollTop: 0
    }, 500);
    $('.serviceSlide').outerHeight(section1);
  });
});

$(window).resize(function () {
  // 기획
  let section1 = $('.section1').outerHeight();
  // 디자인
  let section2 = $('.section2').outerHeight();
  // 개발
  let section3 = $('.section3').outerHeight();

  // ------------------------------------------------
  let currentUrl = $(location).attr('href');
  let splitUrl = currentUrl.split('#');
  let getAlink = splitUrl[1];

  if (getAlink == 'developing') {
    $('.serviceAll').css({
      'left': '-200vw'
    });
    $('.serviceSlide').outerHeight(section3);
  } else if (getAlink == 'designing') {
    $('.serviceAll').css({
      'left': '-100vw'
    });
    $('.serviceSlide').outerHeight(section2);
  } else {
    $('.serviceSlide').outerHeight(section1);
    $('.serviceAll').css({
      'left': '0'
    });
  }

  $('.section1 .navigation a:first-child').click(function () {
    $('.serviceAll').animate({
      'left': '-200vw'
    }, 200);
    $("body, html").delay(200).animate({
      scrollTop: 0
    }, 500);
    $('.serviceSlide').outerHeight(section3);
  });

  $('.section2 .navigation a:first-child').click(function () {
    $('.serviceAll').animate({
      'left': '0'
    }, 200);
    $("body, html").delay(200).animate({
      scrollTop: 0
    }, 500);
    $('.serviceSlide').outerHeight(section1);
  });

  $('.section3 .navigation a:first-child').click(function () {
    $('.serviceAll').animate({
      'left': '-100vw'
    }, 200);
    $("body, html").delay(200).animate({
      scrollTop: 0
    }, 500);
    $('.serviceSlide').outerHeight(section2);
  });


  $('.section1 .navigation a:last-child').click(function () {
    $('.serviceAll').animate({
      'left': '-100vw'
    }, 200);
    $("body, html").delay(200).animate({
      scrollTop: 0
    }, 500);
    $('.serviceSlide').outerHeight(section2);
  });

  $('.section2 .navigation a:last-child').click(function () {
    $('.serviceAll').animate({
      'left': '-200vw'
    }, 200);
    $("body, html").delay(200).animate({
      scrollTop: 0
    }, 500);
    $('.serviceSlide').outerHeight(section3);
  });

  $('.section3 .navigation a:last-child').click(function () {

    $('.serviceAll').animate({
      'left': '0'
    }, 200);
    $("body, html").delay(200).animate({
      scrollTop: 0
    }, 500);
    $('.serviceSlide').outerHeight(section1);
  });
});