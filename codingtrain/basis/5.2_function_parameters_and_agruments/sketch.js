function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(50);
  
  lollipop(100,100,50);
  lollipop(300,200,100);
  
}

function lollipop(x,y,diameter){
  
  fill (0,200,255);
  rect (x-10,y,20,150);
  
  fill(200,0,255);
  ellipse (x,y,diameter,diameter);
  
}