function setup() {
  createCanvas (1080, 1080);
  colorMode (HSB);
  background(210, 0, 90);
  rectMode (CENTER);
}


function draw() {
  
  strokeWeight(1)
    my_pattern(540, 540, 600)

    noLoop();

  //save ("randompatterninpattern.png");
}


function my_pattern(x, y, s) {

  
  var hue = 150 + (dist (x, y, 540, 540)/4);
  fill (hue, 100, 90, 0.3);

  square (x, y, s);
  
   var randNum = random (0,10);
   
  if (s >10) {
    if (randNum < 5) {
       my_pattern (x - s/4, y - s/4, s/2)
       my_pattern  (x + s/4, y + s/4, s/2)
    }else{
        my_pattern (x + s/4, y - s/4, s/2)
        my_pattern (x - s/4, y + s/4, s/2)
    }
  }
}
