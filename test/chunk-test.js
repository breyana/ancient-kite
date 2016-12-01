const {chunk} = require('../src/lib/chunk')
const {expect} = require('chai')

describe('Chunk - make array chunks', function() {
  it('takes the array and puts it into chunks of two', function() {
    expect(chunk([1,2,3,4], 2)).to.equal([1,2],[3,4])
  })
})
