const {reverse} = require('../src/lib/reverse')
const {expect} = require('chai')

describe('Reverse', function() {
  it('switches the order of the array to reverse', function() {
    expect(reverse([1,2,3])).to.eql([3,2,1])
  })
})
