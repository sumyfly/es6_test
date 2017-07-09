import { Observable } from 'rxjs'

const s = Observable.of(1,2,3).map(x => x + '!!!')
s.subscribe(console.warn)

const a = Array(5).fill(10)
a.map(d=>console.warn(d))


export {s}