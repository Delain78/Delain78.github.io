let rectangles = [];
let step = 3;

function setup() {
  createCanvas(1080, 1080);
  background(100);
  colorMode(HSB);

  let x = 115;
  let y = 115;
  let w = 850;
  let h = 850;
  push();
  translate(115, 115);
  let rectStart = new Rectangle(x, y, w, h);
  rectangles.push(rectStart);
  pop();

  //split vertical
  for (let i = rectangles.length - 1; i >= 0; i--) { //haak 1
    let newX = rectangles[i].x;
    let newY = rectangles[i].y;
    let newW = rectangles[i].w;
    let newH = rectangles[i].h;

    rectangles.splice(i, 1);

    for (let j = 1; j < step; j++) { //haak 2
      let rectAX = new Rectangle(newX, newY, (newW * j) / step, newH);
      let rectBX = new Rectangle(newX + (newW * j) / step, newY, (newW * (step - j)) / step,newH);
      rectangles.push(rectAX);
      rectangles.push(rectBX);
    } //haak 2
  } // haak 1 

  //split horizontal
 for (let i = rectangles.length - 1; i >= 1; i--) {//haak 1b
    let newX = rectangles[i].x;
    let newY = rectangles[i].y;
    let newW = rectangles[i].w;
    let newH = rectangles[i].h;
		
	 if (newH == 850){ // haak 2b
		 rectangles.splice(i, 1);
		 
		for (let j = 1; j < step; j++) { //haak 3b
     // split horizontal
      let rectAY = new Rectangle(newX, newY, newW, (newH * j) / step);
      let rectBY = new Rectangle(newX, newY + (newH * j) / step,newW,(newH * (step - j)) / step);
			 {
      rectangles.push(rectAY);
      rectangles.push(rectBY);
			}
   } //haak 3b
	 } // haak 2b
  } // haak 1b
}

function draw() {
  for (let i = rectangles.length - 1; i >= 0; i--) {
    rectangles[i].show();
  }
}

function keyPressed() {
  if (key === "s") {
    save("mondrian.png");
  }
}
