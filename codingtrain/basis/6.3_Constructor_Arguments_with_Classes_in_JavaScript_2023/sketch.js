let bubble1, bubble2;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(200,200,40);
  bubble2 = new Bubble(400,200,20);
}

function draw() {
  background(0);
  bubble1.show();
  bubble1.bubblemove();
  bubble2.show();
  bubble2.bubblemove();
}



//function bubblemove(){
// bubble.x = bubble.x + random (-5,5);
// bubble.y = bubble.y + random(-5,5);
//}

//function show(){

// stroke (255);
// strokeWeight(4);
// noFill();
// ellipse (bubble.x, bubble.y, 24,24)
//}
