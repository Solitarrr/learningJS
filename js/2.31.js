//Call-back функции
//Это функция, которая должна быть выполнена после того, когда другая функция завершила свое выполнение

"use strict";
//Имеют заддержку, сервер отвечает через несколько микросекунд
function first() {
    //Do something
    setTimeout(function() {
        console.log(1);
    }, 500 ); //500 милисекунд
}

function second() {
    console.log(2);
}
//Запускаются одна за другой, но результат могут дать в разное время
first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}
//В аргументе есть анонимная функция. А основная - высшего порядка
// learnJS('JavaScript', function() {
//     console.log('Я прошел этот урок');
// })
function done() {
    console.log('Я прошел этот урок');
}

learnJS('JavaScript', done);//без скобок можно функцию, т.к. мы не вызываем, а передаем