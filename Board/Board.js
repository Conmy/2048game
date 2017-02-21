function Board(w, h, x, y) {
	this.x = x;
	this.y = y;
	
	this.width = w;
	this.height = h;
	
	this.grid = new Array(x);
	for (var i = 0; i < x; i++) {
		this.grid[i] = new Array(y);
	}

	/**
	 * Adds a new tile to the given position x, y.
	 */
	this.addTile = function (x, y, tileValue) {

		this.grid[x][y] = tileValue;
	}

	this.moveLeft = function () {

		for (var j = 0; j < this.y; j++) {
			var values = [];
			for (var i = this.x-1; i >= 0; i--) {
				if (this.grid[i][j] !== undefined) {
					values.push(this.grid[i][j]);
				}
			}

			for (var i = 0; i < this.x; i++) {
				if (values.length > 0) {
					this.grid[i][j] = values.pop();
				}
				else {
					this.grid[i][j] = undefined;
				}
			}
		}
	}

	this.moveRight = function () {

		for (var j = 0; j < this.y; j++) {
			var values = [];
			for (var i = 0; i < this.x; i++) {
				if (this.grid[i][j] !== undefined) {
					values.push(this.grid[i][j]);
				}
			}

			for (var i = this.x - 1; i >= 0; i--) {
				if (values.length > 0) {
					this.grid[i][j] = values.pop();
				}
				else {
					this.grid[i][j] = undefined;
				}
			}
		}
	}

}

module.exports.Board = Board;