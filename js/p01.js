'use strict';

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');
// let i = 0;
// const deleteElement = (e) => {
//   console.log(e.target);
//   console.log(e.type);
// };
//
//
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
//
// const link = document.querySelector("[type='submit']");
//
// link.addEventListener('click', e => {
//   e.preventDefault();
//   console.log(e.target);
// });

const test = e => {
  e.preventDefault();
  console.log(e.currentTarget);
};

btns.forEach( el => el.addEventListener('click', test, {once: true}));

// btns.forEach( el => el.removeEventListener('click', test));




