class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-2, 0));
    this.acc = createVector(0, 0);

    this.lifespan = 255;

    this.angle = 0;
    this.angleVel = 0;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan -= 2.0;
    this.acc.mult(0);

    this.angleV = this.vel.x * 0.1;
    this.angle += this.angleV;
  }

  show() {
    push();
    translate(this.pos.x, this.pos.y);
    stroke(0, this.lifespan);
    fill(0, this.lifespan);
    rotate(this.angle)
    rect(0, 0, 16);
    pop();
  }

  applyForce(force) {
    this.acc.add(force);
  }

  isDead() {
    return this.lifespan < 0.0;
  }
}
