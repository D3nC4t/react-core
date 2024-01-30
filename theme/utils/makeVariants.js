var __assign = (this && this.__assign) || function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};

function makeVariants(variants, generator) {
  var jCss = {};
  for (var _i = 0, variants_1 = variants; _i < variants_1.length; _i++) {
    var variant = variants_1[_i];
    jCss = __assign(__assign({}, jCss), generator(variant));
  }
  return jCss;
}
export default makeVariants;
