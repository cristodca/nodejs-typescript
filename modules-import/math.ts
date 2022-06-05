exports.addTwoNumbers = function addTwoNumbers(a: number, b: number): number {
  return a + b
}

exports.multiplyTwoNumbers = function multiplyTwoNumbers(a: number, b: number): number {
  return a * b
}

exports.substractTwoNumbers = function substractTwoNumbers(a: number, b: number): number {
  return a - b
}

exports.divideTwoNumbers = function divideTwoNumbers(a: number, b: number): number | string {
  if (b === 0) return 'No es posible dividir entre 0'
  return a / b
}