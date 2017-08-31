$(function() {
    $('section .header>p').tap(function() {
        $('.item>div>a>div>i').css('display', 'inline-block');
        $('.item>div').removeClass('hide');
    })

    $('section .section li').tap(function() {
        var x = $(this).index();
        $('section .section li').removeClass('color');
        $(this).addClass('color');
        $('section .section div').css('display', 'none').eq(x).css('display', 'block')
    })

    $('.item>div>a').swipeLeft(function() {
        $('.item>div').animate({
            translateX: '0%'
        });
        $(this).parent().animate({
            translateX: '-16%'
        })
    })

    $('.item>div>a').swipeRight(function() {
        $(this).parent().animate({
            translateX: '0%'
        })
    })

})