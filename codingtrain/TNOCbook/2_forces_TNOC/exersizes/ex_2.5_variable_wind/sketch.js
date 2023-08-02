// Create a wind force that’s variable. Can you make it interactive? For example, //think of a fan located where the mouse is and pointed toward the circles?

let mover;
let windX;

function setup() {
  createCanvas(640, 320);

  mover = new Mover(320, 30, 5);
}

function draw() {
  background(255);

  // Fan show as rectangle at the mouse
  stroke(0);
  fill(225);
  rect(mouseX, mouseY - 40, 10, 80);

  let gravity = createVector(0, 0.1);
  mover.applyForce(gravity);

  // fan left of the circle blows to the right, fan right to the circle blows to the left
  if (mouseIsPressed) {
    if (mouseX <= mover.pos.x) {
      let windX = 0.1;
      let wind = createVector(windX, 0);
      mover.applyForce(wind);
    } else {
      let windX = -0.1;
      let wind = createVector(windX, 0);
      mover.applyForce(wind);
    }
  }

  mover.show();
  mover.update();
  mover.checkEdges();
}
