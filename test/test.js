const {add} = require('../src/lib/add');
const {expect} = require('chai');

describe('Functions', function() {
  it('it should blah', function() {
    expect(add(2, 3)).to.equal(5)
  })
})
