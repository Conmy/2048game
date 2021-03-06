var expect = require('chai').expect;
var Board = require('./Board.js').Board;

describe('Board General Tests', function() {

	beforeEach(function() {
		board = new Board(500, 600, 5, 6);
	});

	it('Should be an object', function(done) {
		expect(board).to.be.a('object');
		done();
	});


	it('Should store input values without mutation.', function(done) {

		expect(board.x).to.equal(5);
		expect(board.y).to.equal(6);

		expect(board.width).to.equal(500);
		expect(board.height).to.equal(600);

		done();

	});

	it('Should start with nothing in the grid', function(done) {

		for (var j = 0; j < board.y; j++) {
			for (var i = 0; i < board.x; i++) {
				expect(board.grid[i][j]).to.equal(undefined);
			}
		}
		done();
	});
});

describe("Tile methods", function() {
	beforeEach(function() {
		board = new Board(500, 600, 5, 6);
	});

	it('Should be able to ADD a tile to a given grid position', function (done) {

		board.addTile(1, 1, 2);

		expect(board.grid[1][1]).to.equal(2);

		done();
	});

	it("Should be able to GET a tile value from a given grid position", function(done) {

		board.addTile(1, 2, 16);
		board.addTile(0, 3, 4);

		// Check that the value returned from the getTileValue is the same as the grid position.
		expect(board.getTileValue(1, 2)).to.equal(board.grid[1][2]);

		done();
	});

});

describe("moveLeft public function", function() {
	beforeEach(function() {
		board = new Board(500, 600, 5, 6);
	});

	it('Should move all tiles to the left when moveLeft is called.', function (done) {

		board.addTile(1, 0, 2);
		board.addTile(0, 1, 2);
		board.addTile(2, 1, 4);

		board.moveLeft();

		expect(board.grid[0][0]).to.equal(2);
		expect(board.grid[1][0]).to.equal(undefined);
		expect(board.grid[2][0]).to.equal(undefined);
		expect(board.grid[3][0]).to.equal(undefined);
		expect(board.grid[4][0]).to.equal(undefined);

		expect(board.grid[0][1]).to.equal(2);
		expect(board.grid[1][1]).to.equal(4);
		expect(board.grid[2][1]).to.equal(undefined);
		expect(board.grid[3][1]).to.equal(undefined);
		expect(board.grid[4][1]).to.equal(undefined);

		done();
	});

	it('Should combine and sum touching tiles with the same value after moving LEFT', function (done) {
		board.addTile(0, 1, 2);
		board.addTile(1, 1, 2);

		board.moveLeft();

		expect(board.grid[0][1]).to.equal(4);
		expect(board.grid[1][1]).to.equal(undefined);
		expect(board.grid[2][1]).to.equal(undefined);
		expect(board.grid[3][1]).to.equal(undefined);
		expect(board.grid[4][1]).to.equal(undefined);

		done();
	});
});

describe("moveRight public function", function() {
	beforeEach(function() {
		board = new Board(500, 600, 5, 6);
	});

	it('Should move all tiles to the right when moveRight is called.', function (done) {

		board.addTile(1, 0, 2);
		board.addTile(0, 1, 2);
		board.addTile(2, 1, 4);

		board.moveRight();

		expect(board.grid[0][0]).to.equal(undefined);
		expect(board.grid[1][0]).to.equal(undefined);
		expect(board.grid[2][0]).to.equal(undefined);
		expect(board.grid[3][0]).to.equal(undefined);
		expect(board.grid[4][0]).to.equal(2);

		expect(board.grid[0][1]).to.equal(undefined);
		expect(board.grid[1][1]).to.equal(undefined);
		expect(board.grid[2][1]).to.equal(undefined);
		expect(board.grid[3][1]).to.equal(2);
		expect(board.grid[4][1]).to.equal(4);

		done();
	});

	it('Should combine and sum touching tiles with the same value after moving RIGHT', function (done) {
		board.addTile(0, 1, 2);
		board.addTile(1, 1, 2);

		board.moveRight();

		expect(board.grid[0][1]).to.equal(undefined);
		expect(board.grid[1][1]).to.equal(undefined);
		expect(board.grid[2][1]).to.equal(undefined);
		expect(board.grid[3][1]).to.equal(undefined);
		expect(board.grid[4][1]).to.equal(4);

		done();
	});

});

describe("moveUp public function", function() {
	beforeEach(function() {
		board = new Board(500, 600, 5, 6);
	});

	it('Should move all tiles to the top when moveUp is called.', function (done) {

		board.addTile(0, 2, 2);
		board.addTile(0, 4, 4);
		board.addTile(1, 4, 2);
		board.addTile(2, 0, 16);
		board.addTile(2, 2, 2);

		board.moveUp();

		expect(board.grid[0][0]).to.equal(2);
		expect(board.grid[0][1]).to.equal(4);
		expect(board.grid[0][2]).to.equal(undefined);
		expect(board.grid[0][3]).to.equal(undefined);
		expect(board.grid[0][4]).to.equal(undefined);
		expect(board.grid[0][5]).to.equal(undefined);

		expect(board.grid[1][0]).to.equal(2);
		expect(board.grid[1][1]).to.equal(undefined);
		expect(board.grid[1][2]).to.equal(undefined);
		expect(board.grid[1][3]).to.equal(undefined);
		expect(board.grid[1][4]).to.equal(undefined);
		expect(board.grid[1][5]).to.equal(undefined);

		expect(board.grid[2][0]).to.equal(16);
		expect(board.grid[2][1]).to.equal(2);
		expect(board.grid[2][2]).to.equal(undefined);
		expect(board.grid[2][3]).to.equal(undefined);
		expect(board.grid[2][4]).to.equal(undefined);
		expect(board.grid[2][5]).to.equal(undefined);


		done();
	});

	it('Should combine and sum touching tiles with the same value after moving UP', function (done) {
		board.addTile(0, 1, 6);
		board.addTile(0, 4, 6);

		board.moveUp();

		expect(board.grid[0][0]).to.equal(12);
		expect(board.grid[0][1]).to.equal(undefined);
		expect(board.grid[0][2]).to.equal(undefined);
		expect(board.grid[0][3]).to.equal(undefined);
		expect(board.grid[0][4]).to.equal(undefined);
		expect(board.grid[0][5]).to.equal(undefined);

		done();
	});

});

describe("moveUp public function", function() {
	beforeEach(function() {
		board = new Board(500, 600, 5, 6);
	});

	it('Should move all tiles to the bottom when moveDown is called.', function (done) {

		board.addTile(0, 2, 2);
		board.addTile(0, 4, 4);
		board.addTile(1, 4, 2);
		board.addTile(2, 0, 16);
		board.addTile(2, 2, 2);

		board.moveDown();

		expect(board.grid[0][0]).to.equal(undefined);
		expect(board.grid[0][1]).to.equal(undefined);
		expect(board.grid[0][2]).to.equal(undefined);
		expect(board.grid[0][3]).to.equal(undefined);
		expect(board.grid[0][4]).to.equal(2);
		expect(board.grid[0][5]).to.equal(4);

		expect(board.grid[1][0]).to.equal(undefined);
		expect(board.grid[1][1]).to.equal(undefined);
		expect(board.grid[1][2]).to.equal(undefined);
		expect(board.grid[1][3]).to.equal(undefined);
		expect(board.grid[1][4]).to.equal(undefined);
		expect(board.grid[1][5]).to.equal(2);

		expect(board.grid[2][0]).to.equal(undefined);
		expect(board.grid[2][1]).to.equal(undefined);
		expect(board.grid[2][2]).to.equal(undefined);
		expect(board.grid[2][3]).to.equal(undefined);
		expect(board.grid[2][4]).to.equal(16);
		expect(board.grid[2][5]).to.equal(2);


		done();
	});

	it('Should combine and sum touching tiles with the same value after moving DOWN', function (done) {
		board.addTile(0, 1, 6);
		board.addTile(0, 4, 6);

		board.moveDown();

		expect(board.grid[0][0]).to.equal(undefined);
		expect(board.grid[0][1]).to.equal(undefined);
		expect(board.grid[0][2]).to.equal(undefined);
		expect(board.grid[0][3]).to.equal(undefined);
		expect(board.grid[0][4]).to.equal(undefined);
		expect(board.grid[0][5]).to.equal(12);

		done();
	});
});

describe('getEmptySquarePosition public function', function() {
	beforeEach(function () {
		board = new Board(500, 600, 5, 6);
		board.addTile(0, 0, 2);
		board.addTile(0, 2, 4);
		board.addTile(1, 0, 2);
	});

	it('Should return an array object', function(done) {

		var pos = board.getEmptySquarePosition();

		expect(pos).to.be.instanceOf(Array);

		done(); 
	});

	it('Should have values within the confines of the length/height of the board grid', function(done) {

		var pos = board.getEmptySquarePosition();

		expect(pos[0]).to.be.above(-1);
		expect(pos[1]).to.be.above(-1);

		expect(pos[0]).to.be.below(board.grid.length);
		expect(pos[1]).to.be.below(board.grid.length);	

		done();
	});

	it('Should return a tile position that is empty', function (done) {
		var pos = board.getEmptySquarePosition();

		expect(board.grid[pos[0]][pos[1]]).to.equal(undefined);

		done();
	});
});

describe('getMaxTileValue public function', function() {
	beforeEach(function () {
		board = new Board(500, 600, 5, 6);
		board.addTile(0, 0, 2);
		board.addTile(0, 2, 4);
		board.addTile(1, 0, 8);
	});

	it('Should return a number value of at least 2 (the smallest valid number)', function(done) {
		var value = board.getMaxTileValue();

		expect(value).to.be.at.least(2);

		done();
	});

	it('Should return the largest number in the grid.', function(done) {
		
		expect(board.getMaxTileValue()).to.equal(8);
		
		done();
	});

});

describe('getNextTileValue public function', function() {
	beforeEach(function () {
		board = new Board (500, 600, 5, 6);
		board.addTile(0, 0, 2);
		board.addTile(0, 1, 2);
	});

	it('Should return the lowest value for the board normally', function(done) {
		var value = board.getNextTileValue();
		
		expect(value).to.equal(2);

		done();
	});
});

describe('doNextMove public function', function() {
	beforeEach(function () {
		board = new Board (500, 600, 5, 6);
		board.addTile(0, 0, 2);
		board.addTile(0, 1, 4);
	});

	it('Should increase the number of tiles on the board by one', function(done) {
		
		board.doNextMove();

		var count = 0;
		for (var i=0; i<board.y; i++) {
			var grid = board.grid[i];
			for (var j=0; j<board.x; j++) {
				if (grid != undefined && grid[j] != undefined)
				{
					// Assume, for now, that it's a tile.
					count = count + 1;  
				}	
			}
		}

		expect(count).to.equal(3);

		done();
	});
});