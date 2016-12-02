const concat = (array, ...args) => {
  [...args].map(x => array.push(x))
  return array
}

module.exports = {concat}
