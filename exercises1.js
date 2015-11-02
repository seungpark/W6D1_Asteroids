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

Function.prototype.myBind = function () {
  var fn = this;
  var argArray = arguments;
  //this refers to all functions / whatever function .myBind is called on

}
