function setup() {
  createCanvas (1080, 1080);
  colorMode (HSB);
  background(210, 0, 90);
}


function draw() {
  
 
  strokeWeight(1)
    my_pattern(540, 540, 400)

    noLoop();

  //save ("splashbubbles.png");
}


function my_pattern(x, y, s) {
  
  var hue = 150 + (dist (x,y,540,540)/5);
  fill (hue , 100, 90, 0.3);

  circle (x, y, s);
  
  if (s >30){
    my_pattern (x + s/2, y, s/2)//to the right
    my_pattern (x - s/2, y, s/2)//to the left
    my_pattern (x, y - s/2, s/2)//to the top
    my_pattern (x, y + s/2, s/2)//to the bottom
  }
}
