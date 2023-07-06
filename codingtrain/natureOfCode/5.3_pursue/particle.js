class Vehicle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.maxSpeed = 4;
    this.maxForce = 0.25;
    this.r = 16;
  }
  
  pursue(vehicle){
    let target = vehicle.pos.copy();
    let prediction = vehicle.vel.copy();
    prediction.mult(10);
    target.add(prediction);
    
    fill(0,255,0);
    circle(target.x, target.y, 16)
    
    return this.seek(target);
  }
  
  flee(target){
    return this.seek(target).mult(-1);
  }
  
  seek(target){
    let force = p5.Vector.sub(target, this.pos);
    force.setMag(this.maxSpeed);
    force.sub(this.vel);
    force.limit(this.maxForce);
    return force;
  }
  
  applyForce(force) {
    this.acc.add(force);
  }
  
   edges() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    triangle(-this.r, -this.r/2, -this.r, this.r/2, this.r, 0);
    pop();
  }
}

class Target extends Vehicle{
  constructor(x,y ){
    super(x,y);
    this.vel = createVector(5,2);
  }
  
  show(){
     stroke(255);
    strokeWeight(2);
    fill('#F063A4');
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    circle(0,0, this.r * 2);
    pop();
  }
}
