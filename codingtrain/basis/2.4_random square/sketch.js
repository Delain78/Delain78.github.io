let squareSize;
let lineWidth;

function setup() {
  createCanvas(400, 300);
  background(0);
}

function draw() {
  // framerate is 60 frames/s
  squareSize = random(5, 250);
  lineWidth = random(4, 28);

  rectMode(CENTER);
  strokeWeight(lineWidth);
  fill(0, 255, 0, 10);
  stroke(0, 0, 255, 10);

  rect(200, 150, squareSize);
}
