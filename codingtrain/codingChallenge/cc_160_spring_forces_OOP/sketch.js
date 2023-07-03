let bob;
let anchor;
let spring;

let gravity;

function setup() {
  createCanvas(600, 400);
  bob = new Particle(350, 300);
  anchor = new Particle(300, 0);
  spring = new Spring(0.01, 200, bob, anchor);

  gravity = createVector(0, 0.1);
}

function draw() {
  background(112, 50, 126);
  spring.show();
  spring.update();
  bob.show();
  bob.update();
  anchor.show();
  anchor.update();

  if (mouseIsPressed) {
    bob.position.x = mouseX;
    bob.position.y = mouseY;
    bob.velocity.set(0, 0);
  }

}
