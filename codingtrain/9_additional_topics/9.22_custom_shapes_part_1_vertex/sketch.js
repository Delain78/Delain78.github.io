function setup() {
  createCanvas(400, 400);

  angleMode(DEGREES);
}

function draw() {
  background(0);
  stroke(255);
  noFill();

  strokeWeight(4);

  // circle made using polar coordinates and vertex
  beginShape();
  let spacing = map(mouseX, 0, width, 5, 100);
  for (let a = 0; a < 360; a += spacing) {
    let x = 100 * sin(a) + 200;
    let y = 100 * cos(a) + 200;
    vertex(x, y);
  }
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
