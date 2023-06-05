function setup() {

  createCanvas (1080, 1080);
  colorMode(HSB);
  background (210, 0, 100); //greyscale --> any hue, 0 sat, 100 brightness white --> 0 brightness black
}

function draw() {
  for (let x = 200; x < width-200; x += 50) {
    for (let y = 200; y < height -200; y +=50) {

      my_blob (x, y);
    }
  }

  noLoop();

 save ("sqaurecolor.png");
}

function my_blob(x, y) {

  var hue = ((x +y) / 2) % 360 ;

  stroke (hue, 50, 60);
  fill (hue, 50, 100);

  circle (x, y, 50);

}
