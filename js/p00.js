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
// btn.addEventListener('click')

// let arr = [];
// const arrProm = [];
//
// const a = (cb) => setTimeout(() => { arr.push(1); cb(); }, 300);
// const b = (cb) => setTimeout(() => { arr.push(2); cb(); }, 200);
// const c = (cb) => setTimeout(() => { arr.push(3); cb(); }, 100);
//
// // a();b();c();
// // (() => setTimeout(() => console.log(arr), 500))();
//
// const t1 = a(
//   () => { console.log(arr); b(
//     () => { console.log(arr); c(
//       () => console.log(arr))})});
//
//
// aP.then(() => bP.then( () => cP()))

let arr = [];

const a = () => setTimeout(() => arr.push(1), 500);
const b = () => setTimeout(() => arr.push(2), 400);
const c = () => setTimeout(() => arr.push(3), 300);
const d = () => setTimeout(() => arr.push(4), 200);
const e = () => setTimeout(() => arr.push(5), 100);

// const normalPrint = () => {
//   a();b();c();d();e();
//   setTimeout(() => console.log(arr), 1000);
// };
// normalPrint();

function f1() {
  return new Promise(a());
}
function f2() {
  return new Promise(resolve => {console.log(arr); b(); resolve();});
}
function f3() {
  return new Promise(resolve => {console.log(arr); c(); resolve();});
}

// f1(a).then( () => b());

f1().then(b).then(c).then(d).then(e);

setTimeout( () => console.log(arr), 600);

