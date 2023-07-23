// Based on Josh Forisha's implementation of opensimplex noise
// https://github.com/joshforisha/open-simplex-noise-js
// noise2D(x, y)
// noise3D(x, y, z)
// noise4D(x, y, z, w)

let inc = 0.01;
let zoff = 0;
let zinc = 0.02;

function setup() {
  createCanvas(640, 360);
  osnoise = new OpenSimplexNoise();
}

function draw() {
  let yoff = 0;

  loadPixels();
  for (let y = 0; y < height; y++) {
    let xoff = 0;
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let r = osnoise.noise3D (xoff,yoff,zoff)* 255;
      //let n = osnoise.noise3D (xoff,yoff,zoff);
      //let r = map (n,-1,1,0,255);
      pixels[index + 0] = r; // red value
      pixels[index + 1] = r; // green value
      pixels[index + 2] = 200; // blue value
      pixels[index + 3] = 255; // alpha value

      xoff += inc;
    }
    yoff +=inc;
  }
  updatePixels();
  
  zoff +=zinc;
  //noLoop();
}
