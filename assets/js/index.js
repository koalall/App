$(function() {
    $('.down').tap(function() {
        if ($(this).find('i').css('transform') == 'rotateZ(0deg)') {

            $(this).find('i').animate({ 'rotateZ': '180deg' });
            $(this).parent().siblings('.item-down').css('display', 'block');

        } else {
            $(this).find('i').animate({ 'rotateZ': '0deg' });
            $(this).parent().siblings('.item-down').css('display', 'none');


        }
    })
})