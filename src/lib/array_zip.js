function zip() {

  var firstElement = [];
console.log (firstElement);

      while (array.length > 0) {
          var babyArray = [];
          for (i = 0; i < array.length; i++) {
            if(array.length === 0){
              break
            } else {
              babyArray.push(array[0]);
              array.splice(0,1);
            }
          }
          firstElement.push(babyArray);
      }


  return firstElement
};

module.exports = zip;

/* Steps
1. Slice first element of EACH array into a new array
2. Repeat until there are no more elements in original sets of arrays
3. Return new set of arrays */
