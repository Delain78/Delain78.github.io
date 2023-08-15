class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1,1), random(-1,1));
    this.acc = createVector(0, 0);
    
    this.mass = m;
    this.r = this.mass * 8;
    
    this.angle = 0;
    this.angleVel = 0;
    this.angleAcc = 0;
  }

  applyForce(force) {
    let f = p5.Vector.div(force,this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    
    this.angleAcc = this.acc.x/10.0;
    this.angleVel += this.angleAcc;
    this.angleVel = constrain(this.angleVel, -0.1, 0.1)
    this.angle += this.angleVel;
    
    this.acc.mult(0);
    
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(175, 200);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    line (0, 0, this.r, 0)
    ellipse(0, 0, this.r * 2);
    pop();
  }
}
