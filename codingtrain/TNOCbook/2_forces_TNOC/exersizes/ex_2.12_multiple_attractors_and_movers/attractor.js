//Fg = (G * mass1 * mass2) / (distance * distance);

/* ex 2.11 Adapt Example 2.6 to map the mass of the Attractor and Mover to the area of their respective circles.

circle(this.position.x, this.position.y, sqrt(this.mass) * 2);*/

class Attractor {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.mass = 20;
  }

  show() {
    noStroke();
    fill(0, 0, 255);
    circle(this.pos.x, this.pos.y, this.mass);
  }

  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos);
    let distance = force.mag();
    distance = constrain(distance, 5, 25);
    let G = 0.1;
    let strength = (G * this.mass * mover.mass) / (distance * distance);
    force.setMag(strength);
    return force;
  }
}
