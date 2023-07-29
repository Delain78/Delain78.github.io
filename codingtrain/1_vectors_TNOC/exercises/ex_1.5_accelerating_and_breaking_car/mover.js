class Mover {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.topSpeed = 2;
    this.gas = createVector(0.01, 0);
  }

  vectorStop() {
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  update() {
    if (keyIsPressed) { // keep key down.
      if (keyCode == UP_ARROW) {
        this.acc.add(this.gas);
        console.log("gas");
      } else if (keyCode == DOWN_ARROW) {
        if (this.vel.x <= 0) {
          this.vectorStop();
          console.log("stop")
        } else {
          this.acc.sub(this.gas);
          console.log("break");
        }
      }
    }

    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.vel.limit(this.topSpeed);
  }

  show() {
    // draw the car body
    fill(0, 150, 255);
    noStroke();
    rect(this.pos.x, this.pos.y, 100, 20);
    rect(this.pos.x + 15, this.pos.y - 22, 70, 40);

    // draw the wheels
    fill(77, 66, 66);
    ellipse(this.pos.x + 25, this.pos.y + 21, 24, 24);
    ellipse(this.pos.x + 75, this.pos.y + 21, 24, 24);
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
