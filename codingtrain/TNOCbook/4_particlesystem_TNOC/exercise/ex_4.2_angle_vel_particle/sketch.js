let particle;

function setup() {
  createCanvas(640, 360);
  particle = new Particle(width / 2, 20);
}

function draw() {
  background(255);
  particle.update();
  particle.show();
  
  let gravity = createVector (0, 0.1);
  particle.applyForce(gravity);
  
  if (particle.isDead()){
    particle = new Particle (width/2, 20);
    console.log("Particle dead!")
  }
}
