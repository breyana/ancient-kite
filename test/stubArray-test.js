const {stubArray} = require('../src/lib/stubArray')
const {expect} = require('chai')

describe('stubArray - returns empty arrays', function() {
  it('should return an empty array when called', function() {
    expect(stubArray('randomthing')).to.eql([])
  })
})
