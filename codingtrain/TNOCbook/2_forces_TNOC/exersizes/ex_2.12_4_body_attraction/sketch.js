let bodyA;
let bodyB;

function setup() {
  createCanvas(640, 640);
  bodyA = new Body(1/4 * width, 1/4 * height);
  bodyB = new Body(3/4 * width, 1/4 * height);
  bodyC = new Body(1/4 * width, 3/4 * height);
  bodyD = new Body(3/4 * width, 3/4 * height);

  bodyA.vel = createVector(1, 0);
  bodyB.vel = createVector(0, 1);
  bodyC.vel = createVector(0, -1);
  bodyD.vel = createVector(-1, 0);
}

function draw() {
  background(255,5);

  bodyA.attract(bodyB);
  bodyA.attract(bodyC);
  bodyA.attract(bodyD);

  bodyB.attract(bodyA);
  bodyB.attract(bodyC);
  bodyB.attract(bodyD);

  bodyC.attract(bodyA);
  bodyC.attract(bodyB);
  bodyC.attract(bodyD);

  bodyD.attract(bodyA);
  bodyD.attract(bodyB);
  bodyD.attract(bodyC);

  bodyA.update();
  bodyA.show();

  bodyB.update();
  bodyB.show();

  bodyC.update();
  bodyC.show();

  bodyD.update();
  bodyD.show();
}
