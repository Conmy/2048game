
var w = 600;
var h = 600;

var board;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function setup () {
	createCanvas(w+10, h+10);
	board = new Board(w, h, 3, 3);
	board.addTile(0, 0, 2);
	board.addTile(0, 2, 2);
	board.addTile(1, 2, 4);
	//board.addTile(this.getRandomInt(0, 3), this.getRandomInt(0, 3), 16);
}

function draw () {
	// background(0);
	board.show();
}

function keyPressed () {
	if (keyCode === RIGHT_ARROW) {
		board.moveRight();
	}
	else if (keyCode === LEFT_ARROW) {
		board.moveLeft();
	}
	else if (keyCode === UP_ARROW) {
		board.moveUp();
	}
	else if (keyCode === DOWN_ARROW) {
		board.moveDown();
	}
}