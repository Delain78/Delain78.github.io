class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.r = this.mass * 8; //diameter is this.mass * 16, dus r is
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    //let f = force.copy();
    //f.div(mass);
    this.acc.add(f);
  }

  contactEdge() {
    return this.pos.y > height - this.r - 1;
  }

  bounceEdges() {
    let bounce = 0.9;

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -bounce;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -bounce;
    }

    if (this.pos.y > height - this.r - 1) {
      this.pos.y = height - this.r;
      this.vel.y *= -bounce;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    stroke(0);
    fill(175);
    circle(this.pos.x, this.pos.y, this.r * 2);
  }
}
