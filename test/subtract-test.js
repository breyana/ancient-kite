const {subtract} = require ('../src/lib/subtract');
const {expect} = require ('chai');

describe('subtract', function() {
  it('should subtract numbers', function() {
    expect(subtract(4,2)).to.equal(2)
  })
})
