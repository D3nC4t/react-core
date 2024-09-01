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
import {
  makeBorder
} from './Button';
var makeVariant = function(theme, color, variant) {
  var styles = {};
  switch (variant) {
    case 'root':
      styles = {
        '& > button': {
          color: 'inherit',
          '&:after': {
            background: theme.get.rgba(color, 0.3, 'lighter'),
          },
          '&:focus-visible': {
            outline: "".concat(theme.color[color].darker, " solid 1px"),
          },
          '&:hover, &:focus': {
            color: 'inherit',
            '& > svg': {
              color: theme.color[color].dark,
            },
          },
        },
      };
      break;
    case 'contained':
      styles = {
        '& > button': {
          backgroundColor: theme.color[color].main,
          borderRight: makeBorder(theme, 'solid', color, 'dark'),
          color: theme.color[color].text,
          '&:hover, &:focus': {
            backgroundColor: theme.color[color].dark,
            color: theme.color[color].text,
            '& > svg': {
              color: theme.color[color].text,
            },
          },
          '&:last-of-type': {
            borderRight: 0,
          },
          '&[disabled], &[disabled]:hover': {
            color: theme.color.grey.text,
            backgroundColor: theme.color.grey.lighter,
            border: makeBorder(theme, 'solid', 'grey', 'lighter'),
          },
        },
      };
      break;
    case 'dashed':
      styles = {
        '& > button': {
          color: theme.color[color].main,
          border: makeBorder(theme, 'dashed', color),
          '&:hover, &:focus': {
            color: theme.color[color].dark,
            borderColor: theme.color[color].dark,
            '& > svg': {
              color: theme.color[color].dark,
            },
          },
          '&[disabled], &[disabled]:hover': {
            color: theme.color.grey.lighter,
            border: makeBorder(theme, 'dashed', 'grey', 'lighter'),
          },
          '&:not(:last-of-type)': {
            borderRightWidth: function(theme, props) {
              return props.orientation === 'vertical' ?
                "".concat(theme.shape.border.size).concat(theme.shape.border.unit) :
                0;
            },
            borderBottomWidth: function(theme, props) {
              return props.orientation !== 'vertical' ?
                "".concat(theme.shape.border.size).concat(theme.shape.border.unit) :
                0;
            },
          },
        },
      };
      break;
    case 'dotted':
      styles = {
        '& > button': {
          color: theme.color[color].main,
          border: makeBorder(theme, 'dotted', color),
          '&:hover, &:focus': {
            color: theme.color[color].dark,
            borderColor: theme.color[color].dark,
            '& > svg': {
              color: theme.color[color].dark,
            },
          },
          '&[disabled], &[disabled]:hover': {
            color: theme.color.grey.lighter,
            border: makeBorder(theme, 'dotted', 'grey', 'lighter'),
          },
          '&:not(:last-of-type)': {
            borderRightWidth: function(theme, props) {
              return props.orientation === 'vertical' ?
                "".concat(theme.shape.border.size).concat(theme.shape.border.unit) :
                0;
            },
            borderBottomWidth: function(theme, props) {
              return props.orientation !== 'vertical' ?
                "".concat(theme.shape.border.size).concat(theme.shape.border.unit) :
                0;
            },
          },
        },
      };
      break;
    case 'outlined':
      styles = {
        '& > button': {
          color: theme.color[color].main,
          border: makeBorder(theme, 'solid', color),
          '&:hover, &:focus': {
            color: theme.color[color].dark,
            borderColor: theme.color[color].dark,
            '& > svg': {
              color: theme.color[color].dark,
            },
          },
          '&[disabled], &[disabled]:hover': {
            color: theme.color.grey.lighter,
            border: makeBorder(theme, 'solid', 'grey', 'lighter'),
          },
          '&:not(:last-of-type)': {
            borderRightWidth: function(theme, props) {
              return props.orientation === 'vertical' ?
                "".concat(theme.shape.border.size).concat(theme.shape.border.unit) :
                0;
            },
            borderBottomWidth: function(theme, props) {
              return props.orientation !== 'vertical' ?
                "".concat(theme.shape.border.size).concat(theme.shape.border.unit) :
                0;
            },
          },
        },
      };
      break;
    case 'shadowed':
      styles = {
        '& > button': {
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
          '&[disabled], &[disabled]:hover': {
            color: theme.color.grey.lighter,
            boxShadow: theme.get.shadow(__assign(__assign({}, theme.shadow.bottomRight), {
              color: theme.get.rgba('grey', 0.2, 'lighter')
            })),
          },
        },
      };
      break;
    case 'text':
      styles = {
        '& > button': {
          color: theme.color[color].main,
          '&:hover, &:focus': {
            color: theme.color[color].dark,
            '& > svg': {
              color: theme.color[color].dark,
            },
          },
          '&[disabled], &[disabled]:hover': {
            color: theme.color.grey.lighter,
          },
        },
      };
      break;
    case 'icon': {
      var p = theme.typography.variants.p;
      styles = {
        '& > button': {
          borderRadius: '100%',
          '& > span': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            aspectRatio: '1 / 1',
            width: 'auto',
            height: p.defaultStyles.lineHeight,
            '& > svg': {
              color: "".concat(theme.color[color].main),
            },
          },
          '&:hover, &:focus': {
            '& > span > svg': {
              color: theme.color[color].dark,
            },
          },
          '&:first-of-type': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
          '&:last-of-type': {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
          '&:not(:first-of-type):not(:last-of-type)': {
            borderRadius: 0,
          },
          '&[disabled], &[disabled]:hover': {
            '& > span > svg': {
              color: theme.color.grey.lighter,
            },
          },
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
var ButtonGroup = function(theme) {
  return ({
    C4tButtonGroup: {
      defaultProps: {
        color: 'primary',
        variant: 'text',
        size: 'medium',
      },
      variants: {
        'root': {
          styles: __assign({
            '& > button': {
              border: 'none',
              borderRadius: 0,
              '&:first-of-type': {
                borderTopLeftRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
                borderTopRightRadius: function(theme, props) {
                  return props.orientation === 'vertical' ?
                    "".concat(theme.shape.border.radius).concat(theme.shape.border.unit) :
                    0;
                },
                borderBottomLeftRadius: function(theme, props) {
                  return props.orientation !== 'vertical' ?
                    "".concat(theme.shape.border.radius).concat(theme.shape.border.unit) :
                    0;
                },
              },
              '&:last-of-type': {
                borderTopRightRadius: function(theme, props) {
                  return props.orientation !== 'vertical' ?
                    "".concat(theme.shape.border.radius).concat(theme.shape.border.unit) :
                    0;
                },
                borderBottomLeftRadius: function(theme, props) {
                  return props.orientation == 'vertical' ?
                    "".concat(theme.shape.border.radius).concat(theme.shape.border.unit) :
                    0;
                },
                borderBottomRightRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
              },
              '&[disabled], &[disabled]:hover': {
                color: theme.color.grey.lighter,
              },
            }
          }, makeColors(theme, 'root')),
        },
        'contained': {
          styles: __assign({}, makeColors(theme, 'contained')),
        },
        'dashed': {
          styles: __assign({}, makeColors(theme, 'dashed')),
        },
        'dotted': {
          styles: __assign({}, makeColors(theme, 'dotted')),
        },
        'outlined': {
          styles: __assign({}, makeColors(theme, 'outlined')),
        },
        'shadowed': {
          styles: __assign({}, makeColors(theme, 'shadowed')),
        },
        'text': {
          styles: __assign({}, makeColors(theme, 'text')),
        },
        'icon': {
          styles: __assign({}, makeColors(theme, 'icon')),
        },
      },
    },
  });
};
export default ButtonGroup;
