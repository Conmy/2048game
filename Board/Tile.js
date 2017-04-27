function Tile(posX, posY, w) {
	this.posX = posX;
	this.posY = posY;

	this.width = w;

	this.locX = this.posX*w;
	this.locY = this.posY*w;
}