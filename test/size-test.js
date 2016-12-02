const {size} = require('../src/lib/size');
const {expect} = require('chai');

describe('size of collection', function() {
  it('should return length for array-like values', function() {
    expect(size([1,2,3,4])).to.equal(4)
  })
})
