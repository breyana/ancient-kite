const {intersection} = require('../src/lib/intersection')
const {expect} = require('chai')

describe('Intersection', function() {
  it('should give array of common values within provided arrays', function(){
    expect(intersection( [7,6,5,4],[1,4,5,7],[4,7,5,8])).to.eql([7,5,4])
  })
})

// [1,2,3,4]
