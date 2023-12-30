// "use strict";

// let count = 0;

// const counter = () => {
//   return ++count;
// };

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// const makeCounter = () => {
//   let count = 0;

//   return () => {
//     return count++;
//   };
// };

// const counter1 = makeCounter();
// const counter2 = makeCounter();
// const counter3 = makeCounter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());
// console.log(counter2());
// console.log(counter3());
// console.log(counter2());
// console.log(counter1());

//this keyword.

// const mark = {
//   name: "mark",
//   county: "tennessee",
//   age: 25,
//   obj() {
//     return this;
//   },
// };

// console.log(mark.obj());
// console.log(this);

const myFunc = function () {
  var mark = "a cowboy";
  //   console.log(this);
  console.log(mark);
};

myFunc();

const markobj = {
  name: "mark",
  job: "cowboy",
};

//LET, VAR & CONST.

//let is block scoped. var is function scoped if not the it becomes globally scoped.

if (true) {
  var varVariable = "This is true";
}

console.log(varVariable);

if (true) {
  let letVariable = "This is true";
}

// console.log(letVariable);

//CONSTRUCTORS

const Person = function (firstName, birthYear) {
  // console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};

part();

function part() {
  console.log(this);
}

const jonas = new Person("Jonas", 1991);
const matilda = new Person("Matilda", 2014);
const jack = new Person("Jack", 1997);

console.log(jonas);

//prototypal inheritence - delegation

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

// every object has a prototype called __proto__

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "homo sapiens";

console.log(jonas.species);

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));

function makeCounter() {
  let cnt = 0;
  return () => cnt++;
}

const markCounter = makeCounter();
const dickCounter = makeCounter();

console.log(markCounter());
console.log(dickCounter());
console.log(markCounter());
console.log(markCounter());

//this on object.

function Video(title) {
  this.title = title;
  console.log(this);
}

const nob = new Video("Suko");

const video = {
  title: "Banana",
  tags: ["a", "b", "c", "d"],
  play() {
    console.log(`Playing ${this.title}`);
  },
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};

video.showTags();

const kissMe = () => {
  console.log(this);
};

kissMe();

function RegularFunction() {
  this.value = 1;

  setTimeout(function () {
    // console.log(this);
    this.value++;
    console.log(`inside function the value of "this.value" ${this.value}`);
  }, 1000);
}

const regularObj = new RegularFunction();

function ArrowFunction() {
  this.value = 2;

  setTimeout(() => {
    console.log(this);
    this.value++;
    console.log(`inside an arrow function "this.value is - ${this.value}`);
  }),
    1000;
}

const arrowObj = new ArrowFunction();
const arrowObj2 = new ArrowFunction();
const arrowObj3 = new ArrowFunction();
const arrowObj4 = new ArrowFunction();
