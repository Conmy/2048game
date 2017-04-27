
var w = 600;
var h = 600;

var board;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function setup () {
	var canvas = createCanvas(w+10, h+10);
	board = new Board(w, h, 3, 3);
	board.addTile(0, 0, 2);
	board.addTile(0, 2, 2);
	board.addTile(1, 2, 4);
	
	// Set the parent element of the game. This will allow to add other
	// elements of the web page around the game.
	canvas.parent("content");
}

function draw () {
	// background(0);
	board.show();
}

function keyPressed () {
	if (keyCode === RIGHT_ARROW) {
		board.moveRight();
		var pos = board.getEmptySquarePosition();
		board.addTile(pos[0], pos[1], board.getMaxTileValue());
	}
	else if (keyCode === LEFT_ARROW) {
		board.moveLeft();
		var pos = board.getEmptySquarePosition();
		board.addTile(pos[0], pos[1], board.getMaxTileValue());
	}
	else if (keyCode === UP_ARROW) {
		board.moveUp();
		var pos = board.getEmptySquarePosition();
		board.addTile(pos[0], pos[1], board.getMaxTileValue());
	}
	else if (keyCode === DOWN_ARROW) {
		board.moveDown();
		var pos = board.getEmptySquarePosition();
		board.addTile(pos[0], pos[1], board.getMaxTileValue());
	}
}