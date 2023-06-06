let space;
let points =[];
let step = 7;

function setup() {
	createCanvas(400,400);
	background(220);
	strokeWeight(4);
	
let space = width/step;
for (let j = 0.5; j < step; j ++){
	if (j % 2==0.5){
		for (let i = 1; i <step; i ++){
			let x = space * i;
			let y = space * j;
			point(x,y);
			points.push (createVector(x,y));
		}
	} else if (j % 2==1.5){
		for (let i = 0.5; i <step; i ++){
			let x = space * i;
			let y = space * j;
			point(x,y);
			points.push (createVector(x,y));
		}
	}
	}
}

