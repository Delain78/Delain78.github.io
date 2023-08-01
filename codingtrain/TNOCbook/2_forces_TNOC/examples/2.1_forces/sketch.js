let mover;

function setup() {
  createCanvas(640, 240);

  mover = new Mover();
}

function draw() {
  background(255);
  mover.show();
  mover.update();

  if (mouseIsPressed){
  let wind = createVector(0.1, 0);
  mover.applyForce(wind);
  }

  let gravity = createVector(0, 0.1);
  mover.applyForce(gravity);
  mover.checkEdges();
}
