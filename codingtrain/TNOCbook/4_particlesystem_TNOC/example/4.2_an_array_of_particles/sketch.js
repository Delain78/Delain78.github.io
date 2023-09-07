let total = 10;
let particles = [];

function setup() {
  createCanvas(640, 240);

  //for (let i = 0; i < total; i++) {
  //particles[i] = new Particle(width / 2, 20);
  // }
}

function draw() {
  background(255);

  particles.push(new Particle(width / 2, 20));

  for (let i = particles.length -1; i >= 0; i--) {
    let particle = particles[i];
    particle.run();

    if (particle.isDead()) {
        particles.splice(i,1);
    }
  }
}
