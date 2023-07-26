function setup() {
  createCanvas(640, 240);
}

function draw() {
  background(255);
  let mouse = createVector(mouseX, mouseY);
  let centercnv = createVector(width / 2, height / 2);
  mouse.sub(centercnv);

  translate(width / 2, height / 2);
  stroke(200);
  strokeWeight(2);
  line(0, 0, mouse.x, mouse.y);

  mouse.normalize();
  mouse.mult(50);

  stroke(0);
  strokeWeight(8);
  line(0, 0, mouse.x, mouse.y);
}
