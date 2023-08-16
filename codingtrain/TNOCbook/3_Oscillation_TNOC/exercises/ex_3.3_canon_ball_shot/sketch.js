let mover;

function setup() {
  createCanvas(windowWidth, windowHeight);

  mover = new Mover(0, height, 4);

  let p = createP("Press the ball to fire canon");
  p.style("font-size", "18px");
  p.position(10, 0);
}

function mousePressed() {
  mover.pressed(mouseX, mouseY);
}


function draw() {
  background(255);
  
  let gravity = createVector(0, 0.2);
  let gravityA = p5.Vector.mult(gravity, mover.mass);
  mover.applyForce(gravityA);

  if (mover.contactEdge()) {
    mover.frictionF(0.005);
  }

  mover.over(mouseX, mouseY);
  mover.bounceEdges();
  mover.show();
  mover.update();
  
  //canon
  push();
  translate(-50,height-2)
  rotate(-PI/4)
  stroke(0);
  fill(0,200)
  strokeWeight(4);
  rect(0,0,200,75);
  pop();
}
