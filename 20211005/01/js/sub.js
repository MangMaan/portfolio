$(document).ready(function(){

    if (window.matchMedia("(max-width: 1200px)").matches) {
        // $('.story1_img').slick({
        //   dots: false,
        //   arrows:true,
        //   infinite: true,
        //   autoplay:true,
        //   slidesToShow: 2,
        //   slidesToScroll: 1,
        // });
    
      } else {
        
      }

$('.story1_txt').hide();
$('.story2_txt').hide();
$('.story3_txt').hide();
$('.story1>img').mouseenter(function(){
    $('.story1_txt').fadeIn(1000)
})
$('.story1>img').mouseleave(function(){
    $('.story1_txt').fadeOut(1000)
})
$('.story2>img').mouseenter(function(){
    $('.story2_txt').fadeIn(1000)
})
$('.story2>img').mouseleave(function(){
    $('.story2_txt').fadeOut(1000)
})
$('.story3>img').mouseenter(function(){
    $('.story3_txt').fadeIn(1000)
})
$('.story3>img').mouseleave(function(){
    $('.story3_txt').fadeOut(1000)
})

$('.mgnb_wrap').hide();
$('.ham').click(function(){
  $('.mgnb_wrap').fadeIn();
  $('.close').show();
  $('.ham').hide();
  $('#header>h1').hide()
});
$('.close').click(function(){
  $('.mgnb_wrap').hide();
  $('.ham').show();
  $(this).hide();
  $('#header>h1').show()
})  

$('#story h1').focus(function(){
  $(this).css('color','#b8f1be');
})
$('.mgnb_wrap').children().click(function(){
  $('.mgnb_wrap').hide()
  $('.ham').show();
})

$('#banner').slick({
    dots: true,
    arrows:false,
    infinite: true,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
       });




})/* end */