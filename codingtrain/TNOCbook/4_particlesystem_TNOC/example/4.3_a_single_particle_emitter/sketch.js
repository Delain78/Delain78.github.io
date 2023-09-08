let emitter;

function setup() {
  createCanvas(640, 240);
  emitter = new Emitter (width/2,20);
}

function draw() {
  background(255);
  emitter.addParticle();
  emitter.run();
}
