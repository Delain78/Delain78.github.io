let moverA;
let moverB;

function setup() {
  createCanvas(640, 320);

  moverA = new Mover(100, 30, 10);
  moverB = new Mover(400, 30, 2);
}

function draw() {
  background(255);

  let gravity = createVector(0, 0.1);
  moverA.applyForce(gravity);
  moverB.applyForce(gravity);

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    moverA.applyForce(wind);
    moverB.applyForce(wind);
  }

  moverA.show();
  moverA.update();
  moverA.checkEdges();

  moverB.show();
  moverB.update();
  moverB.checkEdges();
}
