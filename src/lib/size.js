function size(collection) {
  var counter = 0
  for ( i = 0; i < collection.length; i++) {
    counter += 1
  }
  return counter
}

module.exports = {size};
