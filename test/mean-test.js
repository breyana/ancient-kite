const {mean} = require('../src/lib/mean.js');
const {expect} = require('chai');

describe('mean of an array', function(){
  it('should give average of n numbers', function(){
    expect(mean([1,2,6])).to.equal(3)
  })
})
