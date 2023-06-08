// based on un, deux, trois of Vera Molnár

let s = 54;

function setup() {
	createCanvas(1080, 1080);
	background(0);
	colorMode(HSB);
	
	strokeWeight(8);
	
	for (let x = s * 2; x < width - s; x +=s ){
		for (let y = s; y < height-s; y +=s){
			if ( y <= 1/3 * height){
				push()
				translate(x,y + s/2);
				rotate(random(TWO_PI));
				stroke(150,100,100);
		 		line (0,-s/2,0,s/2);
				pop()
			} else if (y > 1/3* (height) && y <= 2/3 * (height-s)){
				push()
				translate(x,y + s/2);
				rotate(random(TWO_PI));
				stroke(180,100,100);
				line (-(s/4),-s/2,-(s/4), s/2);
				line ((s/4) ,-s/2,(s/4), s/2);
				pop();
			}else if (y > 2/3 * (height -s)){
				push()
				translate(x,y + s/2);
				rotate(random(TWO_PI));
				stroke(210,100,100);
				line (-(s/2),-s/2,-(s/2),s/2);
				line (0,-s/2,0,s/2);
				line ((s/2) ,-s/2,(s/2),s/2);
				pop();

			}
		}
	}
	
	
}


function keyPressed() {
  if (key === 's') {
    save('undeuxtroix.png'); 
  }
}
