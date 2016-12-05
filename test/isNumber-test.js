const {isNumber} = require('../src/lib/isNumber');
const {expect} = require('chai');

describe('isNumber - Is It a Number?', function() {
  it('should return true when is a digit', function() {
    expect(isNumber(2)).to.eql(true)
  })
  it('should return false when is a letter', function() {
    expect(isNumber("a")).to.be.false
  })
})
