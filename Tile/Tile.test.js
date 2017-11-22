var expect = require('chai').expect;
var Tile = require('./Tile').Tile;


describe('Tile Object', function() {

	beforeEach(function () {
		tile = new Tile(1, 2, 100, 32);
	});

	it('Should construct an object', function(done){
		expect(tile).to.be.an('object');
		done();
	});

	it('Should have position elements with values set from the constructor', function(done){
		expect(tile.posX).to.exist;
		expect(tile.posY).to.exist;

		expect(tile.posX).to.equal(1);
		expect(tile.posY).to.equal(2);

		done();
	});

	it('Should have location elements with values calculated from the constructor', function(done){
		expect(tile.locX).to.exist;
		expect(tile.locY).to.exist;

		expect(tile.locX).to.equal(100);
		expect(tile.locY).to.equal(200);

		done();
	});

});

describe('Value functions', function() {

	beforeEach(function() {
		tile = new Tile(0, 0, 100, 32);
	});

	it('Should have an inital value from the constructor', function(done) {
		expect(tile.value).to.equal(32);

		done();
	});

	it('Should set the value property of the object.', function(done) {

		tile.setValue(64);

		expect(tile.value).to.equal(64);

		done();
	});

	it('Should return the value of the property from the getter', function(done){
		expect(tile.getValue()).to.equal(32);

		done();
	});

});

describe('Update Tile', function(){
	beforeEach(function() {
		tile = new Tile(1, 2, 100, 32);
	});

	it('Should update the location of the tile at a given step interval', function(done) {

		expect(tile.locX).to.be.equal(100);
		tile.update();
		expect(tile.locX).to.be.equal(150);

	});
});