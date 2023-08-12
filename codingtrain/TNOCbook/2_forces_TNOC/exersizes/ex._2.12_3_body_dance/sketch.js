let movers = [];

function setup() {
  createCanvas(400, 400);

  // for (let i = 0; i < 2; i++) {
  //let x = random(width);
  //let y = random(height);
  //let m = random(25, 100);
  // movers[i] = new Mover(x, y, m);
  // }

  movers[0] = new Mover(300, 200, 0, 5, 10);
  movers[1] = new Mover(100, 200, 0, -5, 10);
  movers[2] = new Mover(200, 200, 0.1, 0, 10);

  background(0);
}

function draw() {
  background(0, 10);

  movers[0].attract(movers[1]);
  movers[0].attract(movers[2]);
  movers[1].attract(movers[0]);
  movers[1].attract(movers[2]);
  movers[2].attract(movers[0]);
  movers[2].attract(movers[1]);

  for (let mover of movers) {
    mover.update();
    mover.show();
    // attractor.attract(mover);
  }
}
