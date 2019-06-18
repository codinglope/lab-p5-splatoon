const game = new Game();
const player1 = new Player(0, 0, 50, 'red');
const player2 = new Player(9, 9, 50, 'blue');


function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent("canvas");
  avatar = loadImage('assets/character-down.png');

}

function draw() {


   var size = 50;

  game.drawGrid();
  player1.draw();
  player2.draw();



} 

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player1.moveLeft();ww
  } else if (keyCode === RIGHT_ARROW) {
    player1.moveRight();
  } else if (keyCode === UP_ARROW) {
    player1.moveUp();
  } else if (keyCode === DOWN_ARROW) {
    player1.moveDown();
  }
  if (keyCode === 65) {
    player2.moveLeft();
  } else if (keyCode === 87) {
    player2.moveRight();
  } else if (keyCode === 83) {
    player2.moveUp();
  } else if (keyCode === 68) {
    player2.moveDown();
  }
  clear();
  player1.draw();
  player2.draw();
}
