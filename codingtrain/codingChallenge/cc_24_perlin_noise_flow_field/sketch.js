let inc = 0.1;
let scl = 10 ;
let cols, rows;

let zoff = 0;

let fr;

let particles = [];

let flowfield;

function setup(){
 	createCanvas (600,400);
	colorMode(HSB);
	cols = floor(width/scl);
	rows = floor(height/scl);
	fr = createP('');
	
	flowfield = new Array (cols*rows);
	
	for (let i = 0; i < 300; i++){
	 particles[i] = new Particle();
	}
	
	background (210,0,0);
}

function draw (){

	let yoff = 0;

	for (let y= 0; y < rows; y++){
	let xoff = 0;
		for (let x= 0; x < cols; x++){
			let index = x + y * cols;
			let angle = noise(xoff,yoff,zoff) * TWO_PI * 4 ;
			let v = p5.Vector.fromAngle(angle);
			v.setMag (1);
			flowfield[index] = v;
			xoff += inc;
			stroke(0,50);
			/*push();
			translate (x * scl, y * scl);
			rotate(v.heading());
			strokeWeight(1);
			line(0,0,scl,0)
			
			pop();*/
		}
		yoff += inc;
		
		zoff += 0.0003;
	}
	
	for (let i = 0; i < particles.length; i++){
		particles[i].follow(flowfield);
		particles[i].update();
		particles[i].edges();
		particles[i].show();
	}
	
	fr.html(floor(frameRate()))
	//noLoop();
	
}

function keyPressed() {
  if (key === 's') {
    save('perlinNoiseFlowField.png'); 
  }
}