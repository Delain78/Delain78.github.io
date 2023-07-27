class Mover {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.acc = createVector(-0.001, 0.01);
    this.topSpeed = 10;
  }

  update() {
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
