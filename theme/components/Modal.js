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
  TShirtSize
} from '../../types';
var Modal = function(theme) {
  var _a;
  return ({
    C4tModal: {
      defaultProps: {
        variant: 'rounded',
        $bgColor: 'white',
        $bgColorVariant: 'main',
      },
      variants: {
        'root': {
          styles: (_a = {
              content: '""',
              height: '80%',
              width: '50%',
              minWidth: "".concat(theme.breakpoints.values.s).concat(theme.breakpoints.unit)
            },
            _a[theme.breakpoints.down(TShirtSize.s)] = {
              width: '95%',
              minWidth: '95%',
            },
            _a),
        },
        'bordered': {
          props: {
            $bSize: theme.shape.border.size,
            $bUnit: theme.shape.border.unit,
          },
          styles: {},
        },
        'round-bordered': {
          props: {
            $bSize: theme.shape.border.size,
            $bUnit: theme.shape.border.unit,
            $bRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
          },
          styles: function(props) {
            return (__assign(__assign(__assign(__assign({}, (props.portalVariant === 'bottom-right' && {
              borderBottomRightRadius: 0,
            })), (props.portalVariant === 'bottom-left' && {
              borderBottomLeftRadius: 0,
            })), (props.portalVariant === 'top-right' && {
              borderTopRightRadius: 0,
            })), (props.portalVariant === 'top-left' && {
              borderTopLeftRadius: 0,
            })));
          },
        },
        'rounded': {
          props: {
            $bRadius: "".concat(theme.shape.border.radius).concat(theme.shape.border.unit),
          },
          styles: function(props) {
            return (__assign(__assign(__assign(__assign({}, (props.portalVariant === 'bottom-right' && {
              borderBottomRightRadius: 0,
            })), (props.portalVariant === 'bottom-left' && {
              borderBottomLeftRadius: 0,
            })), (props.portalVariant === 'top-right' && {
              borderTopRightRadius: 0,
            })), (props.portalVariant === 'top-left' && {
              borderTopLeftRadius: 0,
            })));
          },
        },
      },
    },
  });
};
export default Modal;
