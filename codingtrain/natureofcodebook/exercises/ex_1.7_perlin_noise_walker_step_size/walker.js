class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.tx = 0;
    this.ty = 10000;
  }

  update() {
    let step = 10;
    let stepx = map(noise(this.tx), 0, 1, 0, 25);
    let stepy = map(noise(this.ty), 0, 1, 0, 25);
    this.tx += 0.01;
    this.ty += 0.01;
    let choice = floor(random(4));
    if (choice == 0) {
      this.x += stepx ;
    } else if (choice == 1) {
      this.x -= stepx;
    } else if (choice == 2) {
      this.y += stepy;
    } else if (choice == 3) {
      this.y -= stepy;
    }
  }

  show() {
    strokeWeight(2);
    fill(127);
    stroke(0);
    ellipse(this.x, this.y, 16, 16);
  }
}
