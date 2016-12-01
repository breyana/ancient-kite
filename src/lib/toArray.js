function toArray(input) {
  //console.log("this is the input: " + input)
  var convertedArray = []
  for ( i=0; i < input.length; i++ ) {
    //console.log("this is the input: " + input)
    convertedArray.push(input[i])
  }
  //console.log("this is the converted array " + convertedArray)
  return convertedArray
}

module.exports = {toArray};
