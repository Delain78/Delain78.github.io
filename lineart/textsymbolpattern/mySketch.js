// inspired by steve's makerspace tutorial on youtube

let x = 0;
let y = 0;
let hue = [120, 150, 180, 210,240]

function setup() {
  createCanvas(1080, 1080);
  colorMode(HSB);
  background(210, 0, 0);
}

function draw() {
  strokeWeight(6);
  let xstep = 75;
  let ystep = 108;

  for (let x = 0; x < width + xstep; x += xstep) {
    for (let y = 0; y < height + ystep; y += ystep) {
			let a = random (0,4)
			textSize(75);
      if (a < 1) {
        stroke(random (180,210), 100, 100);
        text("░", x, y);
      } else if (a < 2) {
        stroke(random (180,210), 100, 100);
        text("▒", x, y);
      } else if (a < 3) {
       stroke(random (180,210), 100, 100);
        text("▓", x, y);
      } else if (a < 4) {
       stroke(random (180,210), 100, 100);
        text("█", x, y);
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
