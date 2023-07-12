let zoff = 0;

let inc = 0.01;

function setup() {
  createCanvas(640, 240);
}

function draw() {
  let yoff = 0;

  loadPixels();
  for (let y = 0; y < height; y++) {
    let xoff = 0;
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      noiseDetail(4,0.4);
      let r = noise(xoff,yoff, zoff) * 255;
      pixels[index + 0] = r; // red value
      pixels[index + 1] = r; // green value
      pixels[index + 2] = 200; // blue value
      pixels[index + 3] = 255; // alpha value

      xoff += inc;
    }
    yoff +=inc;
  }
  updatePixels();

 zoff +=inc;
}
