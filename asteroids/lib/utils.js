//
// window {
//   ...
//   Asteroids: {
//     Util: {
//       inhertis: function () {}
//     }
//   }
//   ...
// }


(function () {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = {};

  Util.inherits = function (ChildClass, ParentClass) {
    var Surrogate = function () {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };

  Util.randomVec = function(length) {
    var changeOfX = Math.random() * length;
    var changeOfY = Math.sqrt((length * length) - (changeOfX * changeOfX));
    return [changeOfX, changeOfY];
  }

})();
