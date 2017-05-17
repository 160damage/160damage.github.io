var app = new Vue({
    el: '#app',
    data: {
        message: 'Front Ninja',
        books: [
            {name:'book',
            author:'Egor'},
            {name:'Wr',
            author:'Mihail'}
        ]
    }
});

var title = document.querySelector('.title');

var basicTimeline = anime.timeline();

basicTimeline
    .add({
        targets: title,
        translateX: 250,
        duration: 300,
        loop: true,
        easing: 'easeInOutCubic',
        opacity: 0,
    }).reverse();