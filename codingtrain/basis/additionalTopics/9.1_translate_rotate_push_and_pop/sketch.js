// transformations : rotate, transalate, scale, pop and push

let angle = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
    rectMode(CENTER);
}

function draw() {
  background(0);
  
  push(); // saves
  translate(100,100);//moves origin 
  rotate(angle);
  fill(255,100,50);
  rect (0,0,100,50);
  pop(); // restore / unsaves
  
  translate(300,300);
  rotate(-angle*2);
  fill(50,100,255);
  rect (0,0,100,50);
  
  angle = angle + 2;
  
}