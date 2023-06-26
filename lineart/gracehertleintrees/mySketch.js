let trees = [];

count = 0;

function setup() {
  createCanvas(1080, 1080);
	colorMode(HSB)
  background(180,0,0);
 
	// loop for trees
		for (i=0; i <  40; i++){
			let x = random (width);
			let y = random (300,400);
			let x1 = x;
			let y1 = y;
			let x2 = x + 10;
			let y2 = y + 10;
			let x3 = x + 20;
			let y3 = y;
			let x4 = x + 10;
			let y4 = y + 20;
			let b = 100
			if ( i < 10){
			b = 40;
			} else if (i >= 10 && i <20){
			b = 60;
			} else if (i >= 20 && i < 30) {
			 b = 80;
			} else {
			 b = 100
			}

  		trees[i] = new Tree(x1,y1,x2,y2,x3,y3,x4,y4,b);
	 }
	
for (i=0; i < trees.length; i++){
  trees[i].show();
  }	
}

function keyPressed() {
  if (key === 's') {
    save('gracehertleintrees.png');
  }
}


