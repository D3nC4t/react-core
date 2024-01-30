import _objectWithoutProperties from '../../../utils/_objectWithoutProperties';
export default function processStyles(props, styles) {
  var processedStyles = {};
  if (typeof styles === 'function') {
    return styles(props.theme, _objectWithoutProperties(props, ['theme']));
  }
  if (!['object'].includes(typeof styles)) {
    return styles;
  }
  //TODO: add array transform
  for (var _i = 0, _a = Object.entries(styles); _i < _a.length; _i++) {
    var _b = _a[_i],
      key = _b[0],
      value = _b[1];
    processedStyles[key] = processStyles(props, value);
  }
  return processedStyles;
}
