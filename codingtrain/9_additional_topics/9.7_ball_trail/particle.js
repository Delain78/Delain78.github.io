let gravity = 0.1;

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.history = [];
  }

  update() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);

    let v = createVector(this.x, this.y);

    this.history.push(v);

    if (this.history.length > 100) {
      this.history.splice(0, 1); //remove oldest and remove 1
    }
  }

  show() {
    stroke(255);
    beginShape();
    for (let i = 0; i < this.history.length; i++) {
      let pos = this.history[i]; // position
      noFill();
      vertex(pos.x, pos.y);
    }
    endShape();

    noStroke();
    fill(200);
    ellipse(this.x, this.y, 24, 24);
  }
}
