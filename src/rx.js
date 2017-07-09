import { Observable } from 'rxjs'

const s = Observable.of(1,2,3).map(x => x + '!!!')
s.subscribe(console.warn)

const a = Array(5).fill(10)
a.map(d=>console.warn(d))

const dd = (A)=>{
  return new A()
}

function isTestable(target){
	target.isTestable = true
}

@isTestable
class MyTestableClass {}
var i = 1
let j = i * 2
let o = j + i
console.log(MyTestableClass.isTestable)
console.warn(o)

export {s}