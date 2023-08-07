class Liquid {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
  }

  contains(mover) {
    // store the position in a different variable to make code more readable
    let pos = mover.pos;

    // This Boolean expression determines if the position vector is contained         within the rectangle defined by the Liquid class
    return (
      pos.x > this.x &&
      pos.x < this.x + this.w &&
      pos.y > this.y &&
      pos.y < this.y + this.h
    );
  }
  
    lift(mover) {
    let speed = mover.vel.mag();

    let A = mover.w;
    let liftMagnitude = A * this.c * speed * speed; // magnitude formula

    let liftForce = mover.vel.copy();
    liftForce.rotate(- HALF_PI);

    liftForce.setMag(liftMagnitude); //magnitude and direction together.
    return liftForce;
  }

  drag(mover) {
    let speed = mover.vel.mag();

    let A = mover.h;
    let dragMagnitude = A * this.c * speed * speed; // magnitude formula

    let dragForce = mover.vel.copy();
    dragForce.mult(-1); //direction formula

    dragForce.setMag(dragMagnitude); //magnitude and direction together.
    return dragForce;
  }

  show() {
    noStroke();
    fill(200);
    rect(this.x, this.y, this.w, this.h);
  }
}
