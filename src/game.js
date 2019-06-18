class Game {

  drawGrid() {

    var size = 50;

    for (var x = 0; x < innerWidth; x += size) {
      for (var y = 0; y < innerHeight; y += size) {
        fill('white');
        rect(x, y, size, size);
      }
    }


  }
}

class Player {

  constructor(col, row, size, color) {
    this.col = col;
    this.row = row;
    this.size = size;
    this.color = color;
    this.trace = Array();
  }

  moveUp() {
    this.row -= 1;
    this.trace.push(Array(this.col * this.size, this.row * this.size));
  }

  moveDown() {
    this.row += 1;
    this.trace.push(Array(this.col * this.size, this.row * this.size));
  }

  moveRight() {
    this.col += 1;
    this.trace.push(Array(this.col * this.size, this.row * this.size));
  }

  moveLeft() {
    this.col -= 1;
    this.trace.push(Array(this.col * this.size, this.row * this.size));
  }

  draw() {
    this.trace.push(Array(this.col * this.size, this.row * this.size));
    for (var i = 0; i < this.trace.length; i++ ) {
      fill(this.color);
      rect(this.trace[i][0], this.trace[i][1], this.size, this.size);
    }
    image(avatar, this.col * this.size, this.row * this.size);
  }

}