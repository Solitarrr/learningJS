"use strict";

//First task
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//Second task
const personalMovieDB = {
    "count": numberOfFilms,
    "movies": {},
    "actors": {},
    "genres": [],
    "privat": false
};

//Third task
const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = +prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = +prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);