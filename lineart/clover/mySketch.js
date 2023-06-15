// background
let bg;


function setup() {
  createCanvas(1080, 1080);
	noStroke();
	
	colorMode(HSB);
  background(210, 0, 0);
	
	clover(PI * 1/4, width/2 + 175, height/2 - 175);
	clover(PI * 3/4, width/2 + 175, height/2 + 175);
	clover(PI * 5/4, width/2 - 175, height/2 + 175);
	clover(PI * 7/4, width/2 - 175, height/2 - 175);

}

function clover(a, w, h) {
	for (let j = 0; j<15 ; j++){
		push()
		translate (w, h)
		rotate (a);
 	 beginShape();
  	for (i = 0; i < TWO_PI; i += 0.1) {
		let r = 15 - j;
    let x = r * 16 * pow(sin(i),3) ;
    let y = -r * (13*cos(i) -5*cos(2*i)-2*cos(3*i) - cos(4*i)) ;
		strokeWeight(4)
		stroke(120, 100, 80);
		fill(120, 100, 50, 0.4);
   	curveVertex(x, y);
	 }
	endShape(CLOSE);
	pop();
	}
}

function keyPressed() {
  if (key === 's') {
    save('clover.png'); 
  }
}





