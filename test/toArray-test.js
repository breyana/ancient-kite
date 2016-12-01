const {toArray} = require('../src/lib/toArray')
const {expect} = require('chai')

describe('Convert to Array with toArray', function(){
  it.only('should change the text into an array', function(){
    expect(toArray('splitthis')).to.eql(["s","p","l","i","t","t","h","i","s"])
  })
})
