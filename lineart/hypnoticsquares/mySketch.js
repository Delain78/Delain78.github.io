// based on cubic disarray of William Kolomyjec

let sizeStart;
let finalSize = 3;
let totalSteps = 5;

function setup() {
	createCanvas(500, 500);
	background(175);
	colorMode(HSB);
	 
	sizeStart = 100;
	
//for (let x = 0; x < width; x +=s ){
	//for (let y =0; y < height; y +=s){
			drawSquare(0,0,sizeStart, 1, 1, totalSteps);
	//}
	//}
}

function drawSquare(x,y,size, xMove, yMove, steps){
	let h = 120 + y/9;
	stroke(h,100,100);
	strokeWeight(3);
	noFill();

  square(x, y, size);

  if (steps >= 0 ) {
    let newS = sizeStart * (steps / totalSteps) + finalSize;
    let halfway = ((size - newS)) / 2;
    let tempX = x + halfway;
    let tempY = y + halfway;
    let newX = tempX - ((x - tempX) / (steps + 2)) * xMove;
    let newY = tempY - ((y - tempY) / (steps + 2)) * yMove;
    drawSquare(newX, newY, newS, xMove, yMove, steps - 1);
  }
	
	// example
	//rect(((s *1/5)-20)/2,((s * 1/5)-20)/2,s * 4/5 + 20, s * 4/5 + 20);
	
}


function keyPressed() {
  if (key === 's') {
    save('cubicdisarray.png'); 
  }
}
