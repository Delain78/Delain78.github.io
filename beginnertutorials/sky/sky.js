function setup() {

  createCanvas (1080, 1080);
  colorMode(HSB);
  background (210, 0, 90); //greyscale --> any hue, 0 sat, 100 brightness white --> 0 brightness black
}

function draw() {
  for (let x = 100; x < width-100; x += 1) {
    for (let y = 100; y < width-100; y += 1) {
      horizon(x,y);
    }
  }

  noLoop();

 save ("sky.png");
}

function horizon(x,y) {

   var sat = 100 * noise (x/100,y/100);
  
  stroke (220, sat, 100);
  
  point(x, y);
  
  
}
