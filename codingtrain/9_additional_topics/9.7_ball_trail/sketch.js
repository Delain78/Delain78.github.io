let vibrations = [];

function setup() {
  createCanvas(600, 600);
for (let i = 0; i < 5; i++) {
    vibrations.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(100);
  for ( let i = 0; i < vibrations.length;i++){
    vibrations[i].update();
	vibrations[i].show();
  }  
}

function mousePressed() {
  vibrations.push(new Particle(mouseX, mouseY));
}
