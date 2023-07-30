// Formula for F = G *((m1*m2)/r2)
// F = Force
// G = gravitational constant
// M = masses of bodies
// r = distance between bodies

class Mover {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.topSpeed = 5;
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    let force = p5.Vector.sub(mouse, this.pos); //--> r
    let distanceSq = constrain(force.magSq(),25, 250);

    let G = 100;
    let M1 = 100;
    let M2 = 100;

    let strength = G * (M1*M2) / distanceSq;

    force.setMag(strength);

    this.acc.add(force);

    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.vel.limit(this.topSpeed);
  }

  show() {
    stroke(0);
    fill(175);
    circle(this.pos.x, this.pos.y, 48);
  }

  checkEdges() {
    if (this.pos.x > width) {
      this.pos.x = 0;
    } else if (this.pos.x < 0) {
      this.pos.x = width;
    }

    if (this.pos.y > height) {
      this.pos.y = 0;
    } else if (this.pos.y < 0) {
      this.pos.y = height;
    }
  }

  // excersize 1.4
  // limit(max){
  //  if(max > 10){
  //  vel.normalize();
  //  vel.mult(max);
  //  }
  //}
}
