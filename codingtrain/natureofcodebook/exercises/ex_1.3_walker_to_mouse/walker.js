class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    stroke(0);
    point(this.x, this.y);
  }

  step() {
    let r = random(1);
    if (r < 0.125) {
      this.x++;
    } else if (r < 0.25) {
      this.x--;
    } else if (r < 0.37) {
      this.y++;
    } else if (r < 0.5) {
      this.y--;
    } else {
      if (mouseX <= this.x && mouseY <= this.y) {
        this.x--;
        this.y--;
      } else if (mouseX <= this.x && mouseY > this.y) {
        this.x--;
        this.y++;
       } else if (mouseX > this.x && mouseY <= this.y) {
        this.x++;
        this.y--;
       }else if (mouseX > this.x && mouseY > this.y) {
        this.x++;
        this.y++;
       }
    }
  }
}
