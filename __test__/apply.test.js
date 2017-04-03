const Quo = require('../src/apply')
describe('apply', () => {
  it('apply call', () => {
    const statusObject = {
      status: 'A-OK'
    }
    const status = Quo.prototype.get_status.apply(statusObject)
    expect(status).toEqual('A-OK')
  })
})