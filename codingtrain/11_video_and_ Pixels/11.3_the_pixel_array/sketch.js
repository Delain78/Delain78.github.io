function setup() {
  createCanvas(320, 240);
}

function draw() {
  let yoff = 0;

  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      pixels[index + 0] = x; // red value
      pixels[index + 1] = 0; // green value
      pixels[index + 2] = y; // blue value
      pixels[index + 3] = 255; // alpha value

    }
  }
  updatePixels();

  noLoop();
}
