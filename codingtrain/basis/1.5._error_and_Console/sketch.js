function setup() {
  createCanvas(400, 300);
  print("Hello")
}

function draw() {
  background(100);//greyscale
  
  rectMode(CENTER);
  
  fill(0,255,0);
  stroke(0,0,255);
  strokeWeight(4);
  rect (200,150,150,150)
  
  fill(255,0,0,175);
  noStroke();
  ellipse (150,250,100,75);
  
  
}