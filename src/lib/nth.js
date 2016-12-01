function nth(array, counter) {
  if (counter > 0) {
    return array[( counter - 1 )]
  } else if (counter < 0) {
    return array[( array.length - Math.abs(counter) )]
  } else {
    return null
  }

}

module.exports = {nth};
