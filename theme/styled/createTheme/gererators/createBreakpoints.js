import _extends from '../../../../utils/extends';
import _objectWithoutProperties from '../../../../utils/_objectWithoutProperties';
import {
  throwError
} from '../../../../error';
var sortBreakpointsValues = function(values) {
  var breakpointsAsArray = Object.keys(values)
    .map(function(key) {
      return ({
        key: key,
        val: values[key]
      });
    }) || [];
  breakpointsAsArray.sort(function(a, b) {
    return a.val - b.val;
  });
  return breakpointsAsArray
    .reduce(function(acc, obj) {
      var _a;
      return _extends(acc, (_a = {}, _a[obj.key] = obj.val, _a));
    }, {});
};
export default function createBreakpoints(breakpoints) {
  var _a = breakpoints.values,
    values = _a === void 0 ? {
      xs: 0,
      s: 640,
      m: 960,
      l: 1280,
      xl: 1600 // large screen
    } : _a,
    _b = breakpoints.unit,
    unit = _b === void 0 ? 'px' : _b;
  var other = _objectWithoutProperties(breakpoints, [
    'values',
    'unit'
  ]);
  var sortedValues = sortBreakpointsValues(values);
  var keys = Object.keys(sortedValues);

  function up(key) {
    if (typeof key === 'string' && !values[key]) {
      throwError('COT-1001', {
        name: key
      }).then(function() {});
    }
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }

  function down(key) {
    if (typeof key === 'string' && !values[key]) {
      throwError('COT-1001', {
        name: key
      }).then(function() {});
    }
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (max-width:".concat(value - 0.05).concat(unit, ")");
  }

  function between(start, end) {
    if (typeof start === 'string' && !values[start]) {
      throwError('COT-1001', {
        name: start
      }).then(function() {});
    }
    if (typeof end === 'string' && !values[end]) {
      throwError('COT-1001', {
        name: end
      }).then(function() {});
    }
    var endIndex = keys.indexOf(end);
    var startValue = typeof values[start] === 'number' ?
      values[start] :
      start;
    var endValue = endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ?
      values[keys[endIndex]] :
      end;
    return "@media (min-width:".concat(startValue).concat(unit, ") and (max-width:").concat(endValue - 0.05).concat(
      unit, ")");
  }

  function only(key) {
    if (!values[key]) {
      throwError('COT-1001', {
        name: key
      }).then(function() {});
    }
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }

  function not(key) {
    var keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace('@media', '@media not all and');
  }
  return _extends({
    between: between,
    down: down,
    keys: keys,
    not: not,
    only: only,
    unit: unit,
    up: up,
    values: sortedValues
  }, other);
}
