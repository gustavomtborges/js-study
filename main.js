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
