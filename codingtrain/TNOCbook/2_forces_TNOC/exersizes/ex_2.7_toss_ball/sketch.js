let mover;

function setup() {
  createCanvas(640, 240);

  mover = new Mover(width / 2, height / 2, 5);

  let p = createP("press and move over the ball, to throw ball");
  p.style("font-size", "18px");
  p.position(10, 0);
}

function draw() {
  background(255);

  if (mouseIsPressed) {
    let d = dist(mouseX, mouseY, mover.pos.x, mover.pos.y);
    if (d < mover.r) {
      let gravity = createVector(0, 0.1);
      let gravityA = p5.Vector.mult(gravity, mover.mass);
      mover.applyForce(gravityA);
      
      let throwX = (mouseX - pmouseX);
      let throwY = (mouseY - pmouseY);
      let throwF = createVector(throwX, throwY);
      mover.applyForce(throwF);
    }
  }

  if (mover.contactEdge()) {
    mover.frictionF(0.005);
  }

  mover.bounceEdges();
  mover.show();
  mover.update();
}
