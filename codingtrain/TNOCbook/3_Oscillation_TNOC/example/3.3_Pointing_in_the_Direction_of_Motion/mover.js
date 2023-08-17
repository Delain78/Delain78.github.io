class Mover {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.acc = createVector();
    this.topSpeed =5;
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(mouse, this.pos);

    dir.normalize();
    dir.mult(0.2);
    this.acc = dir;

    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.vel.limit(this.topSpeed);
  }

  show() {
    let angle = this.vel.heading();
    //let angle = atan2(this.vel.y/this.vel.x)
    stroke(0);
    fill(175);
    push();
    rectMode(CENTER);
    translate(this.pos.x, this.pos.y)
     rotate(angle);
    rect(0, 0, 30, 10);
    pop();
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


}
