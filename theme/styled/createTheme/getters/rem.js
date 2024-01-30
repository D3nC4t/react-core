var rem = function(theme) {
  return function(size, unit) {
    if (unit === void 0) {
      unit = 'px';
    }
    if (typeof size === 'string') {
      return size;
    }
    var remBase = theme.shape.bodyFontSize;
    switch (unit) {
      // TODO: add other units
      case 'em':
      case 'rem':
        return "".concat(size, "rem");
      case 'pt':
        return "".concat(size / 12, "rem");
      case 'vh':
      case 'vw':
      case '%':
        return "".concat(size / 100, "rem");
      case 'px':
      default:
        return "".concat(size / remBase, "rem");
    }
  };
};
export default rem;
