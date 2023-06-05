function setup() {
  createCanvas (1080, 1080);
  colorMode (HSB);
  background(210,0,100);
}

function draw() {
  for (let i = 0; i < 350; i ++)
  {
    blob();
  }
   noLoop();
   save ("sizeandcolordependingonybubbles.png")
}
 

function blob () {
  
  var x = random (100, 980);
  var y = random (100, 980);
  var s = 50 + (y/30);
  
  var hue = 120 + (y/10) ;
  
  stroke (hue , 85 , 60, 0.3);
  fill (hue , 85 , 90, 0.3);
  circle (x , y, s);
  
}
