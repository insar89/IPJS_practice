'use strict';

//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

window.addEventListener('DOMContentLoaded', () => {

  const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector(".btn-block");


   wrapper.addEventListener('click', e => {
     e.preventDefault();
      console.dir(e.target);
     if( e.target && e.target.matches('.red')) {
       console.log('Red')
     }
   });

   const btn = document.createElement('button');
   btn.classList.add('red');
   wrapper.append(btn);




});




