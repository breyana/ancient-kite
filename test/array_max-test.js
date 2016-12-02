const {max} = require('../src/lib/array_max')
const {expect} = require('chai')

describe('Max', function() {
  it('Should return largest number in array', function() {
    expect(max( [5,2,6,4,1] )).to.eql( [6] )
  })
})
