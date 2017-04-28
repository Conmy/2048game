var expect = require('chai').expect;
var Tile = require('./Tile').Tile;


describe('Tile Object', function() {

	beforeEach(function () {
		tile = new Tile(2, 1, 100, 32);
	});

	it('Should construct an object', function(done){
		expect(tile).to.be.an('object');
		done();
	});

	it('Should have position elements with values set from the constructor', function(done){
		expect(tile.posX).to.exist;
		expect(tile.posY).to.exist;

		expect(tile.posX).to.equal(2);
		expect(tile.posY).to.equal(1);

		done();
	});

	it('Sould have location elements with values calculated from the constructor', function(done){
		expect(tile.locX).to.exist;
		expect(tile.locY).to.exist;

		expect(tile.locX).to.equal(200);
		expect(tile.locY).to.equal(100);

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