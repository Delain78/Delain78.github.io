function setup() {

  createCanvas (1080, 1080);
  colorMode(HSB);
  background (210, 0, 0); //greyscale --> any hue, 0 sat, 100 brightness white --> 0 brightness black
}

function draw() {
  for (let x = -25; x < 550; x += 1) {
    for (let y = 325; y < 800; y += 1) {
      alien_landscape(x, y);
    }
  }

  noLoop();

  save ("alienlandscape.png");
}

function alien_landscape(x, y) {

  var x2 = x + (y/2);
  var h = 200 * noise (x/200, y/200);
  h += 30 * noise (x/30, y/20);
  var y2 = y - h + 50;

  noStroke();
  
  var hue =  (h + 50 + 360) % 360;
  var brightness = h * 0.75;

  fill (hue, 80, brightness, 0.3);

  circle (x2, y2, 2);
}
