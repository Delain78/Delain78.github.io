// based on steve's makerspace tutorial on youtube

let space = 70;
let frame = 30;
let points = [];
let vary = 8;
let buff = 0.3;

function setup() {
	createCanvas(400,400);
	background(220);
	strokeWeight(4);
	
	let buff2 = space * buff;
	let wNumb = floor((width-frame *2)/space) + 1;
	let extraW = round(width-wNumb*space-frame*2); 
	let extraH = round(height-wNumb*space-frame*2);
	for (y = frame + extraH; y < height-frame; y +=space){
		for (x = frame + extraW; x < width -frame; x +=space){
			points.push (createVector(x + random(-vary,vary),y + random (-vary,vary)));
			if (y > space + frame -1 && x > space + frame -1){
			let pos = points.length -1;
			fill(random(255), random(255), random(255));
			quad(points[pos].x,
          points[pos].y,
          points[pos - 1].x,
          points[pos - 1].y,
          points[pos - wNumb - 1].x,
          points[pos - wNumb - 1].y,
          points[pos - wNumb].x,
          points[pos - wNumb].y)
			}
		}
	}
}

