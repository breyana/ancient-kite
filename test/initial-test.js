const {initial} = require('../src/lib/initial')
const {expect} = require('chai')

describe('Initial', function() {
  it('takes all but the last element in an array', function() {
    expect(initial([1,2,3])).to.eql([1,2])
  })
})
