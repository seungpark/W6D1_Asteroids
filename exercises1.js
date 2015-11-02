var sum = function () {
  var result = 0;
  console.log(arguments);
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

//arguments !!!!! is available inside function definition / call

sum(1,2,3)





function Cat(name) {
  this.name = name;
};

Cat.prototype.says = function (sound) {
  console.log(this.name + " says " + sound + "!");
}

markov = new Cat("Markov");
breakfast = new Cat("Breakfast");

Function.prototype.myBind = function () {
  var fn = this;
  var objectToBind = arguments[0];
  var optionalArguments = [];
  for (var i = 1; i < arguments.length; i ++) {
    optionalArguments.push(arguments[i]);
  }

  //this refers to all functions / whatever function .myBind is called on
  return function() {
    console.log(arguments);
    for (var i = 0; i < arguments.length; i ++) {
      optionalArguments.push(arguments[i]);
    }
    return fn.apply(objectToBind, optionalArguments);
  };

}

markov.says.myBind(breakfast, "meow")();
markov.says.myBind(breakfast)("meow");
var notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow");

Function.prototype.myBind = function () {
  var fn = this;
  var bindArgument = arguments[0];
  var optionalArguments = Array.prototype.slice.call(arguments, 1)
  return function () {
    var otherArguments = Array.prototype.slice.call(arguments)
    return fn.apply(bindArgument, optionalArguments.concat(otherArguments));
  };
};


var curriedSum = function (numArgs) {
  var numbers = [];


  var _curriedSum = function (n) {
    numbers.push(n);
    if (numbers.length === numArgs) {
      var result = 0;
      for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
      }
      return result;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
};

var sum = curriedSum(4);

sum(5)(30)(20)(1); // => 56







//Function#curry(numArgs)

Function.prototype.curry = function (numArgs) {
  fn = this;
  var numbers = [];

  var _curried = function (n) {
    numbers.push(n);
    // debugger
    if (numbers.length === numArgs) {
      return fn.apply(fn, numbers);
    } else {
      return _curried;
    }
  }

  return _curried;
};



function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
// var f1 = sumThree.curry(3);
// var f2 = f1(4);
// var f3 = f2(20);
// var result = f3(6); // = 30

// or more briefly:
sumThree.curry(3)(4)(20)(6); // == 30
