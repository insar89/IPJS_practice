'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: ["Логан", "Лига справедливости", "Ла-ла лэнд", "Одержимость", "Скотт Пилигрим против всех "]
  };

  const ads = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    bg = document.querySelector('.promo__bg'),
    input = document.querySelector('.adding__input'),
    btn = document.querySelector('form.add'),
    oldList = document.querySelector('.promo__interactive-list'),
    oneMovieNode = oldList.lastElementChild.cloneNode(true),
    checkbox = document.querySelector('[type="checkbox"]');

  ads.forEach(el => el.remove());
  genre.textContent = 'ДРАМА';
  bg.style.background = 'url("./img/bg.jpg")';

  const moviesSort = () => {
    movieDB.movies.sort();
  };
  moviesSort();

//нажатие кнопки обновляет массив, очищает и заполняет список
  btn.addEventListener('submit', (e) => {
    e.preventDefault();
    if(input.value === '') {
      input.placeholder = 'Введите название фильма!';
    } else {
      updatedDB(input.value);
      newList();
      input.value = '';
      favourite();
    }
  });

//добавление элементов и сортировка
  const updatedDB = (value) => {
    movieDB.movies.push(value);
    moviesSort();
  };

//названия для отображения на странице
  const rightName = (movieName) => {
    if(movieName.length <= 21)
      return movieName;
    return `${movieName.slice(0, 20)} ...`;
  };

//корзина удаляющая элементы
  const removable = (listToWrap) => {
    let element;
    listToWrap.forEach((e, i) => {
      element = e.innerHTML;
      e.innerHTML = `${element}<button id="rem${i}" role="button" aria-pressed="false" tabindex="0">  &#128465;</button>`;
      e.addEventListener('click', event => {
        event.preventDefault();
        movieDB.movies.splice(i, 1);
        newList();
      });
    });
  };

//очищает и заполняет пронумерованный список фильмов
  const newList = () => {
    oldList.innerHTML = '';
    moviesSort();
    let plusOne;
    movieDB.movies.forEach((e, i) => {
      plusOne = oneMovieNode.cloneNode(true);
      plusOne.textContent = `${i + 1} ${rightName(e)}`;
      oldList.append(plusOne);
    });
    let listOfElements = document.querySelectorAll('.promo__interactive-item');
    removable(listOfElements); //?
  };
  newList();

//любимый фильм
  const favourite = () => {
    if(checkbox.checked) alert('Добавлен любимый фильм');
  };
});





