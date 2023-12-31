/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/
// Код возьмите из предыдущего домашнего задания

"use strict";

//First task from practice 1
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

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