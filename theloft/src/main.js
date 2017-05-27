// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Icon from 'vue-awesome/components/Icon'


import './assets/style/main.scss'

// globally (in your main .js file)
Vue.component('icon', Icon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

import {
    TweenMax,
    Power2,
    TimelineLite
} from "gsap";
// import 'jquery';
var $ = require('jquery');
var jQBridget = require('jquery-bridget');
var Flickity = require('flickity');

$.bridget('flickity', Flickity, $);

// var app = new Vue({
//     el: 'body',
//     components: {
//         slider: slider
//     }
// })


var $carousel = $('.slider').flickity({
    groupCells: true,
    pageDots: false,
    prevNextButtons: false,
    draggable: true,
    //   autoPlay: 4000
});


var flkty = $carousel.data('flickity');
var selin = 0;
flkty.on('select', function () {
    console.log('Flickity select ' + flkty.selectedIndex);
    $('.zones__li').each(function (index) {
        if (index == flkty.selectedIndex && selin != flkty.selectedIndex) {
            $('.zones__link').removeClass('zones__link_active');
            $(this).find('.zones__link').addClass('zones__link_active');
            if (!$(this).find('.zones__link').hasClass('zones__link_hovered')) {
                TweenMax.from($(this).find('.zones__link'), .3, {
                    opacity: 0
                });
                TweenMax.from($(this).find('.zones__tag'), .5, {
                    rotation: 60,
                    bottom: '50px'
                });
                TweenMax.from($(this).find('.zones__text'), .3, {
                    y: 20,
                    opacity: 0,
                    delay: 0.3
                });
                TweenMax.from($(this).find('.zones__inner-link'), .3, {
                    y: 20,
                    opacity: 0,
                    delay: 0.4
                });
            }
        }

    })
    selin = flkty.selectedIndex
});



$('.zones__link').each(function () {
    $(this).hover(
        function () {
            $(this).addClass('zones__link_hovered');
            if (!$(this).hasClass('zones__link_active')) {
                TweenMax.from($(this).find('.zones__link'), .3, {
                    opacity: 0
                });
                TweenMax.from($(this).find('.zones__tag'), .5, {
                    rotation: 60,
                    bottom: '50px'
                });
                TweenMax.from($(this).find('.zones__text'), .3, {
                    y: 20,
                    opacity: 0,
                    delay: 0.3
                });
                TweenMax.from($(this).find('.zones__inner-link'), .3, {
                    y: 20,
                    opacity: 0,
                    delay: 0.4
                });
            }
        },
        function () {
            $(this).removeClass('zones__link_hovered');
        }
    );
});

$('.zones__ul').on('click', '.zones__li', function () {
    var index = $(this).index();
    $carousel.flickity('selectCell', index);
    //   event.preventDefault();
});


var $imgs = $('.slider__cell');

$carousel.on('scroll.flickity', function (event, progress) {
    flkty.slides.forEach(function (slide, i) {
        var img = $imgs[i];
        var x = (slide.target + flkty.x) * -1 / 3;
        img.style.transform = 'translateX( ' + x + 222 + 'px)';
    });
});


var $events = $('.card__wrap').flickity({
    // groupCells: true,
    pageDots: true,
    prevNextButtons: false,
    draggable: false,
    groupCells: 2,
    wrapAround: true,
});

$('.icon__prev').on('click', function () {
    event.preventDefault();
    $events.flickity('previous');
});

$('.icon__next').on('click', function () {
    event.preventDefault();
    $events.flickity('next');
});