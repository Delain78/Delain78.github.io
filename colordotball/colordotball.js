function setup() {

  createCanvas (1080, 1080);
  colorMode(HSB);
  background (210, 0, 0); //greyscale --> any hue, 0 sat, 100 brightness white --> 0 brightness black
}

function draw() {
  for (let x = 100; x < width-100; x += 15) {
    for (let y = 100; y < height -100; y +=15) {

      my_blob (x, y);
    }
  }

  noLoop();

  save ("colordotball.png");
}

function my_blob(x, y) {
  var d = dist (x, y, 540, 540);
  var hue = ((x +y) / 2) % 360 ;

  if (d < 400) {
    stroke (hue, 50, 60);
    fill (hue, 50, 100);
    circle (x, y, 10);
  }
}
