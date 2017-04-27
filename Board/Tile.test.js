var expect = require('chai').expect;
var Tile = require('Tile').Tile;


describe('Tile Object', function() {

	beforeEach(function () {
		var tile = new Tile();
	});

	it('Should construct an object', function(done){
		expect(tile).to.be.instanceOf('Tile');

		done();
	});

});