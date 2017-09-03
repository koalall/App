$(function() {
    $('section>div a').tap(function() {
        var m = $(this).index();
        $('section>div a').removeClass('choose').eq(m).addClass('choose');
        $('section>form').hide().eq(m).show();
    })
})