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
var CircularProgress = {
    C4tCircularProgress: {
        defaultProps: {},
        variants: {
            'root': {
                styles: function (_a) {
                    var _b, _c, _d, _e, _f, _g;
                    var theme = _a.theme, props = __rest(_a, ["theme"]);
                    return ({
                        '&': {
                            borderRadius: '50%',
                            background: 'radial-gradient(closest-side, '
                                + theme.get.color(props.color === 'white'
                                    ? 'black'
                                    : 'white', 'main')
                                + ' 89%, transparent 90% 100%)'
                                + ', conic-gradient('
                                + theme.get.color((_b = props.color) !== null && _b !== void 0 ? _b : 'primary', (_c = props.colorVariant) !== null && _c !== void 0 ? _c : 'main')
                                + " ".concat((_d = props.percentage) !== null && _d !== void 0 ? _d : 0, "%, ")
                                + theme.get.color((_e = (props.color === 'black'
                                    ? 'white'
                                    : props.color)) !== null && _e !== void 0 ? _e : 'primary', props.color === 'white'
                                    ? 'darker'
                                    : 'lighter')
                                + ' 0)',
                            position: 'relative',
                            height: '94px',
                            width: '94px',
                        },
                        '& .C4tCircularProgress-root--progress': {
                            color: theme.get.color((_f = props.color) !== null && _f !== void 0 ? _f : 'primary', (_g = props.colorVariant) !== null && _g !== void 0 ? _g : 'main'),
                            left: '50%',
                            position: 'absolute',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                        }
                    });
                },
            },
        },
    },
};
export default CircularProgress;
