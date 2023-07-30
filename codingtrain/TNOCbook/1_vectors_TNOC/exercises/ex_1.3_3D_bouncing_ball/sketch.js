let ball;

function setup() {
  createCanvas(400, 400, WEBGL);
  ball = new Ball();
}

function draw() {
  background(220);

  push();
  ball.show();
  ball.update();
  ball.edges();
  pop();

  fill(0, 100, 100, 50);
  push();
  let depth = 400;
  translate(0, 0, -width / 2);
  box(width, height, depth);
  pop();
}
