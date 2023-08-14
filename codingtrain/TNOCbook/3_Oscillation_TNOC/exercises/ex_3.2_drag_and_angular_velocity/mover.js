class Mover {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = 1.0;
    this.r = 16;
    this.topSpeed = 2;
    this.gas = 0.01;

    this.angle = 0;
    this.angleVel = 0;
    this.angleAcc = 0;
  }

  batonStop() {
    this.angleVel = 0;
    this.angleAcc = 0;
  }

  update() {
    if (keyIsPressed) {
      // keep key down.
      if (keyCode == UP_ARROW) {
        this.angleAcc += this.gas;
        console.log("gas");
      } else if (keyCode == DOWN_ARROW) {
        if (this.angleVel <= 0) {
          this.batonStop();
          console.log("stop");
        } else {
          this.angleAcc -= this.gas;
          console.log("break");
        }
      }
    }

    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.vel.limit(this.topSpeed);

    this.angleVel += this.angleAcc;
    this.angle += this.angleVel;

    this.acc.mult(0);
  }


  show() {
    translate(width / 2, height / 2);
    rotate(this.angle);

    fill(127);
    stroke(0);
    strokeWeight(2);

    line(-60, 0, 60, 0);
    circle(-60, 0, this.r);
    circle(60, 0, this.r);
  }
}
