// Fn = Fg.cos (angle) --> Fy = m.ay = 0;
// Ffr = uk * Fn = uk * m * g * cos(angle)
// Fx = m * ax = Fg * sin(angle) - Fr
//             = m * g * sin(angle) - uk * m * g * cos (angle);
// the mass cancels eachother out;

let mover;

function setup() {
  createCanvas(640, 240);
  angleMode(DEGREES);

  mover = new Mover(420, 125, 4);
}

function draw() {
  background(255);

  // hill with angle 14o
  stroke(0);
  strokeWeight(2);
  fill(175);
  triangle(0, 240, 640, 240, 640, 86);

  mover.show();
  mover.update();
  mover.calculate();
}
