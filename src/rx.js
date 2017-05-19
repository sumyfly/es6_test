import { Observable } from 'rxjs'

const s = Observable.of(1,2,3).map(x => x + '!!!')


export {s}