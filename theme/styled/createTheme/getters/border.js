import rem from './rem';
var border = function (theme) { return function (bSize, bUnit, bShape, bColor, bVariant) {
    var _a;
    var border = theme.shape.border;
    var variant = (_a = bVariant !== null && bVariant !== void 0 ? bVariant : border.colorVariant) !== null && _a !== void 0 ? _a : 'main';
    var color = bColor !== null && bColor !== void 0 ? bColor : border.color;
    if (typeof color === 'function') {
        color = color(theme);
    }
    if (typeof bShape === 'function') {
        bShape = bShape(theme);
    }
    if (typeof bSize === 'function') {
        bSize = bSize(theme);
    }
    if (typeof bUnit === 'function') {
        bUnit = bUnit(theme);
    }
    if (theme.color[color] && theme.color[color][variant]) {
        color = theme.color[color][variant];
    }
    var bSizeWithUnit = rem(theme)(bSize !== null && bSize !== void 0 ? bSize : border.size, bUnit !== null && bUnit !== void 0 ? bUnit : border.unit);
    return "".concat(bSizeWithUnit, " ").concat(bShape !== null && bShape !== void 0 ? bShape : border.shape, " ").concat(color);
}; };
export default border;
