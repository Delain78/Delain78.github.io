let rectangles = []

function setup() {
  createCanvas(1080, 1080);
  background(0);
  colorMode(HSB);

  let x = 115;
  let y = 115;
  let w = 850;
  let h = 850;
	let step = 850/6;
  let rectStart = new Rectangle(x, y, w, h);
  rectangles.push(rectStart);
	
	for (let i = 0; i < 850; i += step) {
	splitSquaresWith({x : 115 + i})
	splitSquaresWith({y : 115 + i})
	}

	for (let i = rectangles.length - 1; i >= 0; i--) {
    rectangles[i].show();
  }
}

function splitSquaresWith({ x: cx, y: cy }) { 
		
	 for (let i = rectangles.length - 1; i >= 0; i--) {
		 let square = rectangles[i];
		 
		 if(cx && cx > square.x && cx < (square.x + square.w)){ 
			 if (random() > 0.5){
					// remove square
	  			rectangles.splice(i, 1);
					// 2 new squares based on the x coordinates given
					splitOnX(square, cx);
			 }
		}
		 
		 	if(cy && cy> square.y && cy < (square.y + square.h)){ 
				if (random() > 0.5){
					// remove square
	  			rectangles.splice(i, 1);
					// 2 new squares based on the x coordinates given
					splitOnY(square, cy); 
				}
			} 	 
	 }
}

function splitOnX(square, cx) { 
	
let newX = square.x;
let newY = square.y;
let newW = square.w - (square.w - cx + square.x);
let newH = square.h;
let squareA = new Rectangle(newX, newY, newW, newH);

let newX2 = cx;
let newY2 = square.y;
let newW2 = square.w - cx + square.x;
let newH2 = square.h;
let squareB = new Rectangle(newX2, newY2, newW2, newH2);
	
rectangles.push(squareA);
rectangles.push(squareB);
}

function splitOnY(square, cy) { 
let newX = square.x;
let newY = square.y;
let newW = square.w;
let newH = square.h - (square.h - cy + square.y)
let squareA = new Rectangle(newX, newY, newW, newH);

let newX2 = square.x;
let newY2 = cy;
let newW2 = square.w;
let newH2 = square.h - cy + square.y;
let squareB = new Rectangle(newX2, newY2, newW2, newH2);
	
rectangles.push(squareA);
rectangles.push(squareB);
}



function keyPressed() {
  if (key === "s") {
    save("mondrian.png");
  }
}
