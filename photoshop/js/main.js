$(document).ready(function(){

    $('.object_wrap dl').hide();
    $('.object_wrap .color').hide();
    $('.object_wrap').children('li').click(function(){
        $(this).children('li>dl').toggle('slow');
    })
    $('.object_wrap').children('li').click(function(){
        $(this).children('.color').show();
    })

    $('#header p').hide();
    $('#header p').fadeIn(1500);
    $('#header p').fadeOut(1500);
    $('.object_bg').hide();
    setTimeout(function(){
        $('.object_bg').slideDown(1000)
    },4000)
})/* end */