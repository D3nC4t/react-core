var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var Popover = function (theme) { return ({
    C4tPopover: {
        defaultProps: {
            $backdropProps: {
                $invisible: true,
                $fadeProps: {
                    duration: 1200,
                }
            },
            $bgColor: 'white.main',
        },
        variants: {
            'root': {
                styles: function (_a) {
                    var _b;
                    var theme = _a.theme, props = __rest(_a, ["theme"]);
                    return (__assign({ padding: theme.spacing.s, position: (_b = props.$position) !== null && _b !== void 0 ? _b : 'absolute' }, (props.tag === 'ul' && {
                        margin: 0,
                    })));
                },
            },
            'bordered': {
                props: {
                    $bSize: theme.shape.border.size,
                    $bUnit: theme.shape.border.unit,
                },
                styles: {},
            },
            'round-bordered': {
                props: {
                    $bRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
                    $bSize: theme.shape.border.size,
                    $bUnit: theme.shape.border.unit,
                },
                styles: {},
            },
            'rounded': {
                props: {
                    $bRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
                },
                styles: {},
            },
            'round-shadowed': {
                props: {
                    $bShadow: 'bottomRight',
                    $bRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
                },
                styles: {},
            },
            'shadowed': {
                props: {
                    $bShadow: 'bottomRight',
                },
                styles: {},
            },
        },
    },
}); };
export default Popover;
