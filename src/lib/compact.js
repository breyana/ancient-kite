function compact(array) {
  return array.filter(function(v) {
    return !!v;
  })
}

  // for ( i = 0; i < array.length; i++ ) {
  //   if (( array[i] === false) || (array[i] === 0) || (array[i] === undefined) || (array[i] === NaN) || (array[i] === "") || (array[i] === null )) {
  //     array.splice(i,1);
  //   }
  // }
// it('Removes all false values from the array', function() {
//   expect(compact([2,undefined,null,0,"",false,NaN,3])).to.eql([2,3])
// })

//let compact = array => array.filter(v => !!v)

module.exports = {compact};
