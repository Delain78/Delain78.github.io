let p;
let c;

function Particle() {
  this.x = 100;
  this.y = 99;
}

function Confetti() {
  Particle.call(this);
  this.col = color(255,0,255);
}

Particle.prototype.update = function () {
  this.x += random(-5, 5);
  this.y += random(-5, 5);
};

Particle.prototype.show = function () {
  stroke(255);
  strokeWeight(8);
  point(this.x, this.y);
};

Confetti.prototype = Object.create(Particle.prototype);
Confetti.prototype.constructor = Confetti;

Confetti.prototype.show = function () {
  stroke(this.col);
  noFill();
  strokeWeight(8);
  square(this.x, this.y, 50);
};

function setup() {
  createCanvas(600, 600);
  p = new Particle();
  c = new Confetti();
  //c.show;

  console.log(p);
  console.log(c);
}

function draw() {
  background(0);
  p.update();
  p.show();
  c.update();
  c.show();
}
