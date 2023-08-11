//Fg = (G * mass1 * mass2) / (distance * distance);

// ex 2.13 what happens if you design an attractive force that gets weaker as the objects get closer, and stronger as the objects get farther apart?

class Attractor {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.mass = 20;
  }

  show() {
    strokeWeight(4);
    stroke(0);
    fill(175, 200);
    circle(this.pos.x, this.pos.y, this.mass * 2);
  }

  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos);
    let distance = force.mag();
    distance = constrain(distance, 5, 25);
    let d = map(distance,5,25,25,5)
    let G = 1;
    let strength = (G * this.mass * mover.mass) / (d * d);
    force.setMag(strength);
    return force;
  }
}
