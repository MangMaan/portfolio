$(document).ready(function(){

    $('.object_wrap dl').hide();
    $('.object_wrap .color').hide();
    $('.object_wrap').children('li').click(function(){
        $(this).children('li>dl').toggle('slow');
    })
    $('.object_wrap').children('li').click(function(){
        $(this).children('.color').show();
    })
})/* end */