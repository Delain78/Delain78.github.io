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

splitSquaresWith(coordinates) {
	 // Loops through the squares, and find if
  // one should be split
}
	
splitOnX(square, splitAt) {
// Create two new squares, based on
// splitting the given one at the
// x coordinate given
}

splitOnY(square, splitAt) {
// Create two new squares, based on
// splitting the given one at the
// y coordinate given
}
	
	
}



