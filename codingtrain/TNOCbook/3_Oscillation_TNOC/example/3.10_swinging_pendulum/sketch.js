let pendulum

function setup() {
  createCanvas(640, 240);
  
 pendulum = new Pendulum(width / 2, 0, 175);
}

function draw() {
  background(255);
  pendulum.update();
  pendulum.show();

  pendulum.drag(); // for user interaction
}

function mousePressed() {
  pendulum.clicked(mouseX, mouseY);
}

function mouseReleased() {
  pendulum.stopDragging();
}