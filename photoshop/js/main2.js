$(document).ready(function(){
// setTimeout(function(){
// $('.object_bg').slideDown(1000)
// },4000)
// $('.color').hide();
// $('.img_wrap').mouseenter(function(){

//     $(this).children('li').siblings('.color').show();


// })/* end */


    $('.styleguide').hide();
    $('.detail').click(function(){
        $(this).hide();
        $('.styleguide').fadeIn(1000);
    })
    $('.styleguide').click(function(){
        $(this).hide();
        $('.detail').fadeIn(1000);
    })
    






})/* end */