// simulate lift. CD an Cl (angle of attack, air flow) are the same, only the force is -90 dregrees turned. Lift depence on the right balance between weight, drag surface area and velocity

// fd = −0.5 ∗ p ∗ sq(v)∗ A * Cd *  v. formula for drag force fd is -> above and v with ^ above. p and A are set to 1.

let movers = [];
let liquid;

function setup() {
  createCanvas(640, 240);

  for (let i = 0; i < 8; i++) {
    let mass = 5;
    movers[i] = new Mover(30, 40 + i * 70, mass);
  }

  liquid = new Liquid(0, 0, width, height, 0.001);

  let p = createP(
    "Lift depence on the right balance between weight, drag surface area and velocity."
  );
  p.style("font-size", "18px");
  p.style("color", "white");
  p.position(10, 250);
  let p1 = createP(
    "In this example only the drag surface area height is variable."
  );
  p1.style("font-size", "18px");
  p1.style("color", "white");
  p1.position(10, 275);
  let p2 = createP(
    "Is the plane height too heigh the plane goes down."
  );
  p2.style("font-size", "18px");
  p2.style("color", "white");
  p2.position(10, 300);
}

function draw() {
  background(255);

  liquid.show();

  for (let m of movers) {
    if (liquid.contains(m)) {
      let dragForce = liquid.drag(m);
      m.applyForce(dragForce);
      let liftForce = liquid.lift(m);
      m.applyForce(liftForce);
    }
    let gravity = createVector(0, 0.1 * m.mass);
    m.applyForce(gravity);

    m.show();
    m.update();
    // m.checkEdges();
  }
}
