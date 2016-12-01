function pull(array, valueToBeRemoved) {
console.log("Current Array: " + array)
console.log("Value to be Removed: " + valueToBeRemoved)
  for ( i = 0; i < array.length; i++ ) {
    if ( array[i] === valueToBeRemoved ) {
      array.splice(i,1);
    }
  }
  console.log("the final array", array)
}

module.exports = {pull}
