function setup() {
  createCanvas(640, 240);
}

function draw() {
  background(255);
  let mouse = createVector(mouseX, mouseY)
  let centercnv = createVector(width/2, height/2);
  mouse.sub(centercnv);
  
  translate(width/2, height/2);
  strokeWeight(2);
  stroke(200);
  line(0,0, mouse.x, mouse.y )
  
  mouse.mult(0.5);
  
  strokeWeight(4);
  stroke(0);
  line(0,0, mouse.x, mouse.y )
  
}
