let r;
let theta;

function setup() {
  createCanvas(640, 240);
  
  r = 0.45 * height;
  theta = 0;
}

function draw() {
  background(255);
  
  translate(width/2, height/2);
  
  let pos = p5.Vector.fromAngle(theta)
  pos.mult(r);
  //let x = r * cos(theta);
  //let y = r * sin(theta);
  
  fill(127);
  stroke(0);
  strokeWeight(2);
  line(0,0,pos.x,pos.y);
  circle(pos.x,pos.y,48)
  
  theta += 0.02
}