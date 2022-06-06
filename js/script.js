'use strict';

//Tabs

const tabs = document.querySelectorAll('.tabheader__item'), tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

function hideTabContent() {
  tabsContent.forEach(el => {
    el.classList.add('hide');
    el.classList.remove('show', 'fade');
  });

  tabs.forEach(el => el.classList.remove('tabheader__item_active'));
}

function showTabContent(i = 0) {
  tabsContent[i].classList.add('show', 'fade');
  tabsContent[i].classList.remove('hide');
  tabs[i].classList.add('tabheader__item_active');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', e => {
  if (e.target && e.target.classList.contains('tabheader__item')) {
    tabs.forEach((el, i) => {
      if (el === e.target) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

// Timer

//смена текста окончания акции
const promoEndsChange = (date) => {
  let promoEndsText = document.querySelector('.promotion__descr').childNodes[5];
  let promoEndsDate = date;

  function promoEndsMonth(month) {
    switch (month) {
      case 0:
        return 'января';
      case 1:
        return 'февраля';
      case 2:
        return 'марта';
      case 3:
        return 'апреля';
      case 4:
        return 'мая';
      case 5:
        return 'июня';
      case 6:
        return 'июля';
      case 7:
        return 'августа';
      case 8:
        return 'сентября';
      case 9:
        return 'октября';
      case 10:
        return 'ноября';
      case 11:
        return 'декабря';
    }
  } //месяцы на ру
  let PED = promoEndsDate.getDate();
  let PEM = promoEndsMonth(promoEndsDate.getMonth());
  let PEHM = promoEndsDate.toTimeString().slice(0, 5);

  promoEndsText.textContent = `Акция закончится ${PED} ${PEM} в ${PEHM}`;
};

//let endDate = new Date('2022-06-10T14:48:02');
let endDate = new Date('2022-05-29T03:04:30');
//endDate.setTime(endDate.getTime());
promoEndsChange(endDate);

const counter = () => {

  let countDown = endDate.getTime() - Date.now();
  // console.log(countDown);
  countDown = new Date(countDown);
  // console.log(countDown);
  // console.log(Date.now());
  return countDown;
};

const timersInterval = setInterval(() => {
  if (endDate.getTime() - Date.now() <= 100) {
    console.log('pass');
    clearInterval(timersInterval);
  }

  tForTimer(counter());
  console.log(endDate.getTime());
  console.log(Date.now());


}, 10);



const tForTimer = (date) => {
  //console.log(date);
  const timer = document.querySelector('.timer');
  let tDays = timer.querySelector('#days');
  let tHours = timer.querySelector('#hours');
  let tMinutes = timer.querySelector('#minutes');
  let tSeconds = timer.querySelector('#seconds');

  tDays.innerHTML = date.getUTCDate() - 1;
  tHours.innerHTML = date.getUTCHours().toString();
  tMinutes.innerHTML = date.getUTCMinutes().toString();
  tSeconds.innerHTML = date.getUTCSeconds().toString();

};

tForTimer(counter());

// let promoEndsDate = new Date(2022, 5, 10);
//
// console.dir(promoEndsDate);

// let PED = promoEndsDate.getDay();
// let PEM = promoEndsMonth(promoEndsDate.getMonth());
// let PEHM = promoEndsDate.toTimeString().slice(0,5);
//
// promoEndsText.textContent = `Акция закончится ${PED} ${PEM} в ${PEHM}`;
























