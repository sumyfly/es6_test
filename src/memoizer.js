const memorizer = function (memo, formula) {
  const recur = function (n) {
    let result = memo[n];
    if (typeof result !== 'number') {
      result = formula(recur, n)
      if(result>=0)
      memo[n] = result
    }
    return result
  }
  return recur
}

const fibonacci = memorizer([0, 1], function (recur, n) {
  return recur(n - 1) + recur(n - 2)
})
module.exports = fibonacci