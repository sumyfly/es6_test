import {s} from '../src/rx'

describe('rxjs test', ()=>{
  it('test', ()=>{
    s.subscribe(v=>console.warn(v))
  })
})