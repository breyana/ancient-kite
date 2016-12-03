const {zip} = require('../src/lib/array_zip')
const {expect} = require('chai')

describe('Zip', function() {
  it('Should create separate arrays elements of the given arrays depending on their position.', function() {
    expect(zip( [1,2,3,4],['a','b','c','d'],[5,6,7,8] )).to.eql( [[1,'a',5],[2,'b',6],[3,'c',7],[4,'d',8]] )
  })
})
