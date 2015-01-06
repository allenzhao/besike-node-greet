greet = require("../index.js")
describe "greet", ->
    it "should greet a person by name", ->
        expect(greet("allen")).to.equal "Hello allen"
        return
    
    it "should greet a person flirtatiously if drunk", ->
        expect(greet("allen", true)).to.equal "Hello allen, you look sexy today."
        return
    
    return

