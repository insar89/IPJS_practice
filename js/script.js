'use strict';

let numberOfFilms;

do {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  if(numberOfFilms === 0 || isNaN(numberOfFilms)) {
    alert('Введите число больше 0');
  }
} while(numberOfFilms === 0 || isNaN(numberOfFilms));

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let lastMovie, lastMovieScore;

for (let i = 0; i < 2; i++) {
  do {
    lastMovie = prompt('Один из последних просмотренных фильмов?', '');
    if(lastMovie === '' || lastMovie === null || lastMovie.length > 50) {
      alert('Введите корректное название');
    }
  }  while (lastMovie === '' || lastMovie === null);

  do {
    lastMovieScore = +prompt('На сколько оцените его?', '');
    if(lastMovieScore === 0 || isNaN(lastMovieScore)) {
      alert('Введите число больше 0');
    }
  } while (lastMovieScore === 0 || isNaN(lastMovieScore));

  personalMovieDB.movies[lastMovie] = lastMovieScore;
}

if (personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 || personalMovieDB.count <= 30) {
  alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
  alert('Вы киноман');
} else {
  alert('Произошла ошибка');
}

console.log(personalMovieDB);