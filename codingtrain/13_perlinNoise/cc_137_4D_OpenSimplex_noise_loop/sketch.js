// Based on Josh Forisha's implementation of opensimplex noise
// https://github.com/joshforisha/open-simplex-noise-js
// noise2D(x, y)
// noise3D(x, y, z)
// noise4D(x, y, z, w)
// simplex noise goes from -1 to 1;

let inc = 0.03;
//let zoff = 0;
let zinc = 0.03;

let frmRate = 30;

const totalFrames = 120;
let counter = 0;


function setup() {
  createCanvas(640, 360);
  osnoise = new OpenSimplexNoise();
}

function draw() {
  frameRate (frmRate);
  let percent = (counter % totalFrames) / totalFrames;
  render(percent);
  counter++;
}


function render (percent){
  
  let angle = map(percent, 0, 1, 0, TWO_PI)
  let uoff = map (cos (angle), -1, 1, 0, 2);
  let voff = map (sin (angle), -1, 1, 0, 2)
  
  let yoff = 0;
  loadPixels();
  for (let y = 0; y < height; y++) {
    let xoff = 0;
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let n = osnoise.noise4D (xoff,yoff,uoff,voff);
      let r = n > 0 ? 255 : 0;
      pixels[index + 0] = r; // red value
      pixels[index + 1] = r; // green value
      pixels[index + 2] = r; // blue value
      pixels[index + 3] = 255; // alpha value

      xoff += inc;
    }
    yoff +=inc;
  }
  updatePixels();
  
  //zoff +=zinc;
  //noLoop();
  
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', totalFrames, { delay: 0, units: "frames" });
    }
}
