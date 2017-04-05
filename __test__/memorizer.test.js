const fibonacci = require('../src/memoizer')
describe('memorizer', () => {
  it('fibonacci-1', () => {
    expect(fibonacci(13)).toEqual(233)
  })
  it('fibonacci-2', () => {
    expect(fibonacci(14)).toEqual(377)
  })
  it('fibonacci-3', () => {
    expect(fibonacci(15)).toEqual(610)
  })
})