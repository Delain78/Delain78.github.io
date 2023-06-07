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

for (let j = 1; j < step; j ++){
	for (let i = 1; i <step; i ++){
		let xoff = 0;
		//if (j % 2 == 1){
		//xoff = space/2;
		//}
		let x = space * i + xoff;
		let y = space * j;
		point(x,y);
		points.push({x, y});
		let pos = points.length - 1;
		 if(pos > step-1 && j % 2 == 0  && i >= 2){
    		triangle(points[pos].x, points[pos].y, 
								points[pos-(step-1)].x, points[pos-(step-1)].y,
								points[pos-step].x, points[pos-step].y
								)
				triangle(points[pos].x, points[pos].y, 
								points[pos-1].x, points[pos-1].y,
								points[pos-step].x, points[pos-step].y
								)
	}

	}
}		
		
}
