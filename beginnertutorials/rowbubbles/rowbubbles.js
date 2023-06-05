function setup() {
  createCanvas (1080, 1080);
  colorMode (HSB);
  background(210,0,90);
}

function draw() {
  for (let x = 100; x < width-100; x += 50) {
     balloon (x)
  }
  noLoop();

 save ("rowbubbles.png");
}

 

function balloon (x){
  
  stroke (x/3, 90, 60, 0.5);
  fill (x/3, 90, 90, 0.5);
  circle (x, 540, x/7);  
  
}
