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
export var makeBorder = function(theme, shape, color, colorVariant) {
  return theme.get.border(theme.shape.border.size, theme.shape.border.unit, shape, color, colorVariant !== null &&
    colorVariant !== void 0 ? colorVariant : 'main');
};
var makeVariant = function(theme, color, variant) {
  var styles = {};
  switch (variant) {
    case 'root':
      styles = {
        '&:after': {
          background: theme.get.rgba(color, 0.3, 'lighter'),
        },
        '&:focus-visible': {
          outline: "".concat(theme.color[color].darker, " solid 1px"),
        },
        '&:hover, &:focus': {
          '& > svg': {
            color: theme.color[color].dark,
          },
        }
      };
      break;
    case 'contained':
      styles = {
        backgroundColor: theme.color[color].main,
        border: makeBorder(theme, 'solid', color),
        color: theme.color[color].text,
        '&:hover, &:focus': {
          backgroundColor: theme.color[color].dark,
          color: theme.color[color].text,
          '& > svg': {
            color: theme.color[color].text,
          },
        },
      };
      break;
    case 'dashed':
      styles = {
        color: theme.color[color].main,
        border: makeBorder(theme, 'dashed', color),
        '&:hover, &:focus': {
          color: theme.color[color].dark,
          borderColor: theme.color[color].dark,
          '& > svg': {
            color: theme.color[color].dark,
          },
        },
      };
      break;
    case 'dotted':
      styles = {
        color: theme.color[color].main,
        border: makeBorder(theme, 'dotted', color),
        '&:hover, &:focus': {
          color: theme.color[color].dark,
          borderColor: theme.color[color].dark,
          '& > svg': {
            color: theme.color[color].dark,
          },
        },
      };
      break;
    case 'outlined':
      styles = {
        color: theme.color[color].main,
        border: makeBorder(theme, 'solid', color),
        '&:hover, &:focus': {
          color: theme.color[color].dark,
          borderColor: theme.color[color].dark,
          '& > svg': {
            color: theme.color[color].dark,
          },
        },
      };
      break;
    case 'shadowed':
      styles = {
        color: theme.color[color].main,
        boxShadow: theme.get.shadow(__assign(__assign({}, theme.shadow.bottomRight), {
          color: theme.get.rgba(color, 0.2)
        })),
        '&:hover, &:focus': {
          color: theme.color[color].dark,
          boxShadow: theme.get.shadow(__assign(__assign({}, theme.shadow.bottomRight), {
            color: theme.get.rgba(color, 0.4, 'dark')
          })),
          '& > svg': {
            color: theme.color[color].dark,
          },
        },
      };
      break;
    case 'text':
      styles = {
        color: theme.color[color].main,
        '&:hover, &:focus': {
          color: theme.color[color].dark,
          '& > svg': {
            color: theme.color[color].dark,
          },
        },
      };
      break;
    case 'icon': {
      var p = theme.typography.variants.p;
      styles = {
        borderRadius: '100%',
        color: theme.color[color].main,
        '& > span': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          aspectRatio: '1 / 1',
          width: 'auto',
          height: p.defaultStyles.lineHeight,
        },
        '&:hover, &:focus': {
          color: theme.color[color].dark,
        },
      };
      break;
    }
  }
  return styles;
};
var makeColors = function(theme, variant) {
  var colors = {};
  for (var _i = 0, _a = Object.keys(theme.color); _i < _a.length; _i++) {
    var color = _a[_i];
    colors["&[color=\"".concat(color, "\"]")] = makeVariant(theme, color, variant);
  }
  return colors;
};
var Button = function(theme) {
  return ({
    C4tButton: {
      defaultProps: {
        color: 'primary',
        variant: 'text',
        size: 'medium',
        typographyProps: {
          variant: 'p',
          tag: 'span',
        },
      },
      variants: {
        'root': {
          props: {
            endIconProps: function(props) {
              var _a;
              return ({
                color: (_a = props.color) !== null && _a !== void 0 ? _a : 'primary',
                colorVariant: 'main',
              });
            },
            startIconProps: function(props) {
              var _a;
              return ({
                color: (_a = props.color) !== null && _a !== void 0 ? _a : 'primary',
                colorVariant: 'main',
              });
            },
          },
          styles: __assign(__assign({
            alignItems: 'center',
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            borderRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
            display: 'flex',
            color: 'inherit',
            gap: theme.spacing.s,
            position: 'relative',
            overflow: 'hidden',
            '&:after': {
              borderRadius: '100%',
              content: '""',
              height: 0,
              left: '50%',
              position: 'absolute',
              top: '50%',
              transformStyle: 'flat',
              transform: 'translate3d(-50%, -50%, 0)',
              transition: 'width .6s ease, height .6s ease',
              width: 0,
            },
            '&:active:after': {
              aspectRatio: '1 / 1',
              width: '150%',
              height: 'auto',
            },
            '&[disabled]:after': {
              display: 'none',
            },
            '&:hover, &:focus': {
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              color: 'inherit',
            },
            '&:focus-visible': {
              outlineOffset: theme.get.rem(theme.spacing.xxs, theme.shape.unit),
            }
          }, makeColors(theme, 'root')), {
            '&[disabled], &[disabled]:hover': {
              color: theme.color.grey.lighter,
              '& > svg': {
                color: theme.color.grey.lighter,
              },
            }
          }),
        },
        'contained': {
          props: {
            endIconProps: function(props) {
              var _a;
              return ({
                color: (_a = props.color) !== null && _a !== void 0 ? _a : 'primary',
                colorVariant: 'text',
              });
            },
            startIconProps: function(props) {
              var _a;
              return ({
                color: (_a = props.color) !== null && _a !== void 0 ? _a : 'primary',
                colorVariant: 'text',
              });
            },
          },
          styles: __assign(__assign({}, makeColors(theme, 'contained')), {
            '&[disabled], &[disabled]:hover': {
              color: theme.color.grey.text,
              backgroundColor: theme.color.grey.lighter,
              border: makeBorder(theme, 'solid', 'grey', 'lighter'),
              '& > svg': {
                color: theme.color.grey.text,
              },
            }
          }),
        },
        'dashed': {
          props: {
            endIconProps: function(props) {
              var _a;
              return ({
                color: (_a = props.color) !== null && _a !== void 0 ? _a : 'primary',
                colorVariant: 'main',
              });
            },
            startIconProps: function(props) {
              var _a;
              return ({
                color: (_a = props.color) !== null && _a !== void 0 ? _a : 'primary',
                colorVariant: 'main',
              });
            },
          },
          styles: __assign(__assign({}, makeColors(theme, 'dashed')), {
            '&[disabled], &[disabled]:hover': {
              border: makeBorder(theme, 'dashed', 'grey', 'lighter'),
              '& > svg': {
                color: theme.color.grey.lighter,
              },
            }
          }),
        },
        'dotted': {
          props: {
            endIconProps: function(props) {
              var _a;
              return ({
                color: (_a = props.color) !== null && _a !== void 0 ? _a : 'primary',
                colorVariant: 'main',
              });
            },
            startIconProps: function(props) {
              var _a;
              return ({
                color: (_a = props.color) !== null && _a !== void 0 ? _a : 'primary',
                colorVariant: 'main',
              });
            },
          },
          styles: __assign(__assign({}, makeColors(theme, 'dotted')), {
            '&[disabled], &[disabled]:hover': {
              border: makeBorder(theme, 'dotted', 'grey', 'lighter'),
              '& > svg': {
                color: theme.color.grey.lighter,
              },
            }
          }),
        },
        'outlined': {
          props: {
            endIconProps: function(props) {
              var _a;
              return ({
                color: (_a = props.color) !== null && _a !== void 0 ? _a : 'primary',
                colorVariant: 'main',
              });
            },
            startIconProps: function(props) {
              var _a;
              return ({
                color: (_a = props.color) !== null && _a !== void 0 ? _a : 'primary',
                colorVariant: 'main',
              });
            },
          },
          styles: __assign(__assign({}, makeColors(theme, 'outlined')), {
            '&[disabled], &[disabled]:hover': {
              border: makeBorder(theme, 'solid', 'grey', 'lighter'),
              '& > svg': {
                color: theme.color.grey.lighter,
              },
            }
          }),
        },
        'shadowed': {
          props: {
            endIconProps: function(props) {
              var _a;
              return ({
                color: (_a = props.color) !== null && _a !== void 0 ? _a : 'primary',
                colorVariant: 'main',
              });
            },
            startIconProps: function(props) {
              var _a;
              return ({
                color: (_a = props.color) !== null && _a !== void 0 ? _a : 'primary',
                colorVariant: 'main',
              });
            },
          },
          styles: __assign(__assign({}, makeColors(theme, 'shadowed')), {
            '&[disabled], &[disabled]:hover': {
              boxShadow: theme.get.shadow(__assign(__assign({}, theme.shadow.bottomRight), {
                color: theme.get.rgba('grey', 0.2, 'lighter')
              })),
              '& > svg': {
                color: theme.color.grey.lighter,
              },
            }
          }),
        },
        'text': {
          props: {
            endIconProps: function(props) {
              var _a;
              return ({
                color: (_a = props.color) !== null && _a !== void 0 ? _a : 'primary',
                colorVariant: 'main',
              });
            },
            startIconProps: function(props) {
              var _a;
              return ({
                color: (_a = props.color) !== null && _a !== void 0 ? _a : 'primary',
                colorVariant: 'main',
              });
            },
          },
          styles: __assign(__assign({}, makeColors(theme, 'text')), {
            '&[disabled], &[disabled]:hover': {
              color: theme.color.grey.lighter,
              '& > svg': {
                color: theme.color.grey.lighter,
              },
            }
          }),
        },
        'icon': {
          styles: __assign(__assign({}, makeColors(theme, 'icon')), {
            '&[disabled], &[disabled]:hover': {
              color: theme.color.grey.lighter,
            }
          }),
        },
      },
    },
  });
};
export default Button;
