function Board (w, h, x, y) {
	this.x = x;
	this.y = y;
	
	this.width = w;
	this.height = h;
	
	this.grid = new Array(x);
	for (var i = 0; i < x; i++) {
		this.grid[i] = new Array(y);
	}

	this.tileWidth = Math.floor(this.width / this.x);
	this.tileHeight = Math.floor(this.height / this.y);


	this.show = function () {
		textSize(60);
		for (var i = 0; i < this.x; i++) {
			for (var j = 0; j < this.y; j++) {
			
				fill(220);
				rect(this.tileWidth*i, this.tileHeight*j, this.tileWidth, this.tileHeight);
				
				if (this.getTile(i,j) == 2) {
					textAlign(CENTER, CENTER);	
					fill(10);
					text("2", i*this.tileWidth, j*this.tileHeight, this.tileWidth, this.tileHeight);
				}
			}
		}
	};


	/**
	 * Adds a new tile to the given position x, y.
	 */
	this.addTile = function (x, y, tileValue) {

		this.grid[x][y] = tileValue;
	};

	this.moveLeft = function () {

		var i, j;
		for (j = 0; j < this.y; j++) {
			var values = [];
			
			for (i = this.x-1; i >= 0; i--) {
				if (this.grid[i][j] !== undefined) {
					values.push(this.grid[i][j]);
				}
			}

			for (i = 0; i < this.x; i++) {
				if (values.length > 0) {
					this.grid[i][j] = values.pop();
				}
				else {
					this.grid[i][j] = undefined;
				}
			}
		}
	};

	this.moveRight = function () {

		var i, j;
		for (j = 0; j < this.y; j++) {
			var values = [];
			for (i = 0; i < this.x; i++) {
				if (this.grid[i][j] !== undefined) {
					values.push(this.grid[i][j]);
				}
			}

			for (i = this.x - 1; i >= 0; i--) {
				if (values.length > 0) {
					this.grid[i][j] = values.pop();
				}
				else {
					this.grid[i][j] = undefined;
				}
			}
		}
	};

	this.moveUp = function () {

		var i, j;
		for (i = 0; i < this.x; i++) {
			var values = [];
			for (j = this.y - 1; j >= 0; j--) {
				if (this.grid[i][j] !== undefined) {
					values.push(this.grid[i][j]);
				}
			}

			for (j = 0; j < this.y; j++) {
				if (values.length > 0) {
					this.grid[i][j] = values.pop();
				}
				else {
					this.grid[i][j] = undefined;
				}
			}
		}
	};

	this.moveDown = function () {

		var i, j;
		for (i = 0; i < this.x; i++) {
			var values = [];
			for (j = 0; j < this.y; j ++) {
				if (this.grid[i][j] !== undefined) {
					values.push(this.grid[i][j]);
				}
			}

			for (j = this.y - 1; j >= 0; j--) {
				if (values.length > 0) {
					this.grid[i][j] = values.pop();
				}
				else {
					this.grid[i][j] = undefined;
				}
			}
		}
	};

	this.getTile = function (x, y) {
		return this.grid[x][y];
	};
}
module.exports.Board = Board;