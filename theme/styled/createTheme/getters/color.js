var color = function (theme) { return function (color, variant) {
    var _a;
    if (typeof color === 'function') {
        return color(theme);
    }
    var match = color.match(/^([a-z0-9]+)\.([a-z0-9]+)$/);
    if (match) {
        match.shift();
        if (!variant) {
            _a = match, color = _a[0], variant = _a[1];
        }
        else {
            color = color.split('.')[0];
        }
    }
    if (theme.color[color] && theme.color[color][variant !== null && variant !== void 0 ? variant : 'main']) {
        return theme.color[color][variant !== null && variant !== void 0 ? variant : 'main'];
    }
    return color;
}; };
export default color;
