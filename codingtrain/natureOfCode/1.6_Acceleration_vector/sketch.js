let mover;

function setup() {
  createCanvas(400, 400);
  mover = new Mover(200,200);
  background(51);
}

function draw() {
  background(0);
  mover.update();
  mover.show();
}
