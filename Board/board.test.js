var expect = require('chai').expect;

var Board = require('./Board.js').Board;

describe('Board tests', function() {

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

	it("Should be able to GET a tile from a given grid position", function(done) {

		board.addTile(1, 2, 16);
		board.addTile(0, 3, 4);

		// Check that the value returned from the getTile is the same as the grid position.
		expect(board.getTile(1, 2)).to.equal(board.grid[1][2]);

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