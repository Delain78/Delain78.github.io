let angle = 0;
let angleVel = 0.05;

function setup() {
  createCanvas(640, 240);
}

function draw() {
  background(255);
  
  let amplitude = 100; //pixels

  angle += angleVel;
  let x = amplitude * sin(angle);

  //let period = 120; //framecount for tracking time
  //let x = amplitude * sin((TWO_PI * frameCount) / period);

  stroke(0);
  strokeWeight(2);
  fill(127);
  translate(width / 2, height / 2);
  line(0, 0, x, 0);
  circle(x, 0, 48);
}
