let angle = 0;

function setup() {
  createCanvas(649, 240);
}

function draw() {
  background(255);
  
  fill(127);
  stroke (0)
  rectMode(CENTER)
  translate(width/2, height/2);
  rotate(angle);
  line(-50,0,50,0);
  circle(-50,0,16);
  circle(50,0,16);
  angle += 0.1;
}