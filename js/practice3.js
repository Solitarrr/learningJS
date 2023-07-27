/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

//First task from practice 1
let numberOfFilms;//глобально

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '') {

    }
}

//Second task from practice 1
const personalMovieDB = {
    "count": numberOfFilms,
    "movies": {},
    "actors": {},
    "genres": [],
    "privat": false
};

//Third task from practice 2
if (personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов'); //или через alert
} else if ((personalMovieDB.count >= 10) && (personalMovieDB.count < 30)) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}


// //Third task from practice 1
// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = +prompt("На сколько оцените его?", ""),
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = +prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

//First task from practice 2
for (let i = 0; i < numberOfFilms; i++){
    let a = prompt("Один из последних просмотренных фильмов?", "");
    let b = +prompt("На сколько оцените его?", "");
    
    //Second task from practice 2 (отмена prompt это null)
    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--; //дикримент
    }    
}

// //Второй вариант написания цикла
// let i = 0;
// while (i < numberOfFilms){
//     let a = prompt("Один из последних просмотренных фильмов?", "");
//     let b = +prompt("На сколько оцените его?", "");
    
//     //Second task from practice 2 (отмена prompt это null)
//     if (a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--; //дикримент
//     }
//     i++;    
// }
// let i = 0;
// do {
//     let a = prompt("Один из последних просмотренных фильмов?", "");
//     let b = +prompt("На сколько оцените его?", "");
    
//     //Second task from practice 2 (отмена prompt это null)
//     if (a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--; //дикримент
//     }
//     i++;    
// } while (i < numberOfFilms)

console.log(personalMovieDB);