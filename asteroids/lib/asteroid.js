(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  //This is the constructor function
  var Asteroid = Asteroids.Asteroid = function (pos) {
    var defaults = {pos: pos, vel: Asteroids.Util.randomVec(20), color: "#00FF00", radius: 10};
    Asteroids.MovingObject.call(this, defaults);
  };

  // var Asteroids = {};
  // Asteroids.Asteroid = function () {};

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);



  // var BatteryManager = "hello";
  // function Asteroid (pos) {
  //
  // };

})();


// new Asteroids.Asteroid();
//
// module ChessGame
//
//   class Game
//   end
//
//   class Board
//   end
//
// end
//
// module CheckersGame
//
//   class Game
//   end
//
//   class Board
//   end
//
// end
//
// CheckersGame::Game.new
//
// ChessGame::Game.new
