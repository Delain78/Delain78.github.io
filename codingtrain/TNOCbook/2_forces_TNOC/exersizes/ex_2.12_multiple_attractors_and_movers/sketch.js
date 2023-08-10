let movers = [];
let attractors = [];

let G = 1;

function setup() {
  createCanvas(1080, 1080);

  for (let i = 0; i < 24; i++) {
    movers[i] = new Mover(400, 43.2 + 43.2 * i, 0.1);
  }

  for (let i = 0; i < 9; i++) {
    attractors[i] = new Attractor(width / 2, 108 + 108 * i, 1);
  }

  background(255);
}

function draw() {
  background(255, 25);

  for (let a of attractors) {
    for (let m of movers) {
      let force = a.attract(m);
      m.applyForce(force);

      m.show();
      m.update();
    }

    a.show();
  }
}
