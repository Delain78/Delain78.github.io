class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.r = this.mass * 8; //diameter is this.mass * 16, dus r is

    this.rollover = false; // is mouse over the circle?
 
    this.angle = 0;
    this.angleVel = 0;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  over(x, y) {
    //is mouse over the object
    this.rollover = dist(mouseX, mouseY, mover.pos.x, mover.pos.y);
    if (this.rollover < this.r) {
      return this.rollover;
    }
  }

  pressed(x, y) {
    //clicking on the rectangle (circle);
    if (this.over(x, y)) {
      this.vel = createVector(20, -20);
    }
  }

  frictionF(c) {
    if (this.contactEdge()) {
      let normal1 = this.mass;
      let frictionMag = c * normal1;

      let friction = this.vel.copy();
      friction.normalize();
      friction.mult(-1);

      friction.mult(frictionMag);

      this.applyForce(friction);
    }
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
    } else if (this.pos.y <= this.r - 1) {
      this.pos.y = this.r;
      this.vel.y *= -bounce;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    this.angleV = this.vel.x * 0.05;
    this.angle += this.angleV;
  }

  show() {
    push();
    translate(this.pos.x, this.pos.y);
    stroke(0);
    strokeWeight(2);
    if (this.rollover) {
      fill(0, 50);
    } else {
      fill(0, 150);
    }
    rotate(this.angle);
    circle(0, 0, this.r * 2);
    strokeWeight(4);
    line(0, 0, this.r, 0);
    pop();
  }
}
