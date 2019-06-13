function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

class Player {
  constructor(col, row, p1 = false) {
    this.col = col;
    this.row = row;
    this.p1 = p1; // true / false
    this.color = getRandomColor();
  }

  moveUp() {
    if (this.row > 0) this.row--; // this.row = this.row - 1;
  }

  moveDown() {
    if (this.row < HEIGHT / SQUARE_SIDE - 1) this.row++;
  }

  moveLeft() {
    if (this.col > 0) this.col--;
  }

  moveRight() {
    if (this.col < WIDTH / SQUARE_SIDE - 1) this.col++;
  }

  draw() {
    image(
      this.img,
      (this.col * WIDTH) / 10,
      (this.row * HEIGHT) / 10,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
  }

  setup(squares) {
    if (this.p1) {
      this.img = loadImage("assets/character-down.png");
    } else {
      this.img = loadImage("assets/mario.ico");
    }
    this.setVisited(squares);
  }

  setVisited(squares) {
    squares[this.row][this.col] = this.color;
  }

  keyPressed(squares) {
    this.setVisited(squares);

    if (this.p1) {
      if (keyCode === LEFT_ARROW) this.moveLeft();
      if (keyCode === RIGHT_ARROW) this.moveRight();
      if (keyCode === DOWN_ARROW) this.moveDown();
      if (keyCode === UP_ARROW) this.moveUp();
    } else {
      if (keyCode === 65) this.moveLeft();
      if (keyCode === 68) this.moveRight();
      if (keyCode === 87) this.moveUp();
      if (keyCode === 83) this.moveDown();
    }
  }
}
