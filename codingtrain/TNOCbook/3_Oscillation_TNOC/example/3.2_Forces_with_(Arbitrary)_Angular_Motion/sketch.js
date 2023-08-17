let movers = [];
let attractor;

function setup() {
  createCanvas(640, 240);

  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let m = random(0.1, 2);
    movers[i] = new Mover(x, y, m);
  }
  attractor = new Attractor();
}

function draw() {
 background(255);
  for (let mover of movers) {
    mover.update();
    mover.show();
    attractor.attract(mover);
  }
  attractor.show();
}
