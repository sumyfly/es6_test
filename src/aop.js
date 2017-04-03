function Thing() { }
Thing.prototype.doSomething = function (x, y) {
  var result;
  // compute some result using x and y
  result = x + y
  return result;
};

var origDoSomething = Thing.prototype.doSomething;
Thing.prototype.doSomething = function () {
  var start = Date.now();
  var result = origDoSomething.apply(this, arguments);
  console.log((Date.now() - start) + 'ms:', result);
  return result;
}

exports.Thing = Thing
// module.exports = Thing