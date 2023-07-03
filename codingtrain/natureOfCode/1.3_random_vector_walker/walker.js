class Walker {
  constructor(x, y) {
    this.pos = createVector(x,y);
    //this.vel = createVector(1,-1);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3)); // set speed
  }

  update() {
    this.pos.add(this.vel); // a.add(b) add b to a
    
    //does this -- > this.pos = this.pos + this.vel;
    
    //this.pos.x = this.pos.x + this.vel.x ;
    //this.pos.y = this.pos.y + this.vel.y ;
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255,100);
    //point(this.pos.x, this.pos.y);
    ellipse(this.pos.x, this.pos.y, 32);
  }
}
