// transformations : rotate, transalate, scale, pop and push

let angle = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  //rectMode(CENTER);
}

function draw() {
  background(0);
  
  push(); // saves
  translate(200,200);//moves origin 
  scale(1,-1); // scale and direction --> can mirrow the image
  rotate(angle);
  //scale(mouseX/100,mouseY/100);
  stroke(255);
  fill(100);
  rect (0,0,100,50);
  pop(); // restore / unsaves
  
  angle = angle + 2;
  
}