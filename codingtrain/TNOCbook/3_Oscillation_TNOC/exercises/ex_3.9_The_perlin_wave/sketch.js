let startAngle = 0;
let angleVel = 0.2;

function setup() {
  createCanvas(640, 240);
}

function draw() {
  background(255);

  let angle = startAngle;

  stroke(0);
  strokeWeight(2);
  fill(127, 127);

  for (let x = 0; x <= width; x += 24) {
    let y = map(noise(angle), -1, 1, 0, height);
    circle(x, y-50, 48);
    angle += angleVel;
  }

  startAngle +=0.01;
}
