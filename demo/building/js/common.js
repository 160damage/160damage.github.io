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