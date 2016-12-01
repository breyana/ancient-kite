const {last} = require('../src/lib/last')
const {expect} = require('chai')

describe('Last', function() {
  it('should give the last value of array', function(){
    expect(last([7,6,5,4])).to.equal(4)
  })
})
