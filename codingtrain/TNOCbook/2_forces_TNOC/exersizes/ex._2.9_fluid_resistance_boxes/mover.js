class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.r = this.mass * 8; //diameter is this.mass * 16, dus r is
    this.w = this.mass * random (0.1,10);
    this.h = this.mass * 4;
    //this.topspeed = 3.5 * this.mass; // just found this by testing. Makes sure the ball does not bounce on the watter surface
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  contactEdge() {
    return this.pos.y > height - this.r - 1;
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
  
 

  checkEdges() {
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
   // this.vel.limit(this.topspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    stroke(0);
    fill(175);
    rect(this.pos.x, this.pos.y, this.w, this.h);
  }
}
