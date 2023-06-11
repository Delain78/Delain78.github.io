let rectangles =[];

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
	
	for (let i=rectangles.length-1; i >= 0; i--){
		if (w == 850){
			rectangles.splice(i,1)
			let rectAX = new Rectangle (x,y,w/2,h)
			let rectBX = new Rectangle (x + w/2,y,w/2,h)
			rectangles.push(rectAX) 
			rectangles.push(rectBX) 
		}		
		if (h == 850){
			rectangles.splice(i,1)
			let rectAY = new Rectangle (x,y,w,h/2)
			let rectBY = new Rectangle (x,y + h/2,w,h/2)
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

