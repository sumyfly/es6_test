import { Observable } from 'rxjs'

describe('rxjs test', ()=>{
  it('test1', ()=>{
    const  a = Observable.of(1,2,3).filter((v)=> v > 1)
    a.subscribe(console.warn)
    const b = a.map((v,i)=>v*2)
    b.subscribe(console.warn)
  })
})