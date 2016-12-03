const {sum} = require('../src/lib/sum');
const {expect} = require('chai');

describe('Sum', function() {
  it('should give the sum of all values', function() {
    expect(sum([2,3,6,20,1,8])).to.equal(40);
  });
})
