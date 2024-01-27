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
var Chip = {
    C4tChip: {
        defaultProps: {},
        variants: {
            'root': {
                styles: __assign({ alignItems: 'center', backgroundColor: function (theme, props) {
                        var _a;
                        return theme.get
                            .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'lighter');
                    }, border: function (theme, props) {
                        var _a;
                        return theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape, (_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'lighter');
                    }, borderRadius: function (theme) { return "".concat(theme.spacing.xxl).concat(theme.shape.unit); }, color: function (theme, props) {
                        var _a;
                        return theme.get
                            .color((_a = props.color) !== null && _a !== void 0 ? _a : 'primary', 'text');
                    }, display: 'flex', justifyContent: 'center', margin: 0, padding: function (theme) { return "".concat(theme.spacing.xxs).concat(theme.shape.unit); }, width: 'fit-content', '& > svg': {
                        aspectRatio: '1 / 1',
                        width: 'auto',
                        padding: function (theme) { return "0 ".concat(theme.spacing.xs).concat(theme.shape.unit); },
                    } }, makeVariants(['root'], function (variant) {
                    var _a;
                    return (_a = {},
                        _a["& .C4tChip-".concat(variant, "--label")] = {
                            padding: function (theme) { return "0 ".concat(theme.spacing.xs).concat(theme.shape.unit); },
                            height: function (theme) { return "".concat(theme.spacing.ml + theme.spacing.xxs)
                                + "".concat(theme.shape.unit); },
                        },
                        _a);
                })),
            },
        },
    },
};
export default Chip;
