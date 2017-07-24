import { Observable } from 'rxjs'

const s = Observable.of(1,2,3).map(x => x + '!!!')
s.subscribe(console.warn)

var iterable = [1, 2];

var iterator = iterable[Symbol.iterator]();

iterator.next(); // => { value: "1", done: false}
iterator.next(); // => { value: "2", done: false}

console.warn(iterator.next()); // => { value: undefined, done: true}
