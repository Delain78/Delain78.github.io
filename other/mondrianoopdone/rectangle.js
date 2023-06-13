class Rectangle {
  constructor(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.w = w;
		this.h = h;
  }

  show() {
		let white = '#F2F5F1';
		let colors = ['#00ffff', '#0066ff', '#00ff00']
		
    stroke(255);
    strokeWeight(8);
		if (random () <0.25){
    fill(colors[floor(random(3))]);
		} else{
		fill (180,0,0)
		}
   	rect(this.x, this.y, this.w, this.h);
  }
	
}



