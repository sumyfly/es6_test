const R = require('ramda')
const test = function () {
  const sequare = n => n * n
  let n = R.map(sequare, [4, 8])
  console.warn(n, R.gt(2)(1))

  const isEven = n => n % 2 === 0;
  n = R.filter(isEven)([1, 2, 3, 4]) // [2, 4]
  console.warn(n)
}

test()

module.exports = test