let diameter = 32;
let r, g, b;

function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {

  noStroke();
  fill(r,g,b,100);
  circle(mouseX,mouseY, diameter)
}

function mousePressed(){
  r = random(255);
  g = 0
  b = random(255);
  diameter = random(16,64);
  
  
}
