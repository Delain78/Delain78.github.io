function setup() {
  createCanvas(640, 240);
}

function draw() {
  background(255);
  let mouse = createVector(mouseX, mouseY)
  let centercnv = createVector(width/2, height/2);
  
  stroke(200);
  strokeWeight(4);
  line(0,0, mouseX, mouseY)
  line(0,0, centercnv.x, centercnv.y )
  
  mouse.sub(centercnv);
  
  stroke(0);
  translate(width/2, height/2);
  line(0,0, mouse.x, mouse.y )
}
