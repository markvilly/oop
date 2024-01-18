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

//I guesss this works
