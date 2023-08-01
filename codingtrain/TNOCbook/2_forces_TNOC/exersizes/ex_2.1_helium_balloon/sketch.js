let mover;
let tx = 0;
let ty = 10000;

function setup() {
  createCanvas(640, 240);

  mover = new Mover();
}

function draw() {
  background(255);
  mover.show();
  mover.update();

  let windX = map(noise(tx), 0, 1, -0.02, 0.02);
  let windY = map(noise(ty), 0, 1, -0.02, 0.02);
  let wind = createVector(windX, windY);
  mover.applyForce(wind);

  tx += 0.01;
  ty += 0.01;

  let helium = createVector(0, -0.05);
  mover.applyForce(helium);
  mover.checkEdges();
}
