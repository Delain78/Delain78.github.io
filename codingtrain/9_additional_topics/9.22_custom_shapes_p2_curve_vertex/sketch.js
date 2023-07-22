function setup() {
  createCanvas(400, 400);

  angleMode(DEGREES);
}

function draw() {
  background(0);
  stroke(255);
  noFill();

  strokeWeight(4);
  point(mouseX, mouseY);
  point(150, 50);
  point(250, 50);
  point(300, 200);
  strokeWeight(1);

  beginShape();
  curveVertex(mouseX, mouseY);
  curveVertex(150, 50);
  curveVertex(250, 50);
  curveVertex(300, 200);
  endShape(CLOSE);


  // random shape using vertex alone
  //beginShape();
  //vertex(100, 50);
  //vertex(200, 20);
  //vertex(200, 100);
  //vertex(50, 75);
  //vertex(25, 50);
  //endShape();
}
