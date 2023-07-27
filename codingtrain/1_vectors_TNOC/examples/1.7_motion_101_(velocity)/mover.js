class Mover {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-2, 2), random(-2, 2));
  }

  update() {
    this.pos.add(this.vel);
  }

  show() {
    stroke(0);
    fill(175);
    circle(this.pos.x, this.pos.y, 48);
  }
  
  checkEdges(){
    if (this.pos.x > width){
      this.pos.x = 0;
    } else if (this.pos.x < 0){
      this.pos.x = width;
    }
    
     if (this.pos.y > height){
      this.pos.y = 0;
    } else if (this.pos.y < 0){
      this.pos.y = height;
    }
    
    
  }
}
