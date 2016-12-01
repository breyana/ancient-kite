const {toUpper} = require('../src/lib/to_upper');
const {expect} = require('chai');

describe('returns upper case', function() {
  it('should convert all text to upper case ', function() {
    expect(toUpper('elePHAnt')).to.equal('ELEPHANT')
  })
})
