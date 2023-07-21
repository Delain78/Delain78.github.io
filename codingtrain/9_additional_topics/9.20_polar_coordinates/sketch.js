function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(51);
  
  let x = 100;
  let y = 300;
  
  stroke(255);
  strokeWeight(8);
  point (x,y);
  
  let angle = map (mouseX, 0,width, -90,90);
  let r = 100;
  
  let dx = r * cos (angle);
  let dy = r * sin (angle);
  
  point (x + dx, y + dy);
  line (x,y, x + dx, y + dy)
}