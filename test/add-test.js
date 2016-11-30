const {add} = require('../src/lib/add');
const {expect} = require('chai');

describe("add", () => {
  it('add numbers together', () => {
    expect(add(2, 3)).to.equal(5)
  })
  it('should return undefined if no arguments are given'() => {
    expect(add()).to.equal(undefined)
  })
})
