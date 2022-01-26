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
    $('.section1, .section2').css({
      display: 'none'
    });

    $('.serviceAll').css({
      'left': '0'
    });

    $('.serviceSlide').outerHeight(section3);

  } else if (getAlink == 'designing') {
    $('.section1, .section2').css({
      display: 'block'
    });

    $('.serviceAll').css({
      'left': '-100vw'
    });
    $('.serviceSlide').outerHeight(section2);

  } else {
    $('.section1, .section2').css({
      display: 'block'
    });

    $('.serviceAll').css({
      'left': '0'
    });
    $('.serviceSlide').outerHeight(section1);
  }


  $('.navigation a').click(function () {
    let currentNav = $(this).attr('href').split('#')[1];

    if (currentNav === 'developing') {
      $('.section1, .section2').css({
        display: 'none'
      });

      $('.serviceAll').css({
        'left': '0'
      });
      $("body, html").delay(200).animate({
        scrollTop: 0
      }, 500);
      $('.serviceSlide').outerHeight(section3);

    } else if (currentNav === 'designing') {
      $('.section1, .section2').css({
        display: 'block'
      });

      $('.serviceAll').css({
        'left': '-100vw'
      });
      $("body, html").delay(200).animate({
        scrollTop: 0
      }, 500);
      $('.serviceSlide').outerHeight(section2);

    } else {
      $('.section1, .section2').css({
        display: 'block'
      });

      $('.serviceAll').css({
        'left': '0'
      });
      $("body, html").delay(200).animate({
        scrollTop: 0
      }, 500);
      $('.serviceSlide').outerHeight(section1);

    }
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
    $('.section1, .section2').css({
      display: 'none'
    });

    $('.serviceAll').css({
      'left': '0'
    });

    $('.serviceSlide').outerHeight(section3);

  } else if (getAlink == 'designing') {
    $('.section1, .section2').css({
      display: 'block'
    });

    $('.serviceAll').css({
      'left': '-100vw'
    });
    $('.serviceSlide').outerHeight(section2);

  } else {
    $('.section1, .section2').css({
      display: 'block'
    });

    $('.serviceAll').css({
      'left': '0'
    });
    $('.serviceSlide').outerHeight(section1);
  }


  $('.navigation a').click(function () {
    let currentNav = $(this).attr('href').split('#')[1];

    if (currentNav === 'developing') {
      $('.section1, .section2').css({
        display: 'none'
      });

      $('.serviceAll').css({
        'left': '0'
      });
      $("body, html").delay(200).animate({
        scrollTop: 0
      }, 500);
      $('.serviceSlide').outerHeight(section3);

    } else if (currentNav === 'designing') {
      $('.section1, .section2').css({
        display: 'block'
      });

      $('.serviceAll').css({
        'left': '-100vw'
      });
      $("body, html").delay(200).animate({
        scrollTop: 0
      }, 500);
      $('.serviceSlide').outerHeight(section2);

    } else {
      $('.section1, .section2').css({
        display: 'block'
      });

      $('.serviceAll').css({
        'left': '0'
      });
      $("body, html").delay(200).animate({
        scrollTop: 0
      }, 500);
      $('.serviceSlide').outerHeight(section1);

    }
  });
});