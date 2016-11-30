const {subtract} = require ('../src/lib/subtract');
const {expect} = require ('chai');

descibe('subtract', function() {
  it('subtracts numbers', function() {
    expect(subtract(4,2)).to.equal(2)
  })
})
