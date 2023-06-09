// based on cubic disarray of William Kolomyjec

let sizeStart;
let finalSize = 3;
let totalSteps;
let offset = 90 // 180/2

function setup() {
	createCanvas(1080, 1080);
	background(0);
	colorMode(HSB);
	 
	sizeStart = 100;

	
for (let x = offset; x < width - offset; x +=sizeStart ){
	for (let y =offset; y < height - offset; y +=sizeStart){
			let startSteps = [3,4,5];
			totalSteps = random(startSteps);
			let directions = [-1,0,1];
			let xDirection = random(directions) ;
			let yDirection = random(directions);
			drawSquare(x,y,sizeStart, xDirection, yDirection, totalSteps);
	}
}
}

function drawSquare(x,y,size, xMove, yMove, steps){
	let h = 120 + y/9;
	stroke(h,100,100);
	strokeWeight(3);
	fill(h,100,100,0.1);
	//noFill();

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
    save('hypnoticsqaures.png'); 
  }
}
