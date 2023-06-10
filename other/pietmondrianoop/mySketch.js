let rectangles =[];

function setup() {
  createCanvas(1080, 1080);
	background(0);
	colorMode(HSB);
	rectMode(CENTER);
	

    let x = width/2;
    let y = height/2;
    let w = 850;
		let h = 850;
		let rectStart = new Rectangle(x,y,w,h)
  rectangles.push(rectStart) ;
	
	for (let i=rectangles.length-1; i >= 0; i--){
		rectangles[i].show();
	}

	//const { x, y } = coordinates;

//for (var i = squares.length - 1; i >= 0; i--) {
//const square = squares[i];

//if (x && x > square.x && x < square.x + square.width) {
//squares.splice(i, 1);
//splitOnX(square, x);
//}

//if (y && y > square.y && y < square.y + square.height) {
//squares.splice(i, 1);
//splitOnY(square, y);
//}
//}
	
	
	
}


function keyPressed() {
  if (key === 's') {
    save('vicsekfractal.png'); 
  }
}

