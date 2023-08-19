class Mover {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.topSpeed = 2;
    this.gas = createVector(0.01, 0);

    //arbitrary damping to slow down the ship
    this.damping = 0.995;
    this.topSpeed = 6;

    //size
    this.r = 16;

    //variable for heading
    this.heading = 0;

    // are we thrusting? color boosters.
    this.thrusting = false;
  }
  
  applyForce(force){
    let f = force.copy();
    this.acc.add(f);
  }

  turn(angle) {
    this.heading += angle;
  }

  // apply the thrust force
  thrust() {
    // Offset the angle since we drew the ship vertically
    let angle = this.heading - PI/2;
    let force = p5.Vector.fromAngle(angle);
    force.mult(0.1);
    this.applyForce(force);
    
    //draw the booster
    this.thrusting = true;
  }

  update() {
    if (keyIsPressed) {
      // keep key down.
      if (keyCode == RIGHT_ARROW) {
        this.turn(0.03);
        //this.acc.add(this.gas);
        console.log("turn right");
      } else if (keyCode == LEFT_ARROW) {
        this.turn(-0.03);
        console.log("turn left");
      } else if (keyCode == 90) {
        this.thrust();
        console.log("thrust");
      }
    }

    this.vel.add(this.acc);
    this.vel.limit(this.topSpeed);
    this.vel.mult(this.damping);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    stroke(0);
    strokeWeight(2);
    push();
    translate(this.pos.x, this.pos.y + this.r);
    rotate(this.heading);
    fill(175);
    if (this.thrusting) fill(255, 0, 0);

    //booster blocks
    rectMode(CENTER);
    rect(-this.r / 2, this.r, this.r / 3, this.r / 2);
    rect(this.r / 2, this.r, this.r / 3, this.r / 2);

    //triangle
     fill(175);
    beginShape();
    vertex(-this.r, this.r);
    vertex(0, -this.r);
    vertex(this.r, this.r);
    endShape(CLOSE);

    pop();
    
    this.trusting = false;
  }

  checkEdges() {
    let buffer = 2 * this.r;
    if (this.pos.x > width + buffer) {
      this.pos.x = -buffer;
    } else if (this.pos.x < -buffer) {
      this.pos.x = width + buffer;
    }

    if (this.pos.y > height + buffer) {
      this.pos.y = -buffer;
    } else if (this.pos.y < -buffer) {
      this.pos.y = height + buffer;
    }
  }
}
