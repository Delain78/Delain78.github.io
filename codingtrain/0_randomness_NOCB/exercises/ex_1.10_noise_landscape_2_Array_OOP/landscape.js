function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

class Terrain {
  constructor(scl, w, h) {
    this.scl = scl; //size of cell
    this.h = h; //width and height terrain
    this.w = w;
    this.cols = w / scl; //number of rows and colums
    this.rows = h / scl;
    //using a 2D array to store all the height values
    this.z = make2DArray(this.cols, this.rows);
    this.zoff = 0;
  }

  update() {
    let xoff = 0;
    for (let i = 0; i < this.cols; i++) {
      let yoff = 0;
      for (let j = 0; j < this.rows; j++) {
        this.z[i][j] = map(noise(xoff, yoff, this.zoff), 0, 1, -120, 120);
        yoff += 0.1;
      }
      xoff += 0.1;
    }
    this.zoff += 0.01;
  }

  show() {
    for (let y = 0; y < this.rows - 1; y++) {
      beginShape(QUAD_STRIP);
      for (let x = 0; x < this.cols; x++) {
        stroke(0);
        let currentElevation = this.z[x][y];
        let currentShade = map(currentElevation, -120, 120, 0, 255);
        fill(currentShade, 255);
        vertex(
          x * this.scl - this.w / 2,
          y * this.scl - this.h / 2,
          this.z[x][y]
        );
        vertex(
          x * this.scl - this.w / 2,
          (y + 1) * this.scl - this.h / 2,
          this.z[x][y + 1]
        );
        //rect(x * this.scl - this.w / 2, y * this.scl - this.h / 2, this.scl, this.scl);
      }
      endShape();
    }
  }
}
