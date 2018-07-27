const Quo = function(status){
  this.status = status
}

Quo.prototype.get_status = function () {
  return this.status
}

const myQuo = new Quo('confused')
const statusObject = {
  //should has the same property name 'status'
  status: 'A-OK'
}
console.warn(myQuo.get_status())
export const i = 1
console.warn(Quo.prototype.get_status.apply(statusObject))