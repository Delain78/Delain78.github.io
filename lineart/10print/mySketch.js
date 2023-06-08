const frmRate = 30;
let x = 0;
let y = 0;
let spacing = 70;

function setup() {
  createCanvas(1080, 1080);
  colorMode(HSB);
  frameRate(frmRate);
  background(210, 0, 0);
}

function draw() {
  strokeWeight(6);
  let xstep = 70;
  let ystep = 70;

  for (let x = 0; x < width; x += xstep) {
    for (let y = 0; y < width; y += ystep) {
      if (random(1) < 0.5) {
        stroke(180, 100, 100);
        line(x, y, x + xstep, y + ystep);
      } else {
        stroke(210, 100, 100);
        line(x, y + ystep, x + xstep, y);
      }
    }
  }
  noLoop();
}

function keyPressed() {
  if (key === "s") {
    save("03.png");
  }
}
