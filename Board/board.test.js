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

	it('Should be able to add a tile to a given grid position', function (done) {

		board.addTile(1, 1, 2);

		expect(board.grid[1][1]).to.equal(2);
		expect(board.grid[1][1]).to.not.equal(-1);

		done();
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

});