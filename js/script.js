'use strict';

let numberOfFilms;

let start = () => {
  numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
  while (numberOfFilms === '' || isNaN(numberOfFilms) || numberOfFilms === null) {
    alert('Введите число больше 0');
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
  }
};

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let lastMovie, lastMovieScore;

let rememberMyFilms = () => {
  for (let i = 0; i < 2; i++) {

    lastMovie = prompt('Один из последних просмотренных фильмов?', '');
    if(lastMovie === '' || lastMovie === null || lastMovie.length > 50) {
      alert('Введите корректное название');
      i--;
      continue;
    }

    lastMovieScore = +prompt('На сколько оцените его?', '');
    if(lastMovieScore === 0 || isNaN(lastMovieScore)) {
      alert('Введите число больше 0');
      i--;
      continue;
    }

    personalMovieDB.movies[lastMovie] = lastMovieScore;
  }
};

rememberMyFilms();

let detectPersonalLevel = () => {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 || personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
  }
};

detectPersonalLevel();

let showMyDB = (hidden) => {
  if (!hidden) console.log(personalMovieDB);
};

showMyDB(personalMovieDB.privat);

let favoriteGenre;

let writeYourGenres = () => {
  for (let i = 1; i <= 3; i++) {
    favoriteGenre = prompt(`Ваш любимый жанр под номером ${i}`, '');
    if (favoriteGenre === null || favoriteGenre === '') {
      alert('Введите корректный жанр');
      i--;
      continue;
    }
    personalMovieDB.genres.push(favoriteGenre);
  }
};

writeYourGenres();

