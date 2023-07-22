let xNoise;
let yNoise;
let frmRate = 30;

const totalFrames = 240;
let counter = 0;
let record = false;

function setup() {
  createCanvas(400, 400);
  xNoise = new NoiseLoop (2, 0, width);
  yNoise = new NoiseLoop (2, 0, height)
}

function draw() {
  frameRate (30);
  let percent = (counter % totalFrames) / totalFrames;
  render(percent);
  counter++;
}

function render (percent){
  background(0);
  let a = percent * TWO_PI;
  stroke(255);

  let x = xNoise.value(a);
  let y = yNoise.value(a);
  circle (x,y, 100);
  
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', totalFrames, { delay: 0, units: "frames" });
    }
}