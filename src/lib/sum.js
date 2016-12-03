function sum(array) {
  var total = 0;

    for (i=0; i < array.length; i++) {
      total += array[i];
    };
    return total;
};


module.exports = {sum};
