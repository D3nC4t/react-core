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
import makeVariants from '../../theme/utils/makeVariants';
var Badge = {
    C4tBadge: {
        defaultProps: {},
        variants: {
            'root': {
                styles: function (_a) {
                    var theme = _a.theme, props = __rest(_a, ["theme"]);
                    return (__assign({}, makeVariants(['root'], function (variant) {
                        var _a;
                        var _b;
                        var baseClass = "C4tBadge-".concat(variant);
                        return _a = {
                                position: 'relative'
                            },
                            _a["& .".concat(baseClass, "--badge")] = {
                                alignItems: 'center',
                                backgroundColor: theme.get.color((_b = props.color) !== null && _b !== void 0 ? _b : 'primary', 'main'),
                                borderRadius: theme.get.rem(theme.shape.border.radius, theme.shape.border.unit),
                                bottom: "calc(100% - ".concat(theme.get.rem(8, 'px'), ")"),
                                display: 'flex',
                                fontSize: theme.get.rem(12, 'px'),
                                fontWeight: 500,
                                justifyContent: 'center',
                                left: "calc(100% - ".concat(theme.get.rem(8, 'px'), ")"),
                                minWidth: theme.get.rem(12, 'px'),
                                minHeight: theme.get.rem(12, 'px'),
                                padding: theme.get.rem(theme.spacing.xxs, theme.shape.unit),
                                position: 'absolute',
                                '&.empty': {
                                    bottom: "calc(100% - ".concat(theme.get.rem(theme.spacing.xs, theme.shape.unit), ")"),
                                    left: "calc(100% - ".concat(theme.get.rem(theme.spacing.xs, theme.shape.unit), ")"),
                                    minWidth: theme.get.rem(theme.spacing.xs, theme.shape.unit),
                                    minHeight: theme.get.rem(theme.spacing.xs, theme.shape.unit),
                                },
                                '&.bottom-left': {
                                    top: "calc(100% - ".concat(theme.get.rem(theme.spacing.xs, theme.shape.unit), ")"),
                                    left: "calc(0% - ".concat(theme.get.rem(theme.spacing.xs * 2, theme.shape.unit), ")"),
                                },
                                '&.bottom-right': {
                                    top: "calc(100% - ".concat(theme.get.rem(theme.spacing.xs, theme.shape.unit), ")"),
                                    left: "calc(100% - ".concat(theme.get.rem(theme.spacing.xs, theme.shape.unit), ")"),
                                },
                                '&.top-left': {
                                    bottom: "calc(100% - ".concat(theme.get.rem(theme.spacing.xs, theme.shape.unit), ")"),
                                    left: "calc(0% - ".concat(theme.get.rem(theme.spacing.xs * 2, theme.shape.unit), ")"),
                                },
                                '&.top-right': {
                                    bottom: "calc(100% - ".concat(theme.get.rem(theme.spacing.xs, theme.shape.unit), ")"),
                                    left: "calc(100% - ".concat(theme.get.rem(theme.spacing.xs, theme.shape.unit), ")"),
                                },
                            },
                            _a;
                    })));
                },
            },
        },
    },
};
export default Badge;
