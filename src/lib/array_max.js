function max(array){
  array.sort();
  return [array[array.length-1]];
}

module.exports = {max};
