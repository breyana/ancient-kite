const isNumber = (valueToCheck) => {
  console.log("this is the type: ", typeof valueToCheck)
return typeof valueToCheck === "number"
// return valueToCheck instanceof Number
// ^seems to be a type conversion error when ran?
};

module.exports = {isNumber}
