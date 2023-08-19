let angle;
let angleV;

function setup() {
  createCanvas(640, 240);

  angle = 0;
  angleV = 0.05;
}

function draw() {
  background(255);

  // let amplitude = 100;   //pixels
  //let period = 120;      //framecount for tracking time
  // let x = amplitude * sin(TWO_PI * frameCount/ period);

  let x = width / 2;
  let y = map(sin(angle), -1, 1, 0, 200);

  stroke(0);
  strokeWeight(4);
  fill(127);
  line(x, 0, x, y);
  circle(x, y, 48);

  angle += angleV;
}
