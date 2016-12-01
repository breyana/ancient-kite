const {multiply} = require('../src/lib/multiply.js');
const {expect} = require('chai');

describe ('multiply', function(){
  it('should multiply numbers', function(){
    expect(multiply(1,6)).to.equal(6)
  })
})
