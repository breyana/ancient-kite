const {head} = require('..src/lib/head')
const {expect} = require('chai')

describe('Head - find beginning of the array', function() {
  it('should find the first value of this array', function(){
    expect(head([7,6,5,4])).to.equal(7)
  })
})
