let angle = 0;
let angleVel = 0.2;
let amplitude = 100;

function setup() {
  createCanvas(640, 240);
    background(255);
  
  stroke(0);
  strokeWeight(2);
  fill(127,127);
  
  for (let x = 0; x <= width; x +=24){
    let y = amplitude * sin(angle)
    circle(x, y + height/2, 48);
    angle += angleVel;
  }
}

function draw() {

}