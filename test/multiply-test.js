const {multiply} = require('../src/lib/multiply.js');
const {expect} = require('chai');

describe ('multiply', function(){
  it('multiply number', function() {
    expect(multiply(2,6)).to.equal(12)
  })
})
