const {pull} = require('../src/lib/pull')
const {expect} = require('chai')

describe('Pull - Takes out values', function () {
  it('Removes single numbers from arrays', function(){
    expect( pull( [3,4,5,4,6], 4 )).to.equal( [3,5,6] )
  })
  it('Removes single letter from arrays', function(){
    expect( pull( [3,"a",5,"a",6], "a" )).to.equal( [3,5,6] )
  })
  it('Removes undefined from arrays', function(){
    expect( pull( [3,undefined,5,undefined,6], undefined )).to.equal( [3,5,6] )
  })
})
