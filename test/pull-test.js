const {pull} = require('../src/lib/pull')
const {expect} = require('chai')

//note that mocha seems to have a bug with setting equal to arrays?
describe('Pull - Takes out values', function () {
  it('Removes single numbers from arrays', function(){
    expect( pull( [3,4,5,4,6], 4 )).to.eql( [3,5,6] )
  })
  it('Removes single letter from arrays', function(){
    expect( pull( [3,"a",5,"a",6], "a" )).to.eql( [3,5,6] )
  })
  it('Removes undefined from arrays', function(){
    expect( pull( [3,undefined,5,undefined,6], undefined )).to.eql( [3,5,6] )
  })
})
