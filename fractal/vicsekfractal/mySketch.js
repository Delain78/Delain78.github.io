function setup() {
 createCanvas(1080, 1080);
	colorMode(HSB);
	rectMode(CENTER);
 noStroke();
}

function draw() {
 background(210,0,0);
 	vfractal(width / 2, height / 2, 850, 4); //midden
	noLoop();
}

function vfractal(cx, cy, r, depth) { //r = size
	if (depth > 0){
	vfractal(cx				, cy - r/3	, r/3, depth-1); //boven 
 	vfractal(cx - r/3	, cy				, r/3, depth-1); //links
 	vfractal(cx				, cy				, r/3, depth-1); //midden
 	vfractal(cx + r/3	, cy				, r/3, depth-1); //rechts
	vfractal(cx				, cy + r/3	, r/3	, depth-1); // onder
	}else{
	let d = dist(width/2, height/2, cx, cy);
	const hue =150 + d/6;
  const s = 85;
  const b = 85;
  const c = color(hue, s, b);
  stroke(hue, s, b-40);
	fill(c);
	rect(cx, cy, r, r);
	}
}

function keyPressed() {
  if (key === 's') {
    save('vicsekfractal.png'); 
  }
}

