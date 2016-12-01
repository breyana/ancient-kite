const {drop} = require('../src/lib/drop')
const {expect} = require('chai')

describe('Drop - Removes X elements from the beginning', function() {
  it('should remove the first X elements in a larger array', function() {
    expect(drop([5,4,3,2,1],2)).to.eql([3,2,1])
  })
  it('should remove all elements if drop value is greater than array length', function() {
    expect(drop([5,4,3,2,1],6)).to.eql([])
  })
  it('should remove nothing if the remove value is 0', function() {
    expect(drop([5,4,3,2,1],0)).to.eql([5,4,3,2,1])
  })
})
