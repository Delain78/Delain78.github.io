let x = 100;
let y = 100;
let xspeed = 2.5;
let yspeed = 2;

function setup() {
  createCanvas(640, 240);
}

function draw() {
  background(255);

  x += xspeed;
  y += yspeed;

  if (x > width - 24 || x < 24) {
    xspeed = xspeed * -1;
  }

  if (y > height - 24 || y < 24) {
    yspeed = yspeed * -1;
  }

  stroke(0);
  fill(175);
  circle(x, y, 48);
}
