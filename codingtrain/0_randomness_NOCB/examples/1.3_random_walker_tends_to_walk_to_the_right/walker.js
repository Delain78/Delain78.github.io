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
    if (r < 0.4){ // 40
      this.x++;
    } else if (r < 0.6){
      this.x--;
    } else if (r < 0.8){
      this.y++;
    } else {
      this.y--;
    }
  }
}