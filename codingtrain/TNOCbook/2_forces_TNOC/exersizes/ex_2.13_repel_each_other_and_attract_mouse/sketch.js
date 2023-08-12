//https://dangries.com/rectangleworld/demos/nBody/

let bodies = [];


function setup() {
  createCanvas(640, 240);
  for (let i = 0; i < 10; i++) {
    bodies[i] = new Body(random(width), random(height), random(0.1, 2));
  }
}

function draw() {
  background(255);

  for (let i = 0; i < bodies.length; i++) {
    for (let j = 0; j < bodies.length; j++) {
      if (i !== j) {
       let force = bodies[j].repel(bodies[i]);
        bodies[i].applyForce(force);
      }
    }

    bodies[i].update();
    bodies[i].show();
  }
}