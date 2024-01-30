var __assign = (this && this.__assign) || function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
import {
  jsx as _jsx
} from "react/jsx-runtime";
var CircularLoading = {
  C4tCircularLoading: {
    defaultProps: {},
    variants: {
      'root': {
        props: {
          nLines: 2,
        },
        styles: function(_a) {
          var _b, _c, _d, _e;
          var _f, _g;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          var baseClassName = "".concat(props.name, "-root");
          return _b = {},
            _b["&.".concat(baseClassName)] = (_c = {
                bottom: 0,
                left: 0,
                overflow: 'hidden',
                minHeight: theme.get.rem(theme.spacing.m, theme.shape.unit),
                minWidth: theme.get.rem(theme.spacing.m, theme.shape.unit),
                position: 'absolute',
                right: 0,
                top: 0
              },
              _c["& .".concat(baseClassName, "--inner")] = (_d = {
                  height: '100%',
                  left: 0,
                  margin: 'auto',
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '100%',
                  '@keyframes spin': {
                    '0%': {
                      transform: 'rotate(0)',
                    },
                    '100%': {
                      transform: 'rotate(360deg)',
                    },
                  }
                },
                _d["&__line"] = {
                  border: '4px solid transparent',
                  borderColor: theme.get.color((_f = props.color) !== null && _f !== void 0 ? _f : 'primary',
                    'lighter'),
                  borderRadius: '100%',
                  boxSizing: 'border-box',
                  height: '100%',
                  position: 'absolute',
                  width: '100%',
                },
                _d["&__line:not(:first-of-type)"] = (_e = {
                    animation: 'spin 2000ms cubic-bezier(.175, .885, .32, 1.275) infinite',
                    border: 'none',
                    height: '100%',
                    margin: 0,
                    overflow: 'hidden'
                  },
                  _e["& .".concat(baseClassName, "--inner__line__track")] = {
                    margin: 0,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    border: '4px solid transparent',
                    borderColor: theme.get.color((_g = props.color) !== null && _g !== void 0 ? _g : 'primary',
                      'main'),
                    borderRadius: '100%',
                    content: '""',
                    height: '100%',
                    width: '100%',
                  },
                  _e),
                _d),
              _c),
            _b;
        },
      },
      'rainbow': {
        props: {
          nLines: 7,
        },
        styles: function(_a) {
          var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
          var _o, _p, _q, _r, _s, _t, _u;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          var baseClassName = "".concat(props.name, "-rainbow");
          return _b = {},
            _b["&.".concat(baseClassName)] = (_c = {
                bottom: 0,
                left: 0,
                overflow: 'hidden',
                minHeight: '120px',
                minWidth: '120px',
                position: 'absolute',
                right: 0,
                top: 0
              },
              _c["& .".concat(baseClassName, "--inner")] = (_d = {
                  height: '60px',
                  left: 0,
                  margin: 'auto',
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(calc(-50% - 21px))',
                  width: '104px',
                  '@keyframes spin': {
                    '0%, 11%': {
                      transform: 'rotate(0)',
                    },
                    '100%': {
                      transform: 'rotate(360deg)',
                    },
                  }
                },
                _d["&__line"] = (_e = {
                    animation: 'spin 2000ms cubic-bezier(.175, .885, .32, 1.275) infinite',
                    boxSizing: 'border-box',
                    height: '50px',
                    left: 0,
                    overflow: 'hidden',
                    position: 'absolute',
                    top: 0,
                    transformOrigin: '50% 100%',
                    width: '104px'
                  },
                  _e["&__track"] = {
                    border: '4px solid transparent',
                    borderRadius: '100%',
                    boxSizing: 'border-box',
                    height: '104px',
                    left: 0,
                    margin: '0 auto',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: '104px',
                  },
                  _e["&:nth-child(1)"] = (_f = {
                      animationDelay: '-50ms'
                    },
                    _f["& .".concat(baseClassName, "--inner__line__track")] = {
                      borderColor: props.color ?
                        theme.get.rgba((_o = props.color) !== null && _o !== void 0 ? _o : 'primary', 1, 'main') :
                        'hsl(0, 80%, 60%)',
                      height: '104px',
                      width: '104px',
                      top: '0px',
                    },
                    _f),
                  _e["&:nth-child(2)"] = (_g = {
                      animationDelay: '-100ms'
                    },
                    _g["& .".concat(baseClassName, "--inner__line__track")] = {
                      borderColor: props.color ?
                        theme.get.rgba((_p = props.color) !== null && _p !== void 0 ? _p : 'primary', 0.86,
                        'main') :
                        'hsl(35,86%,52%)',
                      height: '90px',
                      width: '90px',
                      top: '7px',
                    },
                    _g),
                  _e["&:nth-child(3)"] = (_h = {
                      animationDelay: '-150ms'
                    },
                    _h["& .".concat(baseClassName, "--inner__line__track")] = {
                      borderColor: props.color ?
                        theme.get.rgba((_q = props.color) !== null && _q !== void 0 ? _q : 'primary', 0.72,
                        'main') :
                        'hsl(46,77%,55%)',
                      height: '76px',
                      width: '76px',
                      top: '14px',
                    },
                    _h),
                  _e["&:nth-child(4)"] = (_j = {
                      animationDelay: '-200ms'
                    },
                    _j["& .".concat(baseClassName, "--inner__line__track")] = {
                      borderColor: props.color ?
                        theme.get.rgba((_r = props.color) !== null && _r !== void 0 ? _r : 'primary', 0.58,
                        'main') :
                        'hsl(116,65%,53%)',
                      height: '62px',
                      width: '62px',
                      top: '21px',
                    },
                    _j),
                  _e["&:nth-child(5)"] = (_k = {
                      animationDelay: '-250ms'
                    },
                    _k["& .".concat(baseClassName, "--inner__line__track")] = {
                      borderColor: props.color ?
                        theme.get.rgba((_s = props.color) !== null && _s !== void 0 ? _s : 'primary', 0.44,
                        'main') :
                        'hsl(201,81%,58%)',
                      height: '48px',
                      width: '48px',
                      top: '28px',
                    },
                    _k),
                  _e["&:nth-child(6)"] = (_l = {
                      animationDelay: '-300ms'
                    },
                    _l["& .".concat(baseClassName, "--inner__line__track")] = {
                      borderColor: props.color ?
                        theme.get.rgba((_t = props.color) !== null && _t !== void 0 ? _t : 'primary', 0.3, 'main') :
                        'hsl(229,82%,55%)',
                      height: '34px',
                      width: '34px',
                      top: '35px',
                    },
                    _l),
                  _e["&:nth-child(7)"] = (_m = {
                      animationDelay: '-350ms'
                    },
                    _m["& .".concat(baseClassName, "--inner__line__track")] = {
                      borderColor: props.color ?
                        theme.get.rgba((_u = props.color) !== null && _u !== void 0 ? _u : 'primary', 0.16,
                        'main') :
                        'hsl(254,63%,47%)',
                      height: '20px',
                      width: '20px',
                      top: '42px',
                    },
                    _m),
                  _e),
                _d),
              _c),
            _b;
        },
      },
      'svg': {
        props: {
          lines$el: {
            0: _jsx("svg", __assign({
              className: "spinner",
              viewBox: "0 0 50 50"
            }, {
              children: _jsx("circle", {
                className: "path",
                cx: "25",
                cy: "25",
                r: "20",
                fill: "none",
                strokeWidth: "5"
              })
            })),
          }
        },
        styles: function(_a) {
          var _b;
          var _c;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          var baseClassName = "".concat(props.name, "-svg");
          return _b = {},
            _b["&.".concat(baseClassName)] = {
              position: 'relative',
              minHeight: '26px',
              minWidth: '26px',
              '@keyframes rotate': {
                '0%': {
                  transform: 'rotate(0deg)',
                },
                '100%': {
                  transform: 'rotate(360deg)',
                },
              },
              '@keyframes dash': {
                '0%': {
                  strokeDasharray: '1, 150',
                  strokeDashoffset: 0
                },
                '50%': {
                  strokeDasharray: '90, 150',
                  strokeDashoffset: -35,
                },
                '100%': {
                  strokeDasharray: '90, 150',
                  strokeDashoffset: -124,
                },
              },
              '& .spinner': {
                animation: 'rotate 2s linear infinite',
                zIndex: 2,
                position: 'absolute',
                width: '100%',
                height: '100%',
                '& .path': {
                  stroke: theme.get.color((_c = props.color) !== null && _c !== void 0 ? _c : 'primary', 'main'),
                  strokeLinecap: 'round',
                  animation: 'dash 1.5s ease-in-out infinite',
                }
              },
            },
            _b;
        },
      },
    },
  },
};
export default CircularLoading;
