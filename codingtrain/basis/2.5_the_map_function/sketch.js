let r = 0;
let b = 255;


function setup() {
  createCanvas(600, 400); 
}

function draw() { // framerate is 60 frames/s
  
  r = map (mouseX,0,600,0,255);
  b = map (mouseX,0,600,255,0);
  background (r,0,b);
  
  fill (250,118,222);
  circle (mouseX,200,64);
}