
//based on the coding train youtubes tutorial on it.
//https://en.wikipedia.org/wiki/Hilbert_curve
//http://blog.marcinchwedczuk.pl/iterative-algorithm-for-drawing-hilbert-curve

const order = 6;
let N;
let total;

let path = [];

let counter = 0;

function setup() {
	createCanvas (1080,1080);
	colorMode(HSB,360,100,100);
	background(0);
	
 	N = int(pow(2, order));
  total = N * N;
	
	for (let i = 0; i < total; i++) {
 	  path[i] = hilbert(i);
		let len = width / N;
  	path[i].mult(len);
		path[i].add(len/2, len/2);
	}
}

function draw(){
background(0);

stroke(255);
strokeWeight(4);
noFill(); 
//beginShape();
  for (let i = 1; i < total; i++) {
    let h = map(i, 0, path.length, 90, 240);
    stroke(h, 100, 100);
    line(path[i].x, path[i].y, path[i - 1].x, path[i - 1].y);
  }
  //endShape();
	
//strokeWeight(1);
//for (let i = 0; i < path.length; i++){
 	//point(path[i].x, path[i].y);
	//text (i, path[i].x + 5, path[i].y);
//}		
}

function hilbert(i){
const points = [
    new p5.Vector(0, 0),
    new p5.Vector(0, 1),
    new p5.Vector(1, 1),
    new p5.Vector(1, 0)
  ];
	
	let index = i & 3;
	let v = points[index];
	
  for (let j = 1; j < order; j++) {
		 i = i >>> 2;
    index = i & 3;
    let len = pow(2, j);
		
    if (index == 0) {
      let temp = v.x;
      v.x = v.y;
      v.y = temp;
		}else if (index == 1){
	 		v.y+= len;
		} else if (index ==2){
	  	v.x+= len;
			v.y+= len;		
		}else if (index == 3){
			let temp = len - 1 - v.x;
      v.x = len - 1 - v.y;
      v.y = temp;
      v.x += len;
		}
	}
	return v;

}

function keyPressed() {
  if (key === 's') {
    save('watercolorbackground.png'); 
  }
}


