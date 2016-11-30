const {multiply} = require('../src/lib/multiply.js');
const {expect} = require('chai');

describe ('multiply', function(){
  it('should multiply numbers', function() {
    expect(multiply(2,6)).to.equal(12)
  })
})
