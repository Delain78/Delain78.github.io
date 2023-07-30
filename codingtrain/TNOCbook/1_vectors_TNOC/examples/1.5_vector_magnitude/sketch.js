function setup() {
  createCanvas(640, 240);
}

function draw() {
  background(255);
  let mouse = createVector(mouseX, mouseY);
  let centercnv = createVector(width / 2, height / 2);
  mouse.sub(centercnv);

  let m = mouse.mag();
  fill(0);
  rect(0,0,m,10);
  
  translate(width/2, height/2);
  line(0,0, mouse.x, mouse.y);
}
