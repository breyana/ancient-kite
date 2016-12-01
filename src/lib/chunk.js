function chunk(array, chunklimiter) {
  var givenarray = array;
  var chunkedArray = [];
  var tempArray = [];
  while (givenarray.length > 0) {
      for (i=0;i<chunklimiter;i++) {
        tempArray.push(givenarray[0]);
        givenarray.pop();
      }
      chunkedArray.push(tempArray);
  }
  return chunkedArray;
}

module.exports = {chunk}
