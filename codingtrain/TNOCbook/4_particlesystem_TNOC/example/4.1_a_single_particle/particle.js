class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-2, 0));
    this.acc = createVector(0, 0);

    this.lifespan = 255;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan -= 2.0;
    this.acc.mult(0);
  }

  show() {
    stroke(0, this.lifespan);
    fill(0, this.lifespan);
    circle(this.pos.x, this.pos.y, 8);
  }
  
  applyForce(force){
    this.acc.add(force);
  }

  isDead() {
    // if (this.lifespan < 0){
    // return true;
    //}else{
    // return false;
    //}
    return this.lifespan < 0.0;
  }
}
