function setup() {

  createCanvas (1080, 1080);
  colorMode(HSB);
  background (210, 0, 0); //greyscale --> any hue, 0 sat, 100 brightness white --> 0 brightness black
}

function draw() {
  for (let x = 100; x < width-100; x += 25) {
      my_blob (x);
  }

  noLoop();

 save ("wavysinfunction.png");
}

function my_blob(x) {

  var hue = map (x, 100, 980 , 0, 360);

  var shift = cos(3*x)* 200;
  
  stroke (hue, 60, 60);
  fill (hue, 90, 100);
  
  rect( x, 540, 5, - shift);
  rect ( x, 540, 3, - shift * 1.3);
  
  rect ( x, 540, 1, shift * 1.1);
  
  circle (x, 540 + shift , 10);
}
