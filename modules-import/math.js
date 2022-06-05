exports.add = function add(a, b) {
  return (a + b)
}

exports.substract = function substract(a, b) {
  return (a - b)
}

exports.multiply = function multiply(a, b) {
  return (a * b)
}

exports.divide = function divide(a, b) {
  if (b === 0) return 'no es posible dividir entre 0'
  return (a / b)
}