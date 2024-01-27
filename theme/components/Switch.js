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
var Switch = {
    C4tSwitch: {
        defaultProps: {},
        variants: {
            'root': {
                styles: function (_a) {
                    var theme = _a.theme, props = __rest(_a, ["theme"]);
                    return (__assign({}, makeVariants(['root', 'contained', 'rounded', 'round-contained'], function (variant) {
                        var _a;
                        var _b, _c, _d;
                        var baseClass = "C4tSwitch-".concat(variant);
                        return _a = {
                                height: theme.get.rem(theme.spacing.ml, theme.shape.unit),
                                width: theme.get.rem(theme.spacing.ml * 2, theme.shape.unit),
                                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape, (_b = props.color) !== null && _b !== void 0 ? _b : 'primary', 'main')
                            },
                            _a["& .".concat(baseClass, "--thumb")] = {
                                left: theme.get.rem(theme.spacing.xxs, theme.shape.unit),
                                width: theme.get.rem(theme.spacing.m, theme.shape.unit),
                                height: theme.get.rem(theme.spacing.m, theme.shape.unit),
                                backgroundColor: theme.get.color((_c = props.color) !== null && _c !== void 0 ? _c : 'primary', 'text'),
                                '&.checked': {
                                    backgroundColor: theme.get.color((_d = props.color) !== null && _d !== void 0 ? _d : 'primary', 'main'),
                                    left: theme.get.rem(theme.spacing.ml + theme.spacing.xxs, theme.shape.unit),
                                },
                            },
                            _a;
                    })));
                },
            },
            'contained': {
                styles: function (_a) {
                    var _b;
                    var theme = _a.theme, props = __rest(_a, ["theme"]);
                    return ({
                        backgroundColor: theme.get.color((_b = props.color) !== null && _b !== void 0 ? _b : 'primary', 'lighter'),
                        borderColor: 'transparent',
                    });
                },
            },
            'rounded': {
                styles: function (_a) {
                    var _b;
                    var theme = _a.theme;
                    return (_b = {
                            borderRadius: theme.get.rem(theme.shape.border.radius, theme.shape.border.unit)
                        },
                        _b["& .C4tSwitch-rounded--thumb"] = {
                            borderRadius: theme.get.rem(theme.shape.border.radius, theme.shape.border.unit),
                        },
                        _b);
                },
            },
            'round-contained': {
                styles: function (_a) {
                    var _b;
                    var _c;
                    var theme = _a.theme, props = __rest(_a, ["theme"]);
                    return (_b = {
                            backgroundColor: theme.get.color((_c = props.color) !== null && _c !== void 0 ? _c : 'primary', 'lighter'),
                            borderColor: 'transparent',
                            borderRadius: theme.get.rem(theme.shape.border.radius, theme.shape.border.unit)
                        },
                        _b["& .C4tSwitch-round-contained--thumb"] = {
                            borderRadius: theme.get.rem(theme.shape.border.radius, theme.shape.border.unit),
                        },
                        _b);
                },
            },
        },
    },
};
export default Switch;
