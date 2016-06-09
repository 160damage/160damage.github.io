var wrapper = document.getElementById('wrapper'),
    add = document.getElementById('add'),
    clear = document.getElementById('clear'),
    achieveNumber = document.getElementById('achieve__number');

var number = 1;//счетчик

/** Добавляет ачивку в конец враппера и обновляет счетчик. */
var foo = function(){
    var label = '';
    if (number > 1) { label = '<div class="achieve__label"><span class="label__number">'+number+'</span></div>';}
    wrapper.innerHTML =   wrapper.innerHTML + '<div class="achieve"><img src="images/owl.png" alt="" class="achieve__image"/>'+label+'</div>';
    number++;
    if (number < 100){
        achieveNumber.innerText = number;
    } else if (number >= 100) {
        removeEvent(add, 'click', foo);
    }
};

/** Сколько ачивок будет показанно в начале. */
for (i=1;i<41;i++){
    foo();
}

/** добавляет евент при клике на кнопку add achievement. */
addEvent(add, 'click', foo);

/**добавляет евент при клике на кнопку clear и удаляет все содержимое враппера + обновляет счетчик.*/
addEvent(clear, 'click', function(){
    number = 1;
    wrapper.innerHTML = '';
    addEvent(add, 'click', foo);
    achieveNumber.innerText = number-1;
})

function addEvent(el, type, handler) {
    if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
}
function removeEvent(el, type, handler) {
    if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
};