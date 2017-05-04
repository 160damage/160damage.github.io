/**
 * Created by Soff on 20.01.2017.
 */

$(function(){  
    $('.footer__up').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    var header = $('.header'),
    service = $('.service'),
    promote = $('.promote'),
    instruction = $('.instruction');


var wrapper = $(".wrap-withoutfoot"),
    $menu = $(".page-navigation"),
    $window = $(window);

$( document ).ready(function() {
    if ($(window).scrollTop() == (header.offset().top )) {
              $menu.children('.page-navigation__item').removeClass('page-navigation__item_active');
        $('.page-navigation__item[href="#header"]').addClass('page-navigation__item_active');
  }
    else if ($(window).scrollTop() <= (service.offset().top + 300 )) {
              $menu.children('.page-navigation__item').removeClass('page-navigation__item_active');
        $('.page-navigation__item[href="#service"]').addClass('page-navigation__item_active');
  } else if ($(window).scrollTop() <= (promote.offset().top + 300)) {
              $menu.children('.page-navigation__item').removeClass('page-navigation__item_active');
        $('.page-navigation__item[href="#promote"]').addClass('page-navigation__item_active');
  } else if ($(window).scrollTop() <= (instruction.offset().top + 300)) {
              $menu.children('.page-navigation__item').removeClass('page-navigation__item_active');
        $('.page-navigation__item[href="#instruction"]').addClass('page-navigation__item_active');
  }
});

$( window ).scroll(function() {
    
if ($(window).scrollTop() == (header.offset().top )) {
              $menu.children('.page-navigation__item').removeClass('page-navigation__item_active');
        $('.page-navigation__item[href="#header"]').addClass('page-navigation__item_active');
  }
    else if ($(window).scrollTop() <= (service.offset().top + 300 )) {
              $menu.children('.page-navigation__item').removeClass('page-navigation__item_active');
        $('.page-navigation__item[href="#service"]').addClass('page-navigation__item_active');
  } else if ($(window).scrollTop() <= (promote.offset().top + 300)) {
              $menu.children('.page-navigation__item').removeClass('page-navigation__item_active');
        $('.page-navigation__item[href="#promote"]').addClass('page-navigation__item_active');
  } else if ($(window).scrollTop() <= (instruction.offset().top + 300)) {
              $menu.children('.page-navigation__item').removeClass('page-navigation__item_active');
        $('.page-navigation__item[href="#instruction"]').addClass('page-navigation__item_active');
  }
  return false;
});

$menu.on("click","a", function(){
    var $this = $(this),
        href = $this.attr("href"),
        topY = $(href).offset().top;
   
$("html, body").animate({
            scrollTop: topY
        }, 600);
        $menu.children('.page-navigation__item').removeClass('page-navigation__item_active');
        $this.addClass('page-navigation__item_active');
  
  return false;
});  

});