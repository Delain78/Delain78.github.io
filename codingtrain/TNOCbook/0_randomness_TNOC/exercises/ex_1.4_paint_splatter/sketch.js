let slider1, slider2;

function setup() {
  createCanvas(640, 640);
  colorMode(HSB);
  background(100);

  slider = createSlider(0, 60, 60, 1);
  slider.position(10, 10);
  slider.style("width", "80px");

  let p = createP("sd");
  p.style("font-size", "16px");
  p.position(20, 20);
}

function draw() {
  let sd = slider.value();

  //A normal distribution with mean 320 and standard deviation 60
  let x = randomGaussian(320, sd);
  let y = randomGaussian(320, sd);
  let h = randomGaussian(180, sd);

  noStroke();
  fill(h, 100, 100, 0.1);
  circle(x, y, 16);
}
