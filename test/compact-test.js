const{compact} = require('../src/lib/compact')
const{expect} = require('chai')

describe('Compact', function() {
  it('Removes all false values from the array', function() {
    expect(compact([2,undefined,null,0,"",false,NaN,3])).to.eql([2,3])
  })
})
