class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.tx = 0;
    this.ty = 10000;
  }

  update() {
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, height);
    this.tx += 0.01;
    this.ty += 0.01;
  }

  show() {
    strokeWeight(2);
    fill(127);
    stroke(0);
    ellipse(this.x, this.y, 48, 48);
  }
}
