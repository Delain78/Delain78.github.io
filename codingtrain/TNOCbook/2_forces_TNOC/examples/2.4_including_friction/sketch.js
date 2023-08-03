// f =−1∗μ∗N∗v formula for friction f is -> above and v with ^ above

let mover;

function setup() {
  createCanvas(640, 240);

  mover = new Mover(width / 2, 30, 5);
}

function draw() {
  background(255);

  let gravity = createVector(0, 1);
  let gravityA = p5.Vector.mult(gravity, mover.mass);
  mover.applyForce(gravityA);

  if (mouseIsPressed) {
    let wind = createVector(0.5, 0);
    mover.applyForce(wind);
  }

  if (mover.contactEdge()) {
    let c = 0.1;
    let normal1 = 1;
    let frictionMag = c * normal1;

    let friction = mover.vel.copy();
    friction.normalize();
    friction.mult(-1);

    friction.mult(frictionMag);
    
    mover.applyForce(friction);
  }

  mover.bounceEdges();
  mover.show();
  mover.update();
 // mover.checkEdges();
}
