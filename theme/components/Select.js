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
var Select = {
  C4tSelect: {
    defaultProps: {},
    variants: {
      'root': {
        styles: function(_a) {
          var _b, _c, _d, _e, _f;
          var _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          var baseClass = "".concat(props.name, "-").concat((_g = props.variant) !== null && _g !== void 0 ? _g :
            'root');
          return _b = {
              padding: 0,
              width: theme.get.rem((_h = props.width) !== null && _h !== void 0 ? _h : 128, 'px')
            },
            _b["& .".concat(baseClass, "__input")] = (_c = {
                alignItems: 'center',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 0,
                height: theme.get.rem(theme.spacing.sm + theme.spacing.xs, 'px'),
                padding: "".concat(theme.spacing.xxs).concat(theme.shape.unit, " 0") +
                  " ".concat(theme.spacing.xxs).concat(theme.shape.unit, " ").concat(theme.spacing.xs).concat(theme
                    .shape.unit),
                width: theme.get.rem(((_j = props.width) !== null && _j !== void 0 ? _j : 128) - (theme.spacing.xs +
                  theme.spacing.xxs), 'px'),
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape,
                  'transparent'),
                borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border
                  .shape, (_k = props.color) !== null && _k !== void 0 ? _k : 'primary', (_l = props
                  .colorVariant) !== null && _l !== void 0 ? _l : 'main'),
                '&.invalid': (_d = {
                    borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape
                      .border.shape, 'error', props.color === 'error' ? 'light' : 'main')
                  },
                  _d["& .".concat(baseClass, "__icon > svg")] = {
                    color: theme.get.color('error', 'main'),
                  },
                  _d),
                '&.disabled': (_e = {
                    color: theme.get.color('grey', 'light'),
                    cursor: 'default',
                    borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape
                      .border.shape, 'grey', 'lighter')
                  },
                  _e["& .".concat(baseClass, "__icon > svg")] = {
                    color: theme.get.color('grey', 'lighter'),
                  },
                  _e)
              },
              _c["& .".concat(baseClass, "__selection")] = {
                maxWidth: "calc(100% - ".concat(theme.get.rem(22, 'px'), ")"),
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                textWrap: 'nowrap',
                '& > *': {
                  display: 'block',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  textWrap: 'nowrap',
                },
                '& svg': {
                  color: theme.get.color((_m = props.color) !== null && _m !== void 0 ? _m : 'primary', 'main'),
                },
              },
              _c["& .".concat(baseClass, "__icon")] = {
                alignItems: 'center',
                aspectRatio: '1/1',
                display: 'flex',
                justifyContent: 'center',
                height: '100%',
                width: 'auto',
              },
              _c),
            _b["& .".concat(baseClass, "__options")] = (_f = {
                display: 'flex',
                flexDirection: 'column',
                padding: theme.spacing.xxs,
                gap: theme.spacing.xxs
              },
              _f["& .".concat(baseClass, "__option")] = {
                display: 'block',
                padding: theme.get.rem(theme.spacing.xs, theme.shape.unit),
                minWidth: theme.get.rem(((_o = props.width) !== null && _o !== void 0 ? _o : 128) - (theme.spacing
                  .s + theme.spacing.xxs * 2), 'px'),
                textWrap: 'nowrap',
                '& > svg': {
                  color: theme.get.color((_p = props.color) !== null && _p !== void 0 ? _p : 'primary', 'main'),
                },
                '&.selected': {
                  backgroundColor: theme.get
                    .color((_q = props.color) !== null && _q !== void 0 ? _q : 'primary', (_r = props
                      .colorVariant) !== null && _r !== void 0 ? _r : 'main'),
                  '& > svg': {
                    color: theme.get.color((_s = props.color) !== null && _s !== void 0 ? _s : 'primary', 'text'),
                  },
                }
              },
              _f),
            _b;
        },
      },
      'contained': {
        styles: function(_a) {
          var _b, _c, _d, _e;
          var _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          var baseClass = "".concat(props.name, "-contained");
          return _b = {},
            _b["& .".concat(baseClass, "__input")] = {
              backgroundColor: theme.get.color((_f = props.color) !== null && _f !== void 0 ? _f : 'primary',
                'main'),
              borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border
                .shape, (_g = props.color) !== null && _g !== void 0 ? _g : 'primary', 'main'),
              color: theme.get.color((_h = props.color) !== null && _h !== void 0 ? _h : 'primary', 'text'),
              '&.invalid': (_c = {
                  backgroundColor: theme.get.color('error', props.color === 'error' ? 'light' : 'main'),
                  borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape
                    .border.shape, 'error', props.color === 'error' ? 'light' : 'main')
                },
                _c["& .".concat(baseClass, "__icon > svg")] = {
                  color: theme.get.color('error', 'text'),
                },
                _c),
              '&.disabled': (_d = {
                  color: theme.get.color('grey', 'text'),
                  backgroundColor: theme.get.color('grey', 'lighter'),
                  borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape
                    .border.shape, 'grey', 'lighter')
                },
                _d["& .".concat(baseClass, "__icon > svg")] = {
                  color: theme.get.color('grey', 'text'),
                },
                _d),
              '& svg': {
                color: theme.get.color((_j = props.color) !== null && _j !== void 0 ? _j : 'primary', 'text'),
              },
            },
            _b["& .".concat(baseClass, "__options")] = (_e = {
                backgroundColor: theme.get.color((_k = props.color) !== null && _k !== void 0 ? _k : 'primary',
                  'lighter')
              },
              _e["& .".concat(baseClass, "__option")] = {
                backgroundColor: theme.get.color((_l = props.color) !== null && _l !== void 0 ? _l : 'primary',
                  'light'),
                color: theme.get.color((_m = props.color) !== null && _m !== void 0 ? _m : 'primary', 'text'),
              },
              _e['&.selected'] = {
                backgroundColor: theme.get
                  .color((_o = props.color) !== null && _o !== void 0 ? _o : 'primary', (_p = props
                    .colorVariant) !== null && _p !== void 0 ? _p : 'main'),
                '& > svg': {
                  color: theme.get.color((_q = props.color) !== null && _q !== void 0 ? _q : 'primary', 'text'),
                },
              },
              _e),
            _b;
        },
      },
      'dashed': {
        styles: function(_a) {
          var _b, _c;
          var _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          var baseClass = "".concat(props.name, "-dashed");
          return _b = {},
            _b["& .".concat(baseClass, "__input")] = {
              border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dashed', (_d = props
                  .color) !== null && _d !== void 0 ? _d : 'primary', (_e = props.colorVariant) !== null && _e !==
                void 0 ? _e : 'main'),
              borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dashed', (_f = props
                  .color) !== null && _f !== void 0 ? _f : 'primary', (_g = props.colorVariant) !== null && _g !==
                void 0 ? _g : 'main'),
              '&.invalid': {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dashed', 'error', props
                  .color === 'error' ? 'light' : 'main'),
              },
              '&.disabled': {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dashed', 'grey',
                  'lighter'),
              },
            },
            _b["& .".concat(baseClass, "__options")] = (_c = {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dashed', (_h = props
                    .color) !== null && _h !== void 0 ? _h : 'primary', (_j = props.colorVariant) !== null &&
                  _j !== void 0 ? _j : 'dark')
              },
              _c["& .".concat(baseClass, "__option")] = {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dashed', 'transparent'),
                minWidth: theme.get.rem(((_k = props.width) !== null && _k !== void 0 ? _k : 128) - (theme.spacing
                  .s + theme.spacing.xs * 2), 'px'),
                '&.selected': {
                  backgroundColor: theme.get.color('light', 'main'),
                  border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dashed', (_l = props
                      .color) !== null && _l !== void 0 ? _l : 'primary', (_m = props.colorVariant) !== null &&
                    _m !== void 0 ? _m : 'dark'),
                  '& > svg': {
                    color: theme.get.color((_o = props.color) !== null && _o !== void 0 ? _o : 'primary', 'main'),
                  },
                },
              },
              _c),
            _b;
        },
      },
      'dotted': {
        styles: function(_a) {
          var _b, _c;
          var _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          var baseClass = "".concat(props.name, "-dotted");
          return _b = {},
            _b["& .".concat(baseClass, "__input")] = {
              border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dotted', (_d = props
                  .color) !== null && _d !== void 0 ? _d : 'primary', (_e = props.colorVariant) !== null && _e !==
                void 0 ? _e : 'main'),
              borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dotted', (_f = props
                  .color) !== null && _f !== void 0 ? _f : 'primary', (_g = props.colorVariant) !== null && _g !==
                void 0 ? _g : 'main'),
              '&.invalid': {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dotted', 'error', props
                  .color === 'error' ? 'light' : 'main'),
              },
              '&.disabled': {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dotted', 'grey',
                  'lighter'),
              },
            },
            _b["& .".concat(baseClass, "__options")] = (_c = {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dotted', (_h = props
                    .color) !== null && _h !== void 0 ? _h : 'primary', (_j = props.colorVariant) !== null &&
                  _j !== void 0 ? _j : 'dark')
              },
              _c["& .".concat(baseClass, "__option")] = {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dotted', 'transparent'),
                minWidth: theme.get.rem(((_k = props.width) !== null && _k !== void 0 ? _k : 128) - (theme.spacing
                  .s + theme.spacing.xs * 2), 'px'),
                '&.selected': {
                  backgroundColor: theme.get.color('light', 'main'),
                  border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dotted', (_l = props
                      .color) !== null && _l !== void 0 ? _l : 'primary', (_m = props.colorVariant) !== null &&
                    _m !== void 0 ? _m : 'dark'),
                  '& > svg': {
                    color: theme.get.color((_o = props.color) !== null && _o !== void 0 ? _o : 'primary', 'main'),
                  },
                },
              },
              _c),
            _b;
        },
      },
      'rounded': {
        styles: function(_a) {
          var _b, _c;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          var baseClass = "".concat(props.name, "-rounded");
          return _b = {},
            _b["& .".concat(baseClass, "__input")] = {
              borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
            },
            _b["& .".concat(baseClass, "__options")] = (_c = {
                borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit)
              },
              _c["& .".concat(baseClass, "__option")] = {
                borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
              },
              _c),
            _b;
        },
      },
      'round-contained': {
        styles: function(_a) {
          var _b, _c, _d, _e;
          var _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          var baseClass = "".concat(props.name, "-round-contained");
          return _b = {},
            _b["& .".concat(baseClass, "__input")] = {
              backgroundColor: theme.get.color((_f = props.color) !== null && _f !== void 0 ? _f : 'primary',
                'main'),
              borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border
                .shape, (_g = props.color) !== null && _g !== void 0 ? _g : 'primary', 'main'),
              borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
              color: theme.get.color((_h = props.color) !== null && _h !== void 0 ? _h : 'primary', 'text'),
              '&.invalid': (_c = {
                  backgroundColor: theme.get.color('error', props.color === 'error' ? 'light' : 'main'),
                  borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape
                    .border.shape, 'error', props.color === 'error' ? 'light' : 'main')
                },
                _c["& .".concat(baseClass, "__icon > svg")] = {
                  color: theme.get.color('error', 'text'),
                },
                _c),
              '&.disabled': (_d = {
                  color: theme.get.color('grey', 'text'),
                  backgroundColor: theme.get.color('grey', 'lighter'),
                  borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape
                    .border.shape, 'grey', 'lighter')
                },
                _d["& .".concat(baseClass, "__icon > svg")] = {
                  color: theme.get.color('grey', 'text'),
                },
                _d),
              '& svg': {
                color: theme.get.color((_j = props.color) !== null && _j !== void 0 ? _j : 'primary', 'text'),
              },
            },
            _b["& .".concat(baseClass, "__options")] = (_e = {
                backgroundColor: theme.get.color((_k = props.color) !== null && _k !== void 0 ? _k : 'primary',
                  'lighter'),
                borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit)
              },
              _e["& .".concat(baseClass, "__option")] = {
                backgroundColor: theme.get.color((_l = props.color) !== null && _l !== void 0 ? _l : 'primary',
                  'light'),
                borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
                color: theme.get.color((_m = props.color) !== null && _m !== void 0 ? _m : 'primary', 'text'),
              },
              _e['&.selected'] = {
                backgroundColor: theme.get
                  .color((_o = props.color) !== null && _o !== void 0 ? _o : 'primary', (_p = props
                    .colorVariant) !== null && _p !== void 0 ? _p : 'main'),
                '& > svg': {
                  color: theme.get.color((_q = props.color) !== null && _q !== void 0 ? _q : 'primary', 'text'),
                },
              },
              _e),
            _b;
        },
      },
      'round-outlined': {
        styles: function(_a) {
          var _b, _c;
          var _d, _e, _f, _g, _h, _j, _k, _l;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          var baseClass = "".concat(props.name, "-round-outlined");
          return _b = {},
            _b["& .".concat(baseClass, "__input")] = {
              border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape, (
                  _d = props.color) !== null && _d !== void 0 ? _d : 'primary', (_e = props.colorVariant) !==
                null && _e !== void 0 ? _e : 'main'),
              borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
              '&.invalid': {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape,
                  'error', props.color === 'error' ? 'light' : 'main'),
              },
              '&.disabled': {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape,
                  'grey', 'lighter'),
              },
            },
            _b["& .".concat(baseClass, "__options")] = (_c = {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape,
                  (_f = props.color) !== null && _f !== void 0 ? _f : 'primary', (_g = props.colorVariant) !==
                  null && _g !== void 0 ? _g : 'dark'),
                borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit)
              },
              _c["& .".concat(baseClass, "__option")] = {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape,
                  'transparent'),
                borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
                minWidth: theme.get.rem(((_h = props.width) !== null && _h !== void 0 ? _h : 128) - (theme.spacing
                  .s + theme.spacing.xs * 2), 'px'),
                '&.selected': {
                  backgroundColor: theme.get.color('light', 'main'),
                  border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border
                    .shape, (_j = props.color) !== null && _j !== void 0 ? _j : 'primary', (_k = props
                      .colorVariant) !== null && _k !== void 0 ? _k : 'dark'),
                  '& > svg': {
                    color: theme.get.color((_l = props.color) !== null && _l !== void 0 ? _l : 'primary', 'main'),
                  },
                }
              },
              _c),
            _b;
        },
      },
      'outlined': {
        styles: function(_a) {
          var _b, _c;
          var _d, _e, _f, _g, _h, _j, _k, _l;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          var baseClass = "".concat(props.name, "-outlined");
          return _b = {},
            _b["& .".concat(baseClass, "__input")] = {
              border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape, (
                  _d = props.color) !== null && _d !== void 0 ? _d : 'primary', (_e = props.colorVariant) !==
                null && _e !== void 0 ? _e : 'main'),
              '&.invalid': {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape,
                  'error', props.color === 'error' ? 'light' : 'main'),
              },
              '&.disabled': {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape,
                  'grey', 'lighter'),
              },
            },
            _b["& .".concat(baseClass, "__options")] = (_c = {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape,
                  (_f = props.color) !== null && _f !== void 0 ? _f : 'primary', (_g = props.colorVariant) !==
                  null && _g !== void 0 ? _g : 'dark')
              },
              _c["& .".concat(baseClass, "__option")] = {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape,
                  'transparent'),
                minWidth: theme.get.rem(((_h = props.width) !== null && _h !== void 0 ? _h : 128) - (theme.spacing
                  .s + theme.spacing.xs * 2), 'px'),
                '&.selected': {
                  backgroundColor: theme.get.color('light', 'main'),
                  border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border
                    .shape, (_j = props.color) !== null && _j !== void 0 ? _j : 'primary', (_k = props
                      .colorVariant) !== null && _k !== void 0 ? _k : 'dark'),
                  '& > svg': {
                    color: theme.get.color((_l = props.color) !== null && _l !== void 0 ? _l : 'primary', 'main'),
                  },
                },
              },
              _c),
            _b;
        },
      },
      'outlined-sandwich': {
        styles: function(_a) {
          var _b, _c;
          var _d, _e, _f, _g, _h, _j, _k, _l;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          var baseClass = "".concat(props.name, "-outlined-sandwich");
          return _b = {},
            _b["& .".concat(baseClass, "__input")] = {
              border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape, (
                  _d = props.color) !== null && _d !== void 0 ? _d : 'primary', (_e = props.colorVariant) !==
                null && _e !== void 0 ? _e : 'main'),
              borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
              '&.invalid': {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape,
                  'error', props.color === 'error' ? 'light' : 'main'),
              },
              '&.disabled': {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape,
                  'grey', 'lighter'),
              },
            },
            _b["& .".concat(baseClass, "__options")] = (_c = {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape,
                  (_f = props.color) !== null && _f !== void 0 ? _f : 'primary', (_g = props.colorVariant) !==
                  null && _g !== void 0 ? _g : 'dark'),
                borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit)
              },
              _c["& .".concat(baseClass, "__option")] = {
                border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape,
                  'transparent'),
                borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
                minWidth: theme.get.rem(((_h = props.width) !== null && _h !== void 0 ? _h : 128) - (theme.spacing
                  .s + theme.spacing.xs * 2), 'px'),
                '&:not(:first-of-type)': {
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                },
                '&:not(:last-of-type)': {
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                },
                '&.selected': {
                  backgroundColor: theme.get.color('light', 'main'),
                  border: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border
                    .shape, (_j = props.color) !== null && _j !== void 0 ? _j : 'primary', (_k = props
                      .colorVariant) !== null && _k !== void 0 ? _k : 'dark'),
                  '& > svg': {
                    color: theme.get.color((_l = props.color) !== null && _l !== void 0 ? _l : 'primary', 'main'),
                  },
                },
              },
              _c),
            _b;
        },
      },
      'sandwich': {
        styles: function(_a) {
          var _b, _c;
          var _d;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          var baseClass = "".concat(props.name, "-sandwich");
          return _b = {},
            _b["& .".concat(baseClass, "__input")] = {
              borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
            },
            _b["& .".concat(baseClass, "__options")] = (_c = {
                borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit)
              },
              _c["& .".concat(baseClass, "__option")] = {
                borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
                minWidth: theme.get.rem(((_d = props.width) !== null && _d !== void 0 ? _d : 128) - (theme.spacing
                  .s + theme.spacing.xs * 2), 'px'),
              },
              _c["& .".concat(baseClass, "__option:not(:first-of-type)")] = {
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              },
              _c["& .".concat(baseClass, "__option:not(:last-of-type)")] = {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
              _c),
            _b;
        },
      },
      'shadowed': {
        styles: function(_a) {
          var _b, _c;
          var _d, _e, _f, _g, _h, _j;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          var baseClass = "".concat(props.name, "-shadowed");
          return _b = {},
            _b["& .".concat(baseClass, "__input")] = {
              borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border
                .shape, 'transparent'),
              boxShadow: theme.get.shadow(__assign(__assign({}, theme.shadow.bottom), {
                color: theme.get.rgba((_d = props.color) !== null && _d !== void 0 ? _d : 'primary', 0.4,
                  'main')
              })),
              '&.invalid': {
                borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border
                  .shape, 'transparent'),
                boxShadow: theme.get.shadow(__assign(__assign({}, theme.shadow.bottom), {
                  color: theme.get.rgba('error', 0.2, props.color === 'error' ? 'light' : 'main')
                })),
              },
              '&.disabled': {
                borderBottom: theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border
                  .shape, 'transparent'),
                boxShadow: theme.get.shadow(__assign(__assign({}, theme.shadow.bottom), {
                  color: theme.get.rgba('grey', 0.2, 'lighter')
                })),
              },
            },
            _b["& .".concat(baseClass, "__options")] = (_c = {
                boxShadow: theme.get.shadow(__assign(__assign({}, theme.shadow.bottom), {
                  color: theme.get.rgba((_e = props.color) !== null && _e !== void 0 ? _e : 'primary', 0.4,
                    'main')
                }))
              },
              _c["& .".concat(baseClass, "__option")] = {
                boxShadow: theme.get.shadow(__assign(__assign({}, theme.shadow.bottom), {
                  color: theme.get.rgba((_f = props.color) !== null && _f !== void 0 ? _f : 'primary', 0.4,
                    'main')
                })),
                '&.selected': {
                  backgroundColor: theme.get.color('light', 'main'),
                  boxShadow: theme.get.shadow(__assign(__assign({}, theme.shadow.bottom), {
                    color: theme.get.rgba((_g = props.color) !== null && _g !== void 0 ? _g : 'primary', 0.4,
                      'dark')
                  })),
                  color: theme.get.rgba((_h = props.color) !== null && _h !== void 0 ? _h : 'primary', 0.4, 'dark'),
                  '& > svg': {
                    color: theme.get.color((_j = props.color) !== null && _j !== void 0 ? _j : 'primary', 'main'),
                  },
                },
              },
              _c),
            _b;
        },
      },
    },
  },
};
export default Select;
