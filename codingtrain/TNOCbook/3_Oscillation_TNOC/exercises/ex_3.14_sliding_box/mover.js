// Fn = Fg.cos (angle) --> Fy = m.ay = 0;
// Ffr = uk * Fn = uk * m * g * cos(angle)
// Fx = m * ax = Fg * sin(angle) - Fr
//             = m * g * sin(angle) - uk * m * g * cos (angle);
// the mass cancels eachother out;

class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.mass = mass;
    this.g = 1; //gravity constant
    this.uk = 0.3; //friction constant
    this.angle = -14;

 
  }

  calculate() {
    let Fx = 1 * this.mass * sin(this.angle) - this.uk * 1 * this.mass *     cos(this.angle);
    let Fy = 0;
    let accVector = createVector(Fx,Fy);
    accVector.setHeading(this.angle);
    this.applyForce(accVector);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.sub (f);// because it goes in the - x direction from the center
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    //box on hill
    push();
    rectMode(CENTER);
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    stroke(0);
    strokeWeight(2);
    fill(100);
    rect(0, 0, 150, 25);
    pop();
  }
}
