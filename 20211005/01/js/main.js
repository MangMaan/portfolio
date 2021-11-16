$(document).ready(function () {
  /*     ★ 스크롤 트리거 */
  $(window).scroll(function () {
    $('.ani_stop').each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).removeClass('ani_stop');
      }
      if (bottom_of_window < bottom_of_object) {
        $(this).addClass('ani_stop');
      }
    });
  });
  if (window.matchMedia("(max-width: 1200px)").matches) {
    $('#story .inner li').mouseenter(function () {
      $(this).find('.tap').stop().fadeIn(1000);
    })
    $('#story .inner li').mouseleave(function () {
      $(this).find('.tap').stop().fadeOut(1000);
    })
    $('.cast1').slick({
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
    });
    $('#sns').slick({
      dost: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      slideToshow: 2,
      slideToScroll1,
    })
  } else {

  }

  $('#visual').slick({
    autoplay: true,
    centerMode: true,
    centerPadding: '240px',
    arrows: false,
    slideToshow: 3,
    dots: false,
    Infinity: true,
    responsive: [{
      breakpoint: 1240,
      settings: {
        centerPadding: 0,
        slideToshow: 1,
        centerMode: true,
        slideToScroll: 1,
        autoplay: true,
        Infinity: true,
      }
    }]
  });

  $('.gallery_img').slick({
    autoplay: true,
    centerMode: true,
    centerPadding: '400px',
    arrows: true,
    slideToshow: 3,
    dots: false,
    Infinity: true,
    responsive: [{
      breakpoint: 1240,
      settings: {
        centermode: true,
        centerPadding: '200px',
        slideToshow: 3,
      }
    }, {
      breakpoint: 768,
      settings: {
        centermode: true,
        centerPadding: '0',
        slideToshow: 1
      }
    }
    ]
  });



  $('.story1 li dl').hide();
  $('.story2 li dl').hide();
  $('#story .inner li').hover(function () {
    $(this).find('dl').stop().fadeIn(1000)
  })
  $('#story .inner li').mouseleave(function () {
    $(this).find('dl').stop().fadeOut(1000)
  })

  $('.mgnb_wrap').hide();
  $('.ham').click(function () {
    $('.mgnb_wrap').fadeIn();
    $('.close').show();
    $('.ham').hide();
    $('#header>h1').hide()
  });
  $('.close').click(function () {
    $('.mgnb_wrap').hide();
    $('.ham').show();
    $(this).hide();
    $('#header>h1').show()
  })

  $('#story h1').focus(function () {
    $(this).css('color', '#b8f1be');
  })
  $('.mgnb_wrap').children().click(function () {
    $('.mgnb_wrap').hide()
    $('.ham').show();
  })





})/* end */