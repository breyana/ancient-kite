const {tail} = require('../src/lib/array_tail')
const {expect} = require('chai')

describe('Tail', function() {
  it('Should return all but the first element in a numbered array', function() {
    expect(tail( [1,2,3,4] )).to.eql( [2,3,4] )
  })
})
