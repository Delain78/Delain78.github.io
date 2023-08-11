//Fg = (G * mass1 * mass2) / (distance * distance);

// ex 2.13 Or what if you design your attractor to attract faraway objects, but repel close ones?

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
    let G = 1;
    let strength = (G * this.mass * mover.mass) / (distance * distance);
    if (distance >= 15) {
      force.setMag(strength);
    } else {
      force.setMag(-strength);
    }
    return force;
  }
}
