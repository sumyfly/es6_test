const Quo = require('../src/apply')
describe('apply', () => {
  it('apply call', () => {
    //this debugger for debug code, like break points. 
    //debugger;
    // 1. run: 'node-inspector' # to run in chrome
    // 2. run : 'node --debug-brk ./node_modules/.bin/jest --runInBand run test '# start debug
    const statusObject = {
      status: 'A-OK'
    }
    const status = Quo.prototype.get_status.apply(statusObject)
    expect(status).toEqual('A-OK')
  })
})