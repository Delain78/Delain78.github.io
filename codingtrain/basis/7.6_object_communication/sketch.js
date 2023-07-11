let bubble1;
let bubble2;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble (200,200);
  bubble2 = new Bubble (400,200,100);
}

function draw() {
  background(0);
  

    //background (200,0,100);
  //}
  
  if (bubble1.intersects (bubble2)){
    background (200,0,100);
  }
  
  bubble1.show ();
  bubble1.bubblemove();
  bubble2.show();
  //bubble2.bubblemove();
  bubble2.x = mouseX;
  bubble2.y = mouseY;
}
