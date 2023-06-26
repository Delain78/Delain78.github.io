class Tree {
  constructor(x1,y1,x2,y2,x3,y3,x4,y4,b) {
   	this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.x3 = x3;
		this.y3 = y3;
		this.x4 = x4;
		this.y4 = y4;
		this.b = b;
  }

show(){
	strokeWeight(4);
  stroke(130, 100,this.b, 0.8);
  strokeCap(ROUND);
  strokeJoin(ROUND);
	noFill();
	for(let i = 0; i <22 ; i++){
		let newX1 = this.x1 - i * 5; //stays the same
		let newY1 = this.y1 + i * 27; //stays the same
    let newY2 = this.y2 + i * 30;
		let newX3 = this.x3 + i * 5; //stays the same
    let newY3 = this.y3 + i * 27; // stays the same
    let newY4 = this.y4 + i * 30;
		quad (newX1, newY1, this.x2, newY2, newX3, newY3, this.x4, newY4);
	}
	line (this.x2, this.y2 -40, this.x2, this.y2 + 700);
}

}

