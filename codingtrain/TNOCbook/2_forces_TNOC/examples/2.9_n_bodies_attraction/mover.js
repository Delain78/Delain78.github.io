class Body {
  constructor(x, y,m ) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = m;
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
    circle(this.pos.x, this.pos.y, this.mass*16);
  }
  
    attract(other) {
    let force = p5.Vector.sub(this.pos, other.pos);
    let d = constrain(force.mag(), 5, 25);
    let G = 1;
    let strength = (G * this.mass * other.mass) / (d * d);
    force.setMag(strength);
    return force;
  }

}
