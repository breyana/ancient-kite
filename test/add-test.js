const {add} = require('../src/lib/add');
const {expect} = require('chai');

describe('add', function() {
  it('add numbers together', function() {
    expect(add(2, 3)).to.equal(5)
  })
  it('should return undefined if no arguments are given', function () {
    expect(add()).to.equal(undefined)
  })
})
