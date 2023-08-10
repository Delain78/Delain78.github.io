//Fg = (G * mass1 * mass2) / (distance * distance);

class Attractor {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.mass = 20;
    this.dragOffset = createVector(0, 0);
    this.dragging = false;
    this.rollover = false;
  }

  show() {
    strokeWeight(4);
    stroke(0);
    if (this.dragging) {
      fill(50);
    } else if (this.rollover) {
      fill(100);
    } else {
      fill(175, 200);
    }
    circle(this.pos.x, this.pos.y, this.mass * 2);
  }

  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos);
    let distance = force.mag();
    distance = constrain(distance, 5, 25);
    let G = 1;
    let strength = (G * this.mass * mover.mass) / (distance * distance);
    force.setMag(strength);
    return force;
  }

  handlePress(mx, my) {
    let d = dist(mx, my, this.pos.x, this.pos.y);
    if (d < this.mass) {
      this.dragging = true;
      this.dragOffset.x = this.pos.x - mx;
      this.dragOffset.y = this.pos.y - my;
    }
  }

  handleHover(mx, my) {
    let d = dist(mx, my, this.pos.x, this.pos.y);
    if (d < this.mass) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  stopDragging() {
    this.dragging = false;
  }

  handleDrag(mx, my) {
    if (this.dragging) {
      this.pos.x = mx + this.dragOffset.x;
      this.pos.y = my + this.dragOffset.y;
    }
  }
}
