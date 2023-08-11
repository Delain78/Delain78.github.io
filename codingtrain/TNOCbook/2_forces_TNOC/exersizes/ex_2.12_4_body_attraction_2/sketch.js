//https://dangries.com/rectangleworld/demos/nBody/

let bodyA;
let bodyB;
let bodyC;
let bodyD;

function setup() {
  createCanvas(640, 640);
  bodyA = new Body(1/5 * width, 1/2 * height);
  bodyB = new Body(2/5 * width, 1/2 * height);
  bodyC = new Body(3/5 * width, 1/2 * height);
  bodyD = new Body(4/5 * width, 1/2 * height);

  bodyA.vel = createVector(0, 1);
  bodyB.vel = createVector(-1, 0);
  bodyC.vel = createVector(1, 0);
  bodyD.vel = createVector(0, -1);
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
