// inspired by steve's makerspace tutorial on youtube

let x = 0;
let y = 0;

function setup() {
  createCanvas(1080, 1080);
  colorMode(HSB);
  background(210, 0, 0);
}

function draw() {
  strokeWeight(6);
  let xstep = 72;
  let ystep = 72;

  for (let x = 0; x < width + xstep; x += xstep) {
    for (let y = 0; y < width + ystep; y += ystep) {
			push();
			translate (-xstep/2, - ystep/2)
			let a = random (2,4)
      if (a < 1) {
        stroke(180, 100, 100);
        line(x, y, x + xstep, y + ystep);
      } else if (a < 2) {
        stroke(210, 100, 100);
        line(x, y + ystep, x + xstep, y);
      } else if (a < 3) {
        stroke(180, 100, 100);
        line(x, y, x, y + ystep);
			 } else if (a < 4) {
        stroke(210, 100, 100);
        line(x, y, x + xstep, y);
      }
			pop();
    }
  }
  noLoop();
}

function keyPressed() {
  if (key === "s") {
    save("03.png");
  }
}
