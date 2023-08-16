let mover;

function setup() {
  createCanvas(windowWidth, windowHeight);

  mover = new Mover(200, height, 4);

  let p = createP("press and move the ball to throw ball");
  p.style("font-size", "18px");
  p.position(10, 0);
}

function mousePressed() {
  mover.pressed(mouseX, mouseY);
}

function mouseReleased() {
  mover.released();
}

function draw() {
  background(255);
  
  let gravity = createVector(0, 0.2);
  let gravityA = p5.Vector.mult(gravity, mover.mass);
  mover.applyForce(gravityA);

  if (mover.contactEdge()) {
    mover.frictionF(0.005);
  }

  mover.over(mouseX, mouseY);
  mover.bounceEdges();
  mover.show();
  mover.update();
  
  //basket ball hoop
  stroke(0);
  strokeWeight(4);
  line(width,150,width-75,150);
}
