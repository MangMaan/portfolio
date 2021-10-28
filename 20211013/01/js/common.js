$(document).ready(function(){
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

    $('.depth2').hide()

    $('.gnb>li').mouseenter(function(){
        $(this).children('.depth2').stop().slideDown();
    });

    $('.gnb>li').mouseleave(function(){
        $(this).children('.depth2').stop().slideUp();
    })

    $('#main_banner').slick({
        autoplay: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        fade: true,
      });
      
    $('.pause').click(function(){
        $('#main_banner').slick('slickPause')
    })
    $('.start').click(function(){
        $('#main_banner').slick('slickPlay')
    })
    $('#main_banner .slick-dots li button').prepend('0')

    $('.poster_wrap').slick({
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        fade: true,
      });
    $('.poster_wrap .slick-dots li button').prepend('0')

    
})//end