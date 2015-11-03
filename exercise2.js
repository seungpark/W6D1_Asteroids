Function.prototype.inherits = function (superclass) {
  var Surrogate = function () {};
  Surrogate.prototype = superclass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject () {
  // f = function() {
  //   console.log("hihihi");
  // };
};

function Ship () {};
Ship.inherits(MovingObject);

function Asteroid () {};
Asteroid.inherits(MovingObject);
