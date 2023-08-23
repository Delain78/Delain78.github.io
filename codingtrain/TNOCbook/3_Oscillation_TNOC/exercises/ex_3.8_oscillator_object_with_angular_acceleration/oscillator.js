class Oscillator {
  constructor() {
    this.angle = createVector();
    this.angleVel = createVector(0, 0);
    this.angleAcc = createVector(random(-0.0005, 0.0005), 
                                 random(-0.0005, 0.0005));
    this.topSpeed = 0.2;
    this.amplitude = createVector(
      random(20, width / 2),
      random(20, height / 2)
    );
  }

  oscillate() {
    this.angleVel.add(this.angleAcc);
    this.angleVel.limit(this.topSpeed);
    this.angle.add(this.angleVel);
  }

  show() {
    let x = sin(this.angle.x) * this.amplitude.x;
    let y = sin(this.angle.y) * this.amplitude.y;

    push();
    translate(width / 2, height / 2);
    stroke(0);
    strokeWeight(2);
    fill(127);
    line(0, 0, x, y);
    circle(x, y, 32);
    pop();
  }
}
