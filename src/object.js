import {Thing} from './aop'

const dd = (A)=>{
  return class B extends A{
    constructor(name){
      super(name)
      this.name = 'jack' + this.name
    }
  }
}

function isTestable(target){
	target.isTestable = true
}

@dd
@isTestable
class MyTestableClass {
  constructor(name){
    this.name = name
  }
  speack(){
    console.warn(this.name, " speack!")
  }
}

console.log(MyTestableClass.isTestable)
const o1 = new MyTestableClass('Tom')
o1.speack()


const log = ['test'];
const obj = {
  get latest() {
    if (log.length == 0) return undefined;
    return log[log.length - 1]
  }
}
console.log(obj.latest); // Will return "test".

const o = { a: 0 }
Object.defineProperty(o, "b", { get: function () { return this.a + 1; } });
console.log(o.b) // Runs the getter, which yields a + 1 (which is 1)


const thing = new Thing();
// some time later, and possibly even in
// another part of the application
const result = thing.doSomething(1, 2);


