let r = 0;
let theta = 0;

function setup() {
  createCanvas(640, 240);
  
  background(255);
}

function draw() {
  
  
  translate(width/2, height/2);
  
  let pos = p5.Vector.fromAngle(theta)
  pos.mult(r);
  //let x = r * cos(theta);
  //let y = r * sin(theta);
  
  fill(127);
  stroke(0);
  strokeWeight(2);
  circle(pos.x,pos.y,16)
  
  theta += 0.01;
  r +=0.05;
}