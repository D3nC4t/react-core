export default function _extends(target) {
  var addValues = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    addValues[_i - 1] = arguments[_i];
  }
  for (var i = 0; i < addValues.length; i++) {
    var source = addValues[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
}
