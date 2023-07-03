let y = 250;
let velocity = 0;
let restLength = 200;
let k = 0.01;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(112,50,126);
  noStroke();
  fill(45,197,244);
  circle(300,y,64)
  
  let x = y-restLength;
  let force = -k * x;
  
  // F = M * A --> M = 1 --> F = A
  velocity += force;
  y += velocity;
  
  velocity *= 0.99;
}