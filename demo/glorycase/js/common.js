/**
 * Created by Soff on 20.01.2017.
 */
$('#leftpaneltoggle').click(function(){
    if($('.left-fixed').hasClass('open')){
        $('.left-fixed').removeClass('open');
        $(this).removeClass('open');
    }else{
        $('.left-fixed').addClass('open');
        $(this).addClass('open');
    }
});
$('#headmenutoggle').click(function(){
    if($('.header_right--menu-box').css('display') === 'none'){
        $('.header_right--menu-box').show('slow');
    }else{
        $('.header_right--menu-box').hide('slow');
    }
});
$('#selectbtn').click(function(){
    if($(this).hasClass('open')){
        $('.header_left--select_list').slideUp();
        $(this).removeClass('open');
    }else{
        $('.header_left--select_list').slideDown(0);
        $(this).addClass('open');
    }
});
$('.header_left--select--option').click(function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('#selectlang').text($(this).text());
    $('#selectbtn').removeClass('open');
    $('.header_left--select_list').slideUp();
});
$(function(){
    $(document).click(function(e) {
        var container = $("YOUR-CONTAINER-SELECTOR");
        var bool = $('#headmenutoggle').css('display') == 'none';
        if ($('.header_right--menu').has(e.target).length === 0 && bool === false){
            $('.header_right--menu-box').hide('slow');
        }

        if ($('.header_left--select').has(e.target).length === 0){
            $('#selectbtn').removeClass('open');
            $('.header_left--select_list').slideUp(0);
        }
    });
});


$('.main-slider').slick({
    dots: true,
    arrows: false
});
