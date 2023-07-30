let a, b;

function setup() {
  createCanvas(400, 400);
  a = createVector(100, -60);
  b = createVector(200, 60);
}

function vectorProjection(a, b) {
  let bCopy = b.copy().normalize(); // make b a unit vector
  let sp = a.dot(bCopy); // calculate A.B
  bCopy.mult(sp); // set normalize b to sp
  return bCopy;
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  let pos = createVector(100, 200);
  line(pos.x, pos.y, pos.x + a.x, pos.y + a.y);
  line(pos.x, pos.y, pos.x + b.x, pos.y + b.y);

  let v = vectorProjection(a, b);
  strokeWeight(8);
  stroke(0, 0, 255);
  line(pos.x, pos.y, pos.x + v.x, pos.y + v.y);
  
  strokeWeight(1);
  stroke(255);
  line (pos.x + a.x, pos.y + a.y, pos.x + v.x, pos.y + v.y);
  
    fill(0,255,0);
  noStroke();
  circle(pos.x + a.x, pos.y + a.y, 16);
  
  fill(255,0, 0);
  noStroke();
  circle(v.x + pos.x, v.y + pos.y, 16);

  fill(0, 255, 0);
  noStroke();
  circle(pos.x, pos.y, 16);
}
