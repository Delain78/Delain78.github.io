let bubbles =[];

function setup() {
  createCanvas(600, 400);
  for (i=0; i < 10; i++){
    let x = random (width);
    let y = random (height);
    let r = random (10,40);
  bubbles[i] = new Bubble(x,y,r);
  }
}

function draw() {
  background(0);
  
  // when counting does not matter
   for (let bubble of bubbles){ //Bubble -> class, bubbles --> array, bubble -->                                   element
     bubble.bubblemove();
     bubble.show();
   }
  
  // --> when counting matters
   //for (i=0; i < bubbles.length; i++){
  //bubbles[i].show();
  //bubbles[i].bubblemove();
  //}
  
}

