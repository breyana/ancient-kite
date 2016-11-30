const {nth} = require('../src/lib/nth')
const {expect} = require('chai')

describe('nth - returns the nth value in an array', function() {
  it('should return the second value in an array', function() {
    expect(nth([1,72,3,54], 2)).to.equal(72)
  })
  it('should return the second to last value in an array', function() {
    expect(nth([1,23,45,2], -2)).to.equal(45)
  })
})
