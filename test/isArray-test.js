const {isArray} = require('../src/lib/isArray')
const {expect} = require('chai')

describe('Checking for an Array - isArray', function() {
  it('should verify that this is an array', function() {
    expect(isArray([1,2,3])).to.be.true
  })
  it('should show that numbers are not an array', function() {
    expect(isArray(1)).to.be.false
  })
})
