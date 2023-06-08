// based on nature of code 3.5
// lisajous curve

let frames = 360;

function setup() {
  createCanvas(1080, 1080);
	angleMode(DEGREES);
	colorMode(HSB);
  background(0);
	
	translate(width/2, height/2)
	for (let angle = 0; angle < 360; angle +=3){
	let ampx = (0.7 * width) / 2;
  let ampy = (0.7 * height) / 2;
	let x = ampx * cos (angle);
 	let y = ampy * sin (angle *3);

 	let h = 150 + x/6;
  fill(h, 100, 100);
  stroke(h, 85, 85, 0.5);
  strokeWeight(4);
  line(0, 0, x, y);
  circle(x, y, 25)
	}	
}

function draw() {

}

function keyPressed() {
  if (key === 'm') {
    saveGif('mySketch', frames, { delay: 0, units: "frames" });
    }
}

function keyPressed() {
  if (key === 's') {
    save('harmonicmotion.png'); 
  }
}