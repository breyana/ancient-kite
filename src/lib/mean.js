function mean(numbers) {
  var total = 0;
  for (var i=0; i<numbers.length;i++) {
    total += numbers[i];
  }
  return (total/numbers.length);
};

module.exports = {mean};
