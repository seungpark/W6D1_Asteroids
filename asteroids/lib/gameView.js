// Define an Asteroids.GameView class in lib/gameView.js.
// The GameView should store a Game and a drawing ctx.
//
// Write a GameView#start method.
// It should call setInterval to call Game#moveObjects and
// Game#draw once every 20ms, say.

(function () {

  var Asteroids = window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
    // ctx.clearRect(0, 0, this.xDim, this.yDim);
  };

  GameView.prototype.start = function (canvasEl) {

    window.setInterval((function () {
      this.game.draw(this.ctx);
      this.game.moveObjects();
    }).bind(this), 1000 / 20);
  };

})();
