//babel sourcemaps didn't support import sytax, but react-native can, so may find real reson
//http://stackoverflow.com/questions/32211649/debugging-with-webpack-es6-and-babel
var Thing = require('./aop')

const a = 'ss'
const fn = (a) => {
  return a + ' in lambda'
}
console.log(fn(a))

var log = ['test'];
var obj = {
  get latest() {
    if (log.length == 0) return undefined;
    return log[log.length - 1]
  }
}
console.log(obj.latest); // Will return "test".


var expr = "foo";

var obj = {
  get [expr]() { return "bar"; }
};

console.log(obj.foo); // "bar"

var o = { a: 0 }

Object.defineProperty(o, "b", { get: function () { return this.a + 1; } });

console.log(o.b) // Runs the getter, which yields a + 1 (which is 1)

const i = 2
// i = 3

const o1 = { a: 1, a: 2 }
console.warn(o1)


var thing = new Thing();

// some time later, and possibly even in
// another part of the application
var result = thing.doSomething(1, 2);


