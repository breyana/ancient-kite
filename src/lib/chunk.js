function chunk(array, chunklimiter) {
  var papaArray = [];


  while (array.length > 0) {
      var babyArray = [];
      for (i = 0; i < chunklimiter; i++) {
        if( array.length === 0){
          break
        } else {
          babyArray.push(array[0]);
          array.splice(0,1);
//          console.log('this is your baby',babyArray)
        }
      }
//      console.log('array length is ',array.length)
      papaArray.push(babyArray);
//      console.log('Currently the Papa Array', papaArray)
  }
  return papaArray;
}

//chunk([1,2,3,4,0], 2)
//[[1,2],[3,4],[0]]

module.exports = {chunk}
