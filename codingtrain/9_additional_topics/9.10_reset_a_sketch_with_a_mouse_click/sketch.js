let pos; // position
let velocity;

function setup() {
  createCanvas(640, 240);

 resetSketch();
  
  let button = createButton("reset");
  button.mousePressed(resetSketch);
}

function resetSketch(){
  // this bit used to be in setup
    pos = createVector(100, 100);
  velocity = createVector(1, 3.3);
}

function draw() {
  background(255);
  pos.add(velocity);

  if (pos.x > width - 24 || pos.x < 24) {
    velocity.x = velocity.x * -1;
  }

  if (pos.y > height - 24 || pos.y < 24) {
    velocity.y  = velocity.y  * -1;
  }

  stroke(0);
  fill(175);
  circle(pos.x, pos.y, 48);
}
