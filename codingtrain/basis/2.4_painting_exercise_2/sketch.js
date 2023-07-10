let diameter = 32;
let r, g, b;

function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  noStroke();
  fill(random(255), 0, random(255), 100);
  circle(mouseX, mouseY, random(16, 64));
}

function mousePressed() {
  background(0);
}
