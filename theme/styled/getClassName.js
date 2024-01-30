var getClassName = function(props, name, variant) {
  var mutations = [];
  for (var _i = 3; _i < arguments.length; _i++) {
    mutations[_i - 3] = arguments[_i];
  }
  var prevClassName = props.className;
  var addClass = "".concat(name).concat(variant ? "-".concat(variant) : '');
  if (mutations && mutations.length > 0) {
    addClass = "".concat(addClass, "--").concat(mutations.join('__'));
  }
  if (prevClassName === null || prevClassName === void 0 ? void 0 : prevClassName.includes(addClass)) {
    return prevClassName;
  }
  return "".concat(prevClassName ? "".concat(prevClassName, " ") : '').concat(addClass);
};
export default getClassName;
