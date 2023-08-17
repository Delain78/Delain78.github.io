class Mover {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.topSpeed = 2;
    this.gas = createVector(0.01, 0);
  }

 // vectorStop() {
   // this.vel = createVector(0, 0);
   // this.acc = createVector(0, 0);
  //}

  update() {
    if (keyIsPressed) { // keep key down.
      if (keyCode == RIGHT_ARROW) {
        this.acc.add(this.gas);
        console.log("right");
      } else if (keyCode == LEFT_ARROW) {
          this.acc.sub(this.gas);
          console.log("left");
      }
    }

    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.vel.limit(this.topSpeed);
  }

  show() {
    
    let angle = this.vel.heading();
    
    push();
    translate(this.pos.x,this.pos.y )
    rotate(angle)
    
    if (angle == 0){
    // draw the car body
    fill(0, 150, 255);
    noStroke();
    rect(0, 0, 100, 20);
    rect(15,- 22, 70, 40);

    // draw the wheels
    fill(77, 66, 66);
    ellipse(25, 21, 24, 24);
    ellipse(75, 21, 24, 24);
    
    //front light
    fill(255,165,0)
    ellipse(100, 6, 8, 12);
    
    //back light
    fill(255,0,0)
    ellipse(0, 6, 8, 12);
    pop();
    }
    
    
    if (angle == PI){
    // draw the car body
    fill(0, 150, 255);
    noStroke();
    rect(0, -22, 100, 20);
    rect(15,-22, 70, 40);

    // draw the wheels
    fill(77, 66, 66);
    ellipse(25, -21, 24, 24);
    ellipse(75, -21, 24, 24);
    
    //front light
    fill(255,165,0)
    ellipse(100, -6, 8, 12);
    
    //back light
    fill(255,0,0)
    ellipse(0, -6, 8, 12);
    pop();
    }
    
    
    
    
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
