let angle = 0;
let angleV = 0;
let angleA = 0.001;


function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS);
}

function draw() {
  
  angleA = map (mouseX, 0, width, - 0.01, 0.01);
  angleV = constrain(angleV, -0.2, 0.2);
  
  
  background(146, 83,161);
  noStroke();
  fill(244,99,164);
  rectMode(CENTER);
  translate(200,200);
  rotate(angle);
 rect (0,0,256,32)
  
  angle += angleV;
  angleV += angleA;
}