class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5,2))
    this.acc = createVector(0, 0);
    this.r = 64;
    this.lifetime = 255;
  }

  finished(){
    return(this.lifetime < 0);
  }
  
  applyForce(force) {
    this.acc.add(force);
  }

  edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    
    this.lifetime -= 7;
  }

  show() {
    tint(150,40, 80, this.lifetime);
    imageMode(CENTER);
    image(img,this.pos.x, this.pos.y, this.r, this.r);
    //ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
