var shadow = function(theme) {
  return function(bShadow) {
    var shadow = typeof bShadow === 'string' ? theme.shadow[bShadow] : bShadow;
    if (!shadow && !bShadow) {
      shadow = theme.shape.shadow;
    }
    if (!shadow) {
      return bShadow;
    }
    var position = "".concat(shadow.offset.x).concat(shadow.unit, " ").concat(shadow.offset.y).concat(shadow.unit);
    return "".concat(position, " ").concat(shadow.blur).concat(shadow.unit, " ").concat(shadow.spread).concat(shadow
      .unit, " ").concat(shadow.color);
  };
};
export default shadow;
