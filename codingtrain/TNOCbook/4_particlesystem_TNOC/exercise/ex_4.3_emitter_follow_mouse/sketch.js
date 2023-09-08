let emitters = [];


function setup() {
  createCanvas(640, 240);
  emitters[0] = new Emitter (width/2,20);
}

function draw() {
  background(255);
  
  for(let emitter of emitters){
  emitter.updatePosition(mouseX,mouseY)
  emitter.addParticle();
  emitter.run();
  }
}
