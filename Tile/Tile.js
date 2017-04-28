function Tile(posX, posY, w, value) {
	
	this.posX = posX;
	this.posY = posY;

	this.width = w;

	this.locX = this.posX*w;
	this.locY = this.posY*w;

	this.value = value;

	this.setValue = function(value) {
		this.value = value;
	};

	this.getValue = function() {
		return this.value;
	};
}
module.exports.Tile = Tile;