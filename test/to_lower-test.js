const {toLower} = require('../src/lib/to_lower');
const {expect} = require('chai');

describe('returns lower case', function() {
  it('should change all text to lower case', function() {
    expect(toLower('MoUse')).to.equal('mouse')
  })
})
