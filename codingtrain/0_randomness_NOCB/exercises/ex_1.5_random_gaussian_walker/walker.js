class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    stroke(0);
    point(this.x, this.y);
  }

  step() {
    let d = randomGaussian(3, 3);
    let choice = floor(random(4));
    if (choice == 0) {
      this.x += d;
    } else if (choice == 1) {
      this.x -= d;
    } else if (choice == 2) {
      this.y += d;
    } else if (choice == 3) {
      this.y -= d;
    }
  }
}
