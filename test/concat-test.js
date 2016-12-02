const {concat} = require('../src/lib/concat')
const {expect} = require('chai')

describe('Concat', function() {
  it('can add new arrays to existing arrays', function(){
    var testarray = [1,2,3];
    expect(concat(testarray,3,2,1)).to.eql([1,2,3,3,2,1]);
  })
})
