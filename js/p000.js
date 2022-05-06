// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//
//
//   printNameArrow() {
//   setTimeout(() => console.log('Arrow: ' + this.name),100)
//   }
//
//   printNameFunction() {
//   setTimeout(function() {
//     console.log('Function: ' + this.name)}, 100)
//   }
// }
//
// let person = new Person('Bob');
// console.log(person)
// person.printNameArrow();
// person.printNameFunction();

// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
// }
//
// Person.prototype.yearsOld = function() {
//   return new Date().getFullYear() - this.dob.getFullYear();
// };
//
// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }
//
//   yearsOld () {
//     return (new Date().getFullYear() - this.dob.getFullYear());
//   }
//
//   getFullName () {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
//
// const person1 = new Person('Jhon', 'Doe', '1989-05-24');
//
// console.log(person1.yearsOld());
// console.log(person1.getFullName());
//
// console.log(person1);
//

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.items'));
//
// console.log(document.querySelectorAll('.item'));
//
// const ul = document.querySelector('.items');
// ul.children[1].innerText = 'brad';
// ul.lastElementChild.innerHTML = '<h4>hello</h4>'
//
// const btn = document.querySelector('.btn');
// btn.style.background = 'red'
//
// // ul.lastElementChild.remove();
//
// ul.firstElementChild.textContent = 'hello';

// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseout',(e) => {
//   e.preventDefault();
//   document.querySelector('#my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark');
//   document.querySelector('.items').lastElementChild
//     .innerHTML = '<h1>Hello</h1>';
//
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter fields';

    setTimeout( () => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(
      `${nameInput.value} : ${emailInput.value}`));

    userList.appendChild(li);

    nameInput.value = '';
    emailInput.value = '';
  }
}

