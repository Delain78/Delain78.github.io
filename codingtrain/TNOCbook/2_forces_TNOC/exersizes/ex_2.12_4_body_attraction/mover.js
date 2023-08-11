class Body {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = 8;
    this.r = sqrt(this.mass)*2;
  }
  
  applyForce(force){
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(127,127);
    circle(this.pos.x, this.pos.y, this.r*4);
  }
  
    attract(body) {
    let force = p5.Vector.sub(this.pos, body.pos);
    let d = constrain(force.mag(), 5, 25);
    let G = 1;
    let strength = (G * this.mass * body.mass) / (d * d);
    force.setMag(strength);
    body.applyForce(force);
  }

}
