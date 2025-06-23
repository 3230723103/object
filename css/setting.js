let starttime = 0;
let valTime = 0;
let minutes = 3;
let seconds = 0;
let dificultCreateTime = [700,1000];
let dificultSpeed = 40;
$(function() {
    $('.setting-wrap').on('click', function() {
        $('.setting-nav').css('visibility', 'visible');
        $('.start').hide();
    });
    $('.dificult').on('click', function() {
        $(this).addClass('select');
        $(this).siblings('.dificult').removeClass('select');
        dificultSpeed = parseInt($(this).attr('speed'));
        dificultCreateTime = [];
        dificultCreateTime.push(parseInt($(this).attr('min-create')));
        dificultCreateTime.push(parseInt($(this).attr('max-create')));
    });
    $('#save').on('click', function() {
        new Setting().change();
    });

});