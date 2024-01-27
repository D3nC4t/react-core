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
import makeVariants from '../../theme/utils/makeVariants';
var Divider = {
    C4tDivider: {
        defaultProps: {},
        variants: {
            'root': {
                styles: __assign({}, makeVariants(['root'], function (variant) {
                    var _a;
                    var baseClass = "C4tDivider-".concat(variant);
                    return _a = {
                            width: '100%',
                            padding: function (theme) { return theme.get.rem(theme.spacing.xs, theme.shape.unit); },
                            paddingLeft: 0,
                            paddingRight: 0
                        },
                        _a["& .".concat(baseClass, "--divider")] = {
                            flexGrow: 1,
                            position: 'relative',
                            '&:after': {
                                content: '""',
                                border: function (theme, props) {
                                    var _a, _b;
                                    return theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape, (_a = props.color) !== null && _a !== void 0 ? _a : 'primary', (_b = props.colorVariant) !== null && _b !== void 0 ? _b : 'main');
                                },
                                left: 0,
                                position: 'absolute',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '100%',
                            },
                        },
                        _a["&.align-left .".concat(baseClass, "--divider.main")] = {
                            width: function (theme) { return theme.get.rem(theme.spacing.xxl, theme.shape.unit); },
                            flexGrow: 0,
                        },
                        _a["&.align-right .".concat(baseClass, "--divider.extra")] = {
                            width: function (theme) { return theme.get.rem(theme.spacing.xxl, theme.shape.unit); },
                            flexGrow: 0,
                        },
                        _a;
                })),
            },
        },
    },
};
export default Divider;
