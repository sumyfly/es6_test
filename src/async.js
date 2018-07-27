const promiseFun = (a) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a > 5) {
        resolve(a - 0 + 1)
      } else {
        reject('param must >5')
      }
    }, 3000)
  })
}

const asyncFun = async (a) => {
  try {
    return await promiseFun(a)
  } catch (err) {
    console.warn(err)
    return err
  }
}

function* call(p, ...args) {
  const result = p(args)
  if (result instanceof Promise) {
    yield result
  } else {
    console.warn('normal function')
    return result
  }
}

// const b = asyncFun(10)
// console.warn('b', b)
function* c() {
  const d = yield asyncFun(10)
  console.warn('d', d)
}


const g = c()
const v = g.next()

console.warn('xxxv', v)
v.value.then(r => console.warn('>>>', r))

