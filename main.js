function greet(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  };
}

function waitTreeSecs() {
  const dateAhead = new Date().getTime() + 3000;
  while (new Date() < dateAhead) {}
  console.log("executed function");
}

let obj = {
  name: "my object",
  log: function() {
    this.name = "updated by reference";
    console.log(this);

    function test() {
      console.log(this);
    }

    test();
  }
};

function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function(i) {
        return function(j = i) {
          console.log(j);
        };
      })(i)
    );
  }
  return arr;
}

function tellWhenDone(cb) {
  var a = 10;
  var b = 20;

  cb(a, b);
}

function multiply(a, b) {
  return a * b;
}

const multiplyByTwo = multiply.bind(undefined, 2);

multiplyByTwo(3);

function mapForEach(arr, fn) {
  var newArr = [];
  arr.forEach(element => {
    newArr.push(fn(element));
  });
  return newArr;
}

var checkPastLimit = function(limiter, item) {
  return item > limiter;
};

function checkPastLimitSimplified(limiter) {
  return function(limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
}

const arr1 = mapForEach([1, 2, 3], checkPastLimitSimplified(1));

const proto = {
  prop1: 1,
  prop2: 2,
  getAllProps() {
    return `${this.prop1} ${this.prop2}`;
  }
};

const other = {
  prop1: 3
};

other.__proto__ = proto;

const a = {};
const b = function() {};
const c = [];

for (let prop in other) {
  if (other.hasOwnProperty(prop)) {
  }
}

function Person() {
  this.firstName = "John";
  this.lastName = "Doe";
}

function Animal() {}

Animal.prototype = Person;

Person.prototype.getFullname = function() {
  return `${this.firstName} ${this.lastName}`;
};

const john = new Person();
const dog = new Animal();

String.prototype.isGreaterThan = function(limiter) {
  return this.length > limiter;
};

Number.prototype.isPositive = function() {
  return this > 0;
};

let person2 = Object.create(new Person());

class PersonClass {
  constructor(name) {
    this.name = "John";
  }

  greet() {
    return `Hi ${name}`;
  }
}

let person3 = new PersonClass("john");
