// Create a wind force that’s variable. Can you make it interactive? For example, //think of a fan located where the mouse is and pointed toward the circles?

let mover;
let fan;

function setup() {
  createCanvas(640, 240);
  angleMode(DEGREES);

  mover = new Mover(width / 2, height / 2, 5);

  let p = createP("Position the blue fan anywhere on the canvas and press to activate the fan. ");
  p.style("font-size", "20px");
  p.style("color", "white");
  p.position(0, 240);
  
  
  let p2 = createP("Fan always turns to the ball");
  p2.style("font-size", "20px");
  p2.style("color", "white");
  p2.position(0, 275);
}

function draw() {
  background(255);

  // fan
  push();
  translate(mouseX, mouseY);
  let a = atan2(mouseY - mover.pos.y , mouseX - mover.pos.x);
  rotate(a + 90);
  fill(0,0,255);
  rect(-30, -5, 60, 10);
  pop();

  //variable wind
  if (mouseIsPressed) {
    let gravity = createVector(0, 0.1);
    mover.applyForce(gravity);

    let fan = createVector(mouseX - 5, mouseY - 40);
    let ball = createVector(mover.pos.x, mover.pos.y);
    let fanF = p5.Vector.sub(ball, fan);
    fanF.div(300);
    mover.applyForce(fanF);
  }

  mover.show();
  mover.update();
  mover.checkEdges();
}

//function mouseDragged() {
//m_angle = atan2(mouseY - 150, mouseX - 150);
//angle = m_angle;
//}
