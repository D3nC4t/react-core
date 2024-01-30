export default function _objectWithoutProperties(source, excluded) {
  if (source == null) {
    return {};
  }
  var target = {};
  for (var _i = 0, _a = Object.keys(source); _i < _a.length; _i++) {
    var key = _a[_i];
    if (excluded.indexOf(key) >= 0) {
      continue;
    }
    target[key] = source[key];
  }
  return target;
}
