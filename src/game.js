class Game {
  constructor() {
    this.players = [];
    this.players.push(
      new Player(0, 0, true),
      new Player(WIDTH / SQUARE_SIDE - 1, HEIGHT / SQUARE_SIDE - 1)
    );

    this.squares = Array.from({ length: 10 }).map(_ =>
      Array.from({ length: 10 })
    );
  }

  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    for (let x = 0; x <= width; x += width / 10) {
      line(x, 0, x, height);
    }

    for (let y = 0; y <= height; y += height / 10) {
      line(0, y, width, y);
    }
  }

  setup() {
    this.players.forEach(player => {
      player.setup(this.squares);
    });
  }

  colorSquares() {
    this.squares.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (col) {
          fill(col);
        } else {
          fill(255);
        }
        rect(
          colIndex * SQUARE_SIDE,
          rowIndex * SQUARE_SIDE,
          width / 10,
          height / 10
        );
      });
    });
  }

  draw() {
    this.drawGrid();

    this.colorSquares();

    this.players.forEach(player => {
      player.draw();
    });
  }

  keyPressed() {
    this.players.forEach(player => {
      player.keyPressed(this.squares);
    });
  }
}
