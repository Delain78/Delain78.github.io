let x,y;
let r, g, b;

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  let x = random(width);
  let y = random(height);
  let r = random(255);
  let g = 0;
  let b = random(255);

  noStroke();
  fill(r,g,b, 100);
  circle(x,y, 24)
}
