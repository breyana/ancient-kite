const {lt} = require('../src/lib/lt');
const {expect} = require('chai');

describe('Less than', function() {
  it('First value should be less than second', function() {
    expect(lt(2, 3)).to.equal(true)
  })

  it('returns true second value greater than first', function() {
    expect(lt(3, 2)).to.equal(false)
  })

  it('both the same?', function() {
    expect(lt(3, 3)).to.equal(false)
  })

  it('edge case (undefined?)', function() {
    expect(lt(2, undefined)).to.equal(false)
  })

  it('edge case? letter', function() {
    expect(lt('a', 3)).to.equal(false)
  })
})
