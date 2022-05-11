'use strict';

// const ul = document.getElementsByTagName('ul');
//
// console.log(ul[0]);
//
// const second = document.querySelector('.second');
//
// console.log(second.parentNode);
//
// const current  = document.querySelector('[data-current]');
//
// console.log(current.nextElementSibling)
console.log(document.body.childNodes)

let childElements = [];

for( let node of document.body.childNodes ) {
  if (node.nodeName === '#comment' || node.nodeName === '#text') continue;
  childElements.push(node);
}

console.log(childElements)