'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,

  start: () => {
    personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
    while (personalMovieDB.count === '' || isNaN(personalMovieDB.count) || personalMovieDB.count === null) {
      alert('Введите число больше 0');
      personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },

  rememberMyFilms: () => {
    let lastMovie, lastMovieScore;

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
  },

  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 || personalMovieDB.count <= 30) {
      alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
      alert('Вы киноман');
    } else {
      alert('Произошла ошибка');
    }
  },

  toggleVisibleMyDB: () => {
    personalMovieDB.privat = !personalMovieDB.privat;
  },

  showMyDB: (hidden) => {
    if (!hidden) console.log(personalMovieDB);
  },

  writeYourGenres: () => {
    let favoriteGenre;

    for (let i = 1; i < 2; i++) {
      favoriteGenre = prompt(`Введите 3 ваших любимых жанра через ,`, '').toLowerCase();
      if (favoriteGenre === null || favoriteGenre === '') {
        alert('Введите корректные жанры');
        i--;
        continue;
      }
      personalMovieDB.genres = favoriteGenre.split(', ').map( el => el.charAt(0).toUpperCase() + el.slice(1));
    }
    personalMovieDB.genres.forEach( (el, i) => console.log(`Любимый жанр #${i+1} - это ${el}`) );
  }
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGenres();

