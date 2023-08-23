class Oscillator {
  constructor(ax, ay, avx, avy){
    this.angle = createVector( ax, ay);
    this.angleVel = createVector(avx,avy);
    this.amplitude = createVector(100, 100);
  }
  
  oscillate(){
    this.angle.add(this.angleVel);
  }
  
  show(){
    let x = sin(this.angle.x) * this.amplitude.x;
    let y = sin(this.angle.y) * this.amplitude.y;
    
    push();
    translate(width/2, height/2);
    stroke(0);
    strokeWeight(2);
    fill(127);
    line(0,0,x,y);
    circle(x,y,16);
    pop();
  }
  
}