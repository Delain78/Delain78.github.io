let bubbles =[];
 
function setup() {
  createCanvas(600, 400);
  for (i=0; i < 10; i++){
  }
}

function mouseDragged (){
  let r = random (10,50);
  let b = new Bubble(mouseX, mouseY,r);
  bubbles.push(b);
  
}

function draw() {
  background(0);
   for (i=0; i < bubbles.length; i++){
  bubbles[i].show();
  bubbles[i].bubblemove();
  }
  
}

