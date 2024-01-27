import getColor from './color';
var rgba = function (theme) { return function (color, opacity, colorVariant) {
    var _a;
    if (opacity === void 0) { opacity = 0.1; }
    if (colorVariant === void 0) { colorVariant = 'main'; }
    var colorMatcher = (_a = theme.get.color) !== null && _a !== void 0 ? _a : getColor(theme);
    var useColor = colorMatcher(color, colorVariant);
    var match = /^#?([a-fA-F\d]{2})([a-fA-F\d]{2})([a-fA-F\d]{2})$/i.exec(useColor);
    if (!match) {
        return useColor;
    }
    var r = parseInt(match[1], 16);
    var g = parseInt(match[2], 16);
    var b = parseInt(match[3], 16);
    return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(opacity, ")");
}; };
export default rgba;
