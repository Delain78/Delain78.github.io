function setup() {

  createCanvas (1080, 1080);
  colorMode(HSB);
  background (210, 0, 0); //greyscale --> any hue, 0 sat, 100 brightness white --> 0 brightness black
}

function draw() {
  for (let x = 100; x < width-100; x += 25) {
    for (let y = 0; y < height -100; y +=25) {

      my_blob (x, y);
    }
  }

  noLoop();

 save ("wavycolor.png");
}

function my_blob(x, y) {

  var hue = map (x, 100, 980 , 0, 360);
  var saturation = map (y, 0, 400, 100, 0);
  var alpha = map (y, 0, 400, 1, 0);

  var size = map (y, 0, 400, 20, 1);

  stroke (hue, saturation, 60, alpha);
  fill (hue, saturation, 100, alpha);

  var shift = sin (2*x)* 50;

  circle (x, 540-y + shift, size);
  circle (x, 540+y + shift, size);
}
