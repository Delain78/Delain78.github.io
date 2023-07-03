const totalFrames = 240;
let counter = 0;
let record = false;

particles = new Array (100);

function setup() {
  createCanvas(600, 600);
  for (i =0; i < particles.length; i ++){
    particles[i] = new Particle();
  }
}

function draw() {
  let percent = (counter % totalFrames) / totalFrames;
  render(percent);
  counter++;
}

function render(percent) {
  background(0);
  let a = percent * TWO_PI;
  for (let p of particles){
    p.render(a);
  }
}
