class Ball {
  constructor() {
    this.pos = createVector(100, 100, 100);
    this.vel = createVector(1, 3.3, 2);
    this.depth = 400;
  }

  show() {
    noStroke();
    fill(0, 0, 200, 50);
    translate(this.pos.x, this.pos.y, this.pos.z);
    sphere(24);
  }

  update() {
    this.pos.add(this.vel);
  }

  edges() {
    if (this.pos.x > width / 2 - 24 || this.pos.x < -width / 2 + 24) {
      this.vel.x = this.vel.x * -1;
    }

    if (this.pos.y > height / 2 - 24 || this.pos.y < -width / 2 + 24) {
      this.vel.y = this.vel.y * -1;
    }

    if (this.pos.z > this.depth / 2 - 24 || this.pos.z < -this.depth / 2 + 24) {
      this.vel.z = this.vel.z * -1;
    }
  }
}
