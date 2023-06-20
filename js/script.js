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