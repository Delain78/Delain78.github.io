let angle = 0;
let angleVel = 0;
let angleAcc = 0.0001;

function setup() {
  createCanvas(649, 240);
}

function draw() {
  background(255);

  translate(width/2, height/2);
  rotate(angle);
  
  fill(127);
  stroke (0)
  strokeWeight(2);
  
  line(-60,0,60,0);
  circle(-60,0,16);
  circle(60,0,16);
 
  angleVel += angleAcc;
  angle += angleVel;
  
}