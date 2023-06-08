// based on cubic disarray of William Kolomyjec

let s = 400; 

function setup() {
	createCanvas(400, 400);
	background(175);
	colorMode(HSB);
	
for (let x = 0; x < width; x +=s ){
	for (let y =0; y < height; y +=s){
			drawRect(x,y);
	}
	}
}

function drawRect(x,y){
	let h = 120 + y/9;
	push();
	translate (x,y);
	stroke(h,100,100);
	strokeWeight(4);
	noFill();
	rect(0,0,s,s);
	pop();
}



function keyPressed() {
  if (key === 's') {
    save('cubicdisarray.png'); 
  }
}
