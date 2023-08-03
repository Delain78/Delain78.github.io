// f =−1∗μ∗N∗v formula for friction f is -> above and v with ^ above

let moverA;
let moverB;

function setup() {
  createCanvas(640, 240);

  moverA = new Mover(200, 30, 5);
  moverB = new Mover(440, 30, 2);
}

function draw() {
  background(255);

  let gravity = createVector(0, 1);
  let gravityA = p5.Vector.mult(gravity, moverA.mass);
  moverA.applyForce(gravityA);
  let gravityB = p5.Vector.mult(gravity, moverB.mass);
  moverB.applyForce(gravityB);

  if (mouseIsPressed) {
    let wind = createVector(0.5, 0);
    moverA.applyForce(wind);
    moverB.applyForce(wind);
  }
  
  moverA.frictionF(0.005);
  moverA.bounceEdges();
  moverA.show();
  moverA.update();

  moverB.frictionF(0.001);
  moverB.bounceEdges();
  moverB.show();
  moverB.update();
}
