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

// const markobj = {
//   name: "mark",
//   job: "cowboy",
// };

// //LET, VAR & CONST.

// //let is block scoped. var is function scoped if not the it becomes globally scoped.

// if (true) {
//   var varVariable = "This is true";
// }

// console.log(varVariable);

// if (true) {
//   let letVariable = "This is true";
// }

// // console.log(letVariable);

// //CONSTRUCTORS

// const Person = function (firstName, birthYear) {
//   // console.log(this);
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// part();

// function part() {
//   console.log(this);
// }

// const jonas = new Person("Jonas", 1991);
// const matilda = new Person("Matilda", 2014);
// const jack = new Person("Jack", 1997);

// console.log(jonas);

// //prototypal inheritence - delegation

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// // every object has a prototype called __proto__

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = "homo sapiens";

// console.log(jonas.species);

// console.log(jonas.hasOwnProperty("firstName"));
// console.log(jonas.hasOwnProperty("species"));

// function makeCounter() {
//   let cnt = 0;
//   return () => cnt++;
// }

// const markCounter = makeCounter();
// const dickCounter = makeCounter();

// console.log(markCounter());
// console.log(dickCounter());
// console.log(markCounter());
// console.log(markCounter());

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

// function RegularFunction() {
//   this.value = 1;

//   setTimeout(function () {
//     // console.log(this);
//     this.value++;
//     console.log(`inside function the value of "this.value" ${this.value}`);
//   }, 1000);
// }

// const regularObj = new RegularFunction();

// function ArrowFunction() {
//   this.value = 2;

//   setTimeout(() => {
//     console.log(this);
//     this.value++;
//     console.log(`inside an arrow function "this.value is - ${this.value}`);
//   },1000);
// }

// const arrowObj = new ArrowFunction();
// const arrowObj2 = new ArrowFunction();
// const arrowObj3 = new ArrowFunction();
// const arrowObj4 = new ArrowFunction();

//ASSIGNING this manually.

const lufthansa = {
  airline: "Lufthansa",
  bookings: [],
  iataCode: "LH",
  book(flightNum, name) {
    console.log(
      `${name} has booked ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Mark Paul");
lufthansa.book(196, "John Smith");

console.log(lufthansa.bookings);

const eauroWings = {
  name: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

console.log(lufthansa.bookings);

console.log("WORKINGS OF THE this KEYWORD");

// function identify() {
//   return this.name.toUpperCase();
// }

// function speak() {
//   var greeting = "Hello, I'm " + identify.call(this);
//   console.log(greeting);
// }

function identify(context) {
  return context.name.toUpperCase();
}

function speak(context) {
  var greeting = "Hello, I'm " + identify(context);
  console.log(greeting);
}

var me = {
  name: "Tom",
};

var you = {
  name: "Reader",
};

console.log(identify(me));
console.log(identify(you));

speak(you);
speak(me);

// this does not let a function get a reference to itself.

// function foo(num) {
//   console.log("foo " + num);

//   this.count++;
// }

//another takes involves creating another object to store the count property.

// function foo(num) {
//   console.log("foo: " + num);

//   data.count++;
// }

// var data = {
//   count: 0,
// };

// let i;

// for (i = 0; i < 10; i++) {
//   if (i > 5) {
//     foo(i);
//   }
// }

// console.log(data.count);

//this work but you can also use foo identifier as a object reference in each place instead of *this*.

// function foo(num) {
//   console.log("foo is: " + num);

//   foo.count++;
// }

// foo.count = 0;

// let i;

// for (let i = 0; i < 10; i++) {
//   if (i > 5) {
//     foo(i);
//   }
// }

// console.log(foo.count);

//application of the *this* keyword sasa.

// function foo(num) {
//   console.log("foo is: " + num);

//   this.count++;
// }

// foo.count = 0;

// var i;

// for (let i = 0; i < 10; i++) {
//   if (i > 5) {
//     foo.call(foo, i);
//   }
// }

// console.log(foo.count);

function foo(numb) {
  console.log("foo is: " + numb);

  this.count++;
  // console.log(this);
}

foo.count = 0;

var i;

for (let i = 0; i < 10; i++) {
  if (i > 3) {
    foo.call(foo, i);
  }
}

console.log(foo.count);

const Person = function (name, bYear) {
  this.name = name;
  this.bYear = bYear;
};

Person.prototype.calcAge = function () {
  return 2037 - this.bYear;
};

const jonas = new Person("Mark", 2010);
console.log(Person.prototype.constructor);
jonas.calcAge;

Person.prototype.species = "Homo Sapiens";

console.log(jonas.species);

console.log(jonas.__proto__);

//closures.

var createCounter = function (init) {
  let count = init;
  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --init;
    },
    reset() {
      return init;
    },
  };
};

let counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

// var map = function (arr, fn) {
//   var result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result.push(fn(arr[i], i));
//   }

//   return result;
// };

// function timesTwo(n) {
//   return n * 2;
// }

// const plusOne = function (n) {
//   return n + 1;
// };

// console.log(map([1, 2, 3], timesTwo));
// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one.

// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

//     arr[i] - number from the arr
//     i - index of arr[i]

// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

var filtered = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  let filteredArr = result;
  return filteredArr;
};

console.log(filtered([0, 10, 20, 30], greaterThan10));

function greaterThan10(n) {
  return n > 10;
}

// Example 1:

// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10

const nums = [1, 2, 7, 4, 5];

function fn(init, n) {
  return init + n;
}

console.log(nums.reduce(fn, 0));

// function baz() {
//   //call-stack is: 'baz'
//   //So, our call-site is in the global scope.

//   console.log("baz");
//   bar(); // <-- call-site for 'bar'
// }

// function bar() {
//   //call stack is 'baz'-> 'bar'.
//   // call site is in 'baz'.

//   console.log("bar");
//   foo(); // <--- call-site for foo
// }

// function foo() {
//   // call stack is 'baz'->'bar'->'foo'
//   // call site is in 'bar'

//   console.log("foo");
// }

// baz(); //<-- call-site for 'baz'.

//How the call-site determines where the this keyword will point to during the execution of a function. 4 rules to help up determing that.

//DEFAULT BINDING.

// function fool() {
//   console.log(this.a);
// }

// var a = 2;

// fool();

// //IMPLICIT BINDING

// function fooImp() {
//   console.log(this.b);
// }

// var obj = {
//   b: 21,
//   fooImp: fooImp,
// };

// obj.fooImp();

// function foo2() {
//   console.log(this.c);
// }

// var obj2 = {
//   c: 34567890,
//   foo2: foo2,
// };

// var obj1 = {
//   c: "Hello World",
//   obj2: obj2,
// };

// obj1.obj2.foo2();

// function foo3() {
//   console.log(this.x);
// }

// var obj = {
//   x: 1,
//   foo3: foo3,
// };

// var bart = obj.foo3; // function reference / alias

// var x = "Opps, global now!";

// bart(); //<-- the call site appears to be undecorated function call so the default binging applies here.

//A more common way to demonstrate this implicit loss is with callback.

// function foul() {
//   console.log(this.r);
// }

// function doFoul(fn) {
//   // fn is a reference to 'foul'

//   fn.call(); //<--call site for 'obj4.foul'
// }

// var obj4 = {
//   r: 21,
//   foul: foul,
// };

// var r = "oops, global!";

// doFoul(obj4.foul);

//EVEN WHEN USING CALL BACK FUNCTIONS.

// function foo() {
//   console.log(this.a);
// }

// var obj = {
//   a: 2,
//   foo: foo,
// };

// var a = "Global";

// var b = obj.foo;
// b.call(obj);

//EXPLICIT BINDING

// function foo() {
//   console.log(this.a);
// }

// var obj = {
//   a: 12,
// };

// var bar = function () {
//   foo.apply(obj);
// };

// setTimeout(bar, 2000);

// bar.call(window);

//HARD BINDING

// function foo(something) {
//   console.log(this.a, something);
//   return this.a + something;
// }

// var obj = {
//   a: 99,
// };

// var bar = function () {
//   return foo.apply(obj, arguments);
// };

// const b = bar(1);

// console.log(b);

//SIMPLE BIND HELPER
// function foo(something) {
//   console.log(this.a, something);
//   return this.a + something;
// }

// function bind(fn, obj) {
//   return function () {
//     return fn.apply(obj, arguments);
//   };
// }

// var obj = {
//   a: 23,
// };

// var bar = bind(foo, obj);

// var b = bar(7);

// console.log(b);

// BIND METHOD.

function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}

var obj = {
  a: 12,
};

var bar = foo.bind(obj);

console.log(bar(3));

//some built in functions tend to have parameters called 'contxt that allows us not to have to call bind(..).

function foo2(el) {
  console.log(el, this.id);
}

var objz = {
  id: "hello",
  foo2: foo2,
  book() {
    console.log(this.id);
  },
};

// [1, 2, 3].forEach(foo2, obj);

objz.foo2("hoo");

objz.book();

//NEW KEYWORD.

function foo3(a) {
  this.a = a;
}

var bar = new foo3(3);

console.log(bar.a);

//checking the order of precedence.

//default binding comes last ofc.

function foo6() {
  console.log(this, this.a);
}

var obj3 = {
  a: 2,
  foo6: foo6,
};

var obj5 = {
  a: 3,
  foo6: foo6,
};

obj3.foo6();
obj5.foo6();

obj3.foo6.call(obj5);
obj5.foo6.call(obj3);

// figuring out where the new binding fits into the precedence.

// function fooX(something) {
//   this.a = something;
// }

// var objx1 = {
//   fooX: fooX,
// };

// var objx2 = {};

// objx1.fooX(232);
// console.log(objx1.a);
// console.log(objx1);

// objx1.fooX.call(objx2, 323);

// console.log(objx2.a);
// console.log(objx2);

// var bar = new objx1.fooX(4);
// console.log(objx1.a);
// console.log(bar.a);
// console.log(bar);

//checking if the (new) precedes explicit binding.

function fooX(something) {
  this.a = something;
}

var objx1 = {};

var bar = fooX.bind(objx1);
bar(231);
console.log(objx1);
console.log(objx1.a);

var baz = new bar(323);
console.log(objx1.a);
