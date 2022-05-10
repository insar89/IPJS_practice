/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */
'use strict';

const movieDB = {
    movies: [
        "ЛAган",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const ads = document.querySelectorAll('.promo__adv img');
ads.forEach( el => el.remove() );

const genre = document.querySelector('.promo__genre');
genre.textContent = 'ДРАМА';

const bg = document.querySelector('.promo__bg');
bg.style.background = 'url("./img/bg.jpg")';

const oldList = document.
    querySelectorAll('.promo__interactive-item');


movieDB.movies.sort();

// oldList.forEach( (el, i) => {
//    el.textContent = `${i+1} ${movieDB.movies[i]}`
//   });

const list = document.querySelector('.promo__interactive-list');


list.innerHTML = '';
console.log(list);
// movieDB.movies.forEach( (el, i) => {
//    list.innerHTML += `
//    <li class="promo__interactive-item">${i+1} ${movieDB.movies[i]}
//    <div class="delete"></div>
//    </li>`
// });
