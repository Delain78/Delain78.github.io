function setup() {
  createCanvas(640, 240);
  background(255);
}

function draw() {
  //A normal distribution with mean 320 and standard deviation 60
  let x = randomGaussian(320, 60);

  noStroke();
  fill(0, 10);
  circle(x, 120, 16);
}
