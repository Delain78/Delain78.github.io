class Pendulum {
 constructor(x, y, r) {
    // Fill all variables
    this.pivot = createVector(x, y);
    this.bob = createVector();
    this.r = r;
    this.angle = PI / 4;

    this.angleVel = 0.0;
    this.angleAcc = 0.0;
    this.damping = 0.995; // Arbitrary damping
    this.ballr = 24.0; // Arbitrary ball radius
  }

  update() {
    let gravity = 0.4;

    // divide by r takes torque and inertia into account;
    this.angleAcc = ((-1 * gravity) / this.r) * sin(this.angle);
    this.angleVel += this.angleAcc;
    this.angle += this.angleVel;
    this.angleVel *= this.damping;
  }

  show() {
    this.bob.set(this.r * sin(this.angle), this.r * cos(this.angle));
    this.bob.add(this.pivot);

    stroke(0);
    fill(127);
    line(this.pivot.x, this.pivot.y, this.bob.x, this.bob.y);
    circle(this.bob.x, this.bob.y, this.ballr * 2);
  }
  
    // The methods below are for mouse interaction

  // This checks to see if we clicked on the pendulum ball
  clicked(mx, my) {
    let d = dist(mx, my, this.bob.x, this.bob.y);
    if (d < this.ballr) {
      this.dragging = true;
    }
  }

  // This tells us we are not longer clicking on the ball
  stopDragging() {
    this.angleVel = 0; // No velocity once you let go
    this.dragging = false;
  }

  drag() {
    // If we are draging the ball, we calculate the angle between the
    // pendulum origin and mouse position
    // we assign that angle to the pendulum
    if (this.dragging) {
      let diff = p5.Vector.sub(this.pivot, createVector(mouseX, mouseY)); // Difference between 2 points
      this.angle = atan2(-1 * diff.y, diff.x) - radians(90); // Angle relative to vertical axis
    }
  }
}


