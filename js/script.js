
'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let lastMovie0 = prompt('Один из последних просмотренных фильмов?', '');
let lastMovieScore0 = +prompt('На сколько оцените его?', '');
let lastMovie1 = prompt('Один из последних просмотренных фильмов?', '');
let lastMovieScore1 = +prompt('На сколько оцените его?', '');

personalMovieDB.movies = {
  [lastMovie0]: lastMovieScore0,
  [lastMovie1]: lastMovieScore1,
};

console.log(personalMovieDB);