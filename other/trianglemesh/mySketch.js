// based on steve's makerspace tutorial on youtube

let space;
let points =[];
let pos = [];
let step = 14;

function setup() {
	createCanvas(1080,1080);
	background(220);
	strokeWeight(4);
	
let space = width/step;

// make triangle point grid;
for (let j = 1; j < step; j ++){
	for (let i = 0.5; i <step-1; i ++){
		let xoff = 0;
		if (j % 2 == 1){
		xoff = space/2;
		}
		let x = space * i + xoff;
		let y = space * j;
		point(x,y)
		points.push (createVector(x,y));
	}
}	
}

