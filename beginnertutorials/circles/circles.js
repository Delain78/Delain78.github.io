function setup() {
  createCanvas (1080, 1080);
  colorMode (HSB);
  background(210,0,90);
}

function draw() {
  
  fill (210,100,100);
  circle (540,540,540);
  
  fill (180,100,100);
  circle (540,540,340);
  
  fill (150,100,100);
  circle (540,540,140);
  
  noLoop();
  
  save ("circles.png")
}
