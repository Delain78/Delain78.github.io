class Walker{
  constructor(){
    this.x = width/2;
    this.y = height/2;
  }
  
  show(){
    stroke(0);
    point(this.x, this.y);
  }
  
  step(){
  let r = random(1)
  let step = 10;
  let stepx = random(-step,step);
  let stepy = random(-step,step);
    if (r < 0.01){ 
      this.x += stepx;
      this.y += stepy;
    } else {
      this.x += random(-1,1);
      this.y += random(-1,1);
    }
  }
}