//all boxes have the same, weight and height, only different width, A added to the calculation


// fd = −0.5 ∗ p ∗ sq(v)∗ A * Cd *  v. formula for drag force fd is -> above and v with ^ above. p and A are set to 1.

let movers = [];
let liquid;

function setup() {
  createCanvas(640, 240);

  for (let i = 0; i < 8; i++) {
    let mass = 5;
    movers[i] = new Mover(40 + i * 70, 0, mass);
  }

  liquid = new Liquid(0, height / 2, width, height / 2, 0.5);
}

function draw() {
  background(255);

  liquid.show();

  for (let m of movers) {
    if (liquid.contains(m)) {
      let dragForce = liquid.drag(m);
      m.applyForce(dragForce);
    }
    let gravity = createVector(0, 0.1 * m.mass);
    m.applyForce(gravity);

    m.show();
    m.update();
    m.checkEdges();
  }
}
