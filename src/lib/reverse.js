const reverse = (array) => {
  let reversedArray = []
  while (array.length > 0) {
    reversedArray.push( array[ array.length - 1] )
    array.pop()
  }
  return reversedArray
}

module.exports = {reverse}
