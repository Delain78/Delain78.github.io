
let steps = 40;

function setup() {
	createCanvas(1080, 1080);
	background(0);
	colorMode(HSB);
	
	for (let j = 0; j < steps; j++){
	let y = map(j, 0, steps, 80, height-40);
		beginShape();
			for (let i = 0; i < steps; i++){
				let x = map(i, 0, steps, 80, width-80);
				let d = dist(x, y, width/2, y);
				let variance = max ((width/2 - d)/5 -50,0); //max picks the number that is the heightst
				let r = lerp (0, variance, random()); // random no agrument, returns number between 0 and 1 (not including);
				let h = 120 + y/10;
					stroke (h,100,100);
					strokeWeight(4);
					fill(h,0,0);
				curveVertex(x, y - r);
			}
		endShape();
	}
}



function keyPressed() {
  if (key === 's') {
    save('watercolorbackground.png'); 
  }
}
