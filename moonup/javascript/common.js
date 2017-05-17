/*
 Created by Jelezuha on 15.01.2017.
*/
var rightAside = $('#right-aside');
var leftAside = $('.left-aside');

function setScrollHeights() {
    var outerHeight = leftAside.outerHeight();
    $('#chat-content').height(outerHeight - 200);
    rightAside.height(outerHeight - 60);
}



$(document).ready(function () {


    $('.tabs .tablinks:nth-child(2)').addClass('active');
    $('#twoTab').show();
    /*INIT FUNCTIONS*/
    setScrollHeights();
    $('#chat-content').mCustomScrollbar({
        scrollInertia: 100
    });
    rightAside.mCustomScrollbar({
        scrollInertia: 100,

        autoHideScrollbar: true
    });


    $('.tabs__item').click(function () {
        $(this).siblings('.tabs__item').removeClass('active');
        $(this).addClass('active');
        var tabselector = '#' + $(this).data('tab');
        $(tabselector).show();
        $(tabselector).siblings('.tabcontent').hide();
    });

    $('#amountplus').click(function () {
        var val = $('#amount').val() * 1;
        var newval = val + 1;
        $('#amount').val(newval);
    });
    $('#amountminus').click(function () {
        var val = $('#amount').val() * 1;
        if (val > 0) {
            var newval = val - 1;
            $('#amount').val(newval);
        }
    });
    $('#open-left-aside').click(function () {
        if (leftAside.hasClass('open')) {
            leftAside.removeClass('open');
            $('#open-left-aside').find('.fa').attr('class', 'fa fa-chevron-right')
        } else {
            leftAside.addClass('open');
            $('#open-left-aside').find('.fa-chevron-right').attr('class', 'fa fa-chevron-left')
        }

    });
    $('.centerside').mCustomScrollbar({
        scrollInertia: 400,
    });
        $('.backpack-aside').mCustomScrollbar({
        scrollInertia: 400,
    });
    $('.backpack-aside__span_sort').click(function () {
        $('.backpack-aside__span_sort').find('.backpack-aside__icon').toggleClass('backpack-aside__icon_down');
        $('.backpack-aside__span_sort').find('.backpack-aside__icon').toggleClass('backpack-aside__icon_up');
    });
    
    $('.backpack-item').each(function(){
        var that = $(this);
        that.click(function(){
            that.toggleClass('backpack-item_active');
        });
    });

});
$(window).resize(function () {
    setScrollHeights();
});