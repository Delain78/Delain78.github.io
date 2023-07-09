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
    if (r < 0.01){ 
      this.x += random(-100,100);
      this.y += random(-100,100);
    } else {
      this.x += random(-1,1);
      this.y += random(-1,1);
    }
  }
}