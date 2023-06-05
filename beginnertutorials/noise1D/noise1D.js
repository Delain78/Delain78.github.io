function setup() {

  createCanvas (1080, 1080);
  colorMode(HSB);
  background (210, 0, 0); //greyscale --> any hue, 0 sat, 100 brightness white --> 0 brightness black
}

function draw() {
  for (let x = 100; x < width-100; x += 10) {
      horizon(x);
  }

  noLoop();
}

function horizon(x) {

  var hue = map (x, 100, 980 , 0, 360);

  var shift = 400 * noise (x/100);
  
  strokeWeight(5);
  stroke (hue, 90, 90);
  
 line (x, 540, x, 540 -shift);
  
  
}
