$(document).ready(function(){

    $('.subir').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 250);
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('.subir').slideDown(250);
        } else {
            $('.subir').slideUp(250);
        }
    });

});