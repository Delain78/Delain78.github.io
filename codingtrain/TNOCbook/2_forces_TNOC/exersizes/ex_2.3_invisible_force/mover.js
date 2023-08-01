//Instead of objects bouncing off the edge of the wall, create an example in //which an invisible force pushes back on the objects to keep them in the window. //Can you weight the force according to how far the object is from an edge, so //that the closer it is, the stronger the force?

class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.r = this.mass * 8; //diameter is this.mass * 16, dus r is
    this.center = createVector(width / 2, height / 2);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    let wallF = p5.Vector.sub(this.center, this.pos);
    let distanceSq = constrain(wallF.magSq(), 25, 250);

    let G = 0.1;
    let M1 = this.mass;
    let M2 = 10;

    let strength = (G * (M1 * M2)) / distanceSq;
    
    wallF.setMag(strength);

    this.acc.add(wallF);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    stroke(0);
    fill(175);
    circle(this.pos.x, this.pos.y, this.r * 2);
  }

  checkEdges() {
    /*let wallF = p5.Vector.sub(this.center, this.pos);
    let distanceSq = constrain(wallF.magSq(), 25, 250);

    let G = 0.1;
    let M1 = this.mass;
    let M2 = 1000;

    let strength = (G * (M1 * M2)) / distanceSq;

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.acc.x = -strength;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.acc.x = strength;
    }*/

    if (this.pos.y <= this.r) {
      this.pos.y = this.r;
      this.vel.y *= -1;
    } else if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }
  }
}
