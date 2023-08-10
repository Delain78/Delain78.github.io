let movers = [];
let attractor;

let G = 1.0;

function setup() {
  createCanvas(640, 240);
 
  for (let i = 0; i <10; i ++){
  movers [i]= new Mover(random(width), random(height), random(0.1, 2));
  }
  
  attractor = new Attractor();
}

function draw() {
  background(255);

  for (let m of movers){
  let force = attractor.attract(m);
  m.applyForce(force);

  m.show();
  m.update();
  }
  
  attractor.show();
}

function mouseMoved() {
  attractor.handleHover(mouseX, mouseY);
}

function mousePressed() {
  attractor.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  attractor.handleHover(mouseX, mouseY);
  attractor.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  attractor.stopDragging();
}