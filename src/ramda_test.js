var R = require('ramda')
var test = function () {
  var sequare = n => n * n
  var n = R.map(sequare, [4, 8])
  console.warn(n, R.gt(2)(1))

  var isEven = n => n % 2 === 0;
  n = R.filter(isEven)([1, 2, 3, 4]) // [2, 4]
  console.warn(n)
}

module.exports = test