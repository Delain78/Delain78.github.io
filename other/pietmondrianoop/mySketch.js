let rectangles =[];
let step = 6;

function setup() {
  createCanvas(1080, 1080);
	background(100);
	colorMode(HSB);
	
		let x = 115;
    let y = 115;
    let w = 850;
		let h = 850;
		let frame = 115
		push()
		translate (115,115)
		let rectStart = new Rectangle(x,y,w,h)
 		 rectangles.push(rectStart) 	
		pop ()

	//split on w/2, but wat happens when you split w/4
	for (let i=rectangles.length-1; i >= 0; i--){
			rectangles.splice(i,1)
			for (let j = 1; j < step; j ++){
			//split vertical
				let rectAX = new Rectangle (x,y,w * j/step,h)
				let rectBX = new Rectangle (x + w * j/step,y,w * (step-j)/step,h)
				rectangles.push(rectAX) 
				rectangles.push(rectBX) 
	
			// split horizontal
				let rectAY = new Rectangle (x,y,w,h * j/step)
				let rectBY = new Rectangle (x,y + h * j/step,w,h * (step - j)/step)
				rectangles.push(rectAY) 
				rectangles.push(rectBY) 
			}
	}
}

	
function draw(){
	
	for (let i=rectangles.length-1; i >= 0; i--){
		rectangles[i].show();
	}

}

function keyPressed() {
  if (key === 's') {
    save('vicsekfractal.png'); 
  }
}
