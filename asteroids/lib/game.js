(function() {
  DIM_X = window.innerWidth;
  DIM_Y = window.innerHeight;
  NUM_ASTEROIDS = 1000;

  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Game = Asteroids.Game = function () {
    this.asteroids = [];
    this.addAsteroids();
  };

  Game.prototype.addAsteroids = function () {
    var game = this;

    for (var i = 0; i < NUM_ASTEROIDS; i++) {
      this.asteroids.push(new Asteroids.Asteroid(game.randomPosition()))
    }

    return this.asteroids;
  };

  //helper
  Game.prototype.randomPosition = function () {
    var x = DIM_X * Math.random();
    var y = DIM_Y * Math.random();
    return [x, y];
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(ctx);
    }
  };

  Game.prototype.moveObjects = function () {
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    }
  };

})();
