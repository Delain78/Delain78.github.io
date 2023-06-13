class Rectangle {
  constructor(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.w = w;
		this.h = h;
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
   	rect(this.x, this.y, this.w, this.h);
  }
	
}



