const {chunk} = require('../src/lib/chunk')
const {expect} = require('chai')

describe('Chunk - make array chunks', function() {
  it('takes the array and puts it into chunks of two', function() {
    /*even though the result is equivalent to the expected result, this test
    will fail. It is currently a mystery as to why*/
    expect(chunk([ 1,2,3,4,0 ], 2)).to.equal( [[1,2],[3,4],[0]] )
  })

})
