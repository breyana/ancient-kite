function pull(array, valueToBeRemoved) {
  for ( i = 0; i < array.length; i++ ) {
    if ( array[i] === valueToBeRemoved ) {
      array.splice(i,1);
    }
  }
  return array
}

module.exports = {pull}
