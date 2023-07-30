class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    stroke(0);
    point(this.x, this.y);
  }

  acceptReject() {
    while (true) {
      // do this forever until you find a qualifing value
      let r1 = sqrt(random(1)); //pick random value
      let probability = r1; // assign the probability
      let r2 = random(1); //pick second random value
      if (r2 < probability) {
        return r1;
      }
    }
  }

  step() {
    let step = this.acceptReject()*10;
    let stepx = random(-step, step);
    let stepy = random(-step, step);
    this.x += stepx;
    this.y += stepy;
  }
}
