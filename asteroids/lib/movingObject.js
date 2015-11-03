(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};
  var MovingObject = Asteroids.MovingObject = function (attributes) {
    // debugger
    this.pos = attributes.pos;
    this.vel = attributes.vel;
    this.radius = attributes.radius;
    this.color = attributes.color;
  };



  //MovingObject.draw(ctx)
  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    var obj = this;

    ctx.arc(
      obj.pos[0],
      obj.pos[1],
      obj.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }
})();
//
// var mo = new Asteroids.MovingObject(
//   { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
// );
