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
import { TShirtSize, } from '../../types';
var Drawer = {
    C4tDrawer: {
        defaultProps: {
            variant: 'right',
            modalVariant: 'rounded',
        },
        variants: {
            'root': {
                styles: function (_a) {
                    var _b;
                    var _c, _d, _e, _f, _g;
                    var theme = _a.theme, props = __rest(_a, ["theme"]);
                    var verticalSpecs = theme.shape.drawer.vertical;
                    return __assign((_b = { width: theme.get.rem(verticalSpecs.width, verticalSpecs.unit), height: theme.get.rem(verticalSpecs.height, verticalSpecs.unit), minWidth: 0 }, _b[theme.breakpoints.down(TShirtSize.s)] = {
                        width: theme.get.rem(verticalSpecs.width, verticalSpecs.unit),
                        minWidth: 0,
                    }, _b), (((_c = props.modalVariant) === null || _c === void 0 ? void 0 : _c.startsWith('round')) && __assign(__assign(__assign(__assign(__assign(__assign({}, (props.variant === 'top' && {})), (['top', 'top-left', 'left'].includes((_d = props.variant) !== null && _d !== void 0 ? _d : 'root') && {
                        borderTopLeftRadius: 0,
                    })), (['top', 'top-right', 'right'].includes((_e = props.variant) !== null && _e !== void 0 ? _e : 'root') && {
                        borderTopRightRadius: 0,
                    })), (props.variant === 'top' && {})), (['bottom', 'bottom-left', 'left'].includes((_f = props.variant) !== null && _f !== void 0 ? _f : 'root') && {
                        borderBottomLeftRadius: 0,
                    })), (['bottom', 'bottom-right', 'right'].includes((_g = props.variant) !== null && _g !== void 0 ? _g : 'root') && {
                        borderBottomRightRadius: 0,
                    }))));
                },
            },
            'bottom': {
                styles: function (_a) {
                    var theme = _a.theme;
                    var horizontalSpecs = theme.shape.drawer.horizontal;
                    return {
                        width: theme.get.rem(horizontalSpecs.width, horizontalSpecs.unit),
                        height: theme.get.rem(horizontalSpecs.height, horizontalSpecs.unit),
                    };
                },
            },
            'bottom-left': {
                styles: function (_a) {
                    var theme = _a.theme;
                    var cornersSpecs = theme.shape.drawer.corner;
                    return {
                        width: theme.get.rem(cornersSpecs.width, cornersSpecs.unit),
                        height: theme.get.rem(cornersSpecs.height, cornersSpecs.unit),
                    };
                },
            },
            'bottom-right': {
                styles: function (_a) {
                    var theme = _a.theme;
                    var cornersSpecs = theme.shape.drawer.corner;
                    return {
                        width: theme.get.rem(cornersSpecs.width, cornersSpecs.unit),
                        height: theme.get.rem(cornersSpecs.height, cornersSpecs.unit),
                    };
                },
            },
            'top': {
                styles: function (_a) {
                    var theme = _a.theme;
                    var horizontalSpecs = theme.shape.drawer.horizontal;
                    return {
                        width: theme.get.rem(horizontalSpecs.width, horizontalSpecs.unit),
                        height: theme.get.rem(horizontalSpecs.height, horizontalSpecs.unit),
                    };
                },
            },
            'top-left': {
                styles: function (_a) {
                    var theme = _a.theme;
                    var cornersSpecs = theme.shape.drawer.corner;
                    return {
                        width: theme.get.rem(cornersSpecs.width, cornersSpecs.unit),
                        height: theme.get.rem(cornersSpecs.height, cornersSpecs.unit),
                    };
                },
            },
            'top-right': {
                styles: function (_a) {
                    var theme = _a.theme;
                    var cornersSpecs = theme.shape.drawer.corner;
                    return {
                        width: theme.get.rem(cornersSpecs.width, cornersSpecs.unit),
                        height: theme.get.rem(cornersSpecs.height, cornersSpecs.unit),
                    };
                },
            },
        },
    },
};
export default Drawer;
