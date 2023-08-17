class Attractor {
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.mass = 20;
  }
  
  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos);
    let distanceSq = constrain(force.magSq(),25,625);

    let G = 1;

    let strength = (G * (this.mass * mover.mass)) / distanceSq;

    force.setMag(strength);

    mover.applyForce(force);
  }
  
  show() {
    noStroke();
    fill(255,0,100);
    ellipse(this.pos.x, this.pos.y, this.mass * 2);
  }


}
