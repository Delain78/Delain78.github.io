function setup() {
  createCanvas (1080, 1080);
  colorMode (HSB);
  background(210,0,90);
}

function draw() {
  for (let x = 100; x < width-100; x += 100) {
    noFill();
    strokeWeight(5);
     my_ring (x)
  }
  noLoop();

 save ("circlesincircles.png");
}

 

function my_ring (x){
  
  stroke (x/3, 90, 60, 0.5);
  circle (540, 540, x);  
  
}
