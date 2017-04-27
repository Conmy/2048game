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
				
				if (this.getTile(i,j) !== undefined) {
					textAlign(CENTER, CENTER);	
					fill(10);
					text(this.grid[i][j].toString(), i*this.tileWidth, j*this.tileHeight, this.tileWidth, this.tileHeight);
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
			
			// Scan the row backwards for values and add to the temp array.
			for (i = this.x-1; i >= 0; i--) {
				if (this.grid[i][j] !== undefined) {
					values.push(this.grid[i][j]);
				}
			}

			// Pop the values out into the array one after the other until there are none left.
			// Then add undefined values to fill out the array.
			for (i = 0; i < this.x; i++) {
				if (values.length > 0) {
					this.grid[i][j] = values.pop();
				}
				else {
					this.grid[i][j] = undefined;
				}
			}

			// Check for touching equal values and sum these together.
			for (i = this.x-1; i >= 0; i--) {
				if (this.grid[i][j] === undefined) {
					// Exit clause if there are no values in the row and move on.
					continue;
				}
				else if( i > 0 && this.grid[i][j] === this.grid[i-1][j]) {
					values.push(this.grid[i][j] + this.grid[i-1][j]);
					// Skip the value we just added to the current value.
					i--;
				}
				else {
					values.push(this.grid[i][j]);
				}
			}

			// Pop the values out into the array one after the other until there are none left.
			// Then add undefined values to fill out the array.
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

			for (i = 0; i < this.x; i++) {
				if (this.grid[i][j] === undefined) {
					// Exit clause if there are no values in the row and move on.
					continue;
				}
				else if( i < this.x-1 && this.grid[i][j] === this.grid[i+1][j]) {
					values.push(this.grid[i][j] + this.grid[i+1][j]);
					// Skip the value we just added to the current value.
					i++;
				}
				else {
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

			// Check for touching equal values and sum these together.
			for (j = this.y - 1; j >= 0; j--) {
				if (this.grid[i][j] === undefined) {
					// Exit clause if there are no values in the row and move on.
					continue;
				}
				else if( j > 0 && this.grid[i][j] === this.grid[i][j-1]) {
					values.push(this.grid[i][j] + this.grid[i][j-1]);
					// Skip the value we just added to the current value.
					j--;
				}
				else {
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

			for (j = 0; j < this.y; j ++) {
				if (this.grid[i][j] === undefined) {
					// Exit clause if there are no values in the row and move on.
					continue;
				}
				else if( j < this.y-1 && this.grid[i][j] === this.grid[i][j+1]) {
					values.push(this.grid[i][j] + this.grid[i][j+1]);
					// Skip the value we just added to the current value.
					j++;
				}
				else {
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