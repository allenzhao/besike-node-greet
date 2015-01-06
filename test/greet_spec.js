var expect = require("chai").expect;
var greet = require("../index.js");
describe('greet', function() {
    it('should greet a person by name',function(){
        expect(greet("allen")).to.equal("Hello allen");
    });
    it('should greet a person flirtatiously if drunk', function(){
        expect(greet("allen",true)).to.equal("Hello allen, you look sexy today.");
    });
});
