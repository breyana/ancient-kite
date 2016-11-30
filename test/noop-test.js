const {noop} = require('../src/lib/noop')
const {expect} = require('chai')

describe('Noop', function() {
  it('should always return false', function() {
    expect(noop(3)).to.be.undefined
  })
})
