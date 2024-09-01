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
  jsx as _jsx,
  Fragment as _Fragment,
  jsxs as _jsxs
} from "react/jsx-runtime";
import {
  forwardRef,
  useCallback,
  useContext,
} from 'react';
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';
import Box from '../Box';
import Button from '../Button';
import Icon from '../Icon';
import {
  Typography
} from '../index';
import _objectWithoutProperties from '../../utils/_objectWithoutProperties';
import styled, {
  getClassName
} from '../../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../../theme';
import {
  DatePickerContext,
  DatePickerViewType
} from '../../context/date-picker';
var DISPLAY_NAME = 'C4tPickerControls';
var Section = styled('div')();
export var PickerControls = forwardRef(function(_a, ref) {
  var _b;
  var _c = _a.name,
    name = _c === void 0 ? DISPLAY_NAME : _c,
    inputProps = __rest(_a, ["name"]);
  var _d = useContext(DatePickerContext),
    previewDate = _d.previewDate,
    inView = _d.inView,
    minus = _d.minus,
    plus = _d.plus,
    switchView = _d.switchView;
  var withProps = useDefaultProps(inputProps, name);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  var moveBackward = useCallback(function(multiplier) {
    switch (inView) {
      case DatePickerViewType.day:
        minus({
          month: multiplier
        });
        break;
      case DatePickerViewType.month:
        return;
      case DatePickerViewType.year:
        minus({
          years: 20 * multiplier
        });
        break;
    }
  }, [inView]);
  var moveForward = useCallback(function(multiplier) {
    switch (inView) {
      case DatePickerViewType.day:
        plus({
          month: multiplier
        });
        break;
      case DatePickerViewType.month:
        return;
      case DatePickerViewType.year:
        plus({
          years: 20 * multiplier
        });
        break;
    }
  }, [inView]);
  return (_jsxs(Box, __assign({
    className: getClassName(withProps, name, withProps.variant),
    jCss: jCss,
    ref: ref,
    tag: 'section',
    variant: (_b = withProps.boxVariant) !== null && _b !== void 0 ? _b : 'auto-fit-no-padding'
  }, _objectWithoutProperties(withProps, [
    'boxVariant',
    'className',
    'jCss',
    'variant',
  ]), {
    children: [_jsx(Section, __assign({
      className: 'before'
    }, {
      children: inView !== DatePickerViewType.month && (_jsxs(_Fragment, {
        children: [_jsx(Button, __assign({
          variant: 'icon',
          onClick: function() {
            return moveBackward(2);
          }
        }, {
          children: _jsx(Icon, {
            icon: faAnglesLeft
          })
        })), _jsx(Button, __assign({
          variant: 'icon',
          onClick: function() {
            return moveBackward(1);
          }
        }, {
          children: _jsx(Icon, {
            icon: faAngleLeft
          })
        }))]
      }))
    })), _jsxs(Section, __assign({
      className: 'meddle'
    }, {
      children: [_jsx(Button, __assign({
        onClick: function() {
          return switchView(DatePickerViewType.month);
        }
      }, {
        children: _jsx(Typography, __assign({
          variant: "h6"
        }, {
          children: previewDate.toFormat('MMMM')
        }))
      })), _jsx(Button, __assign({
        onClick: function() {
          return switchView(DatePickerViewType.year);
        }
      }, {
        children: _jsx(Typography, __assign({
          variant: "h6"
        }, {
          children: previewDate.toFormat('yyyy')
        }))
      }))]
    })), _jsx(Section, __assign({
      className: 'after'
    }, {
      children: inView !== DatePickerViewType.month && (_jsxs(_Fragment, {
        children: [_jsx(Button, __assign({
          variant: 'icon',
          onClick: function() {
            return moveForward(1);
          }
        }, {
          children: _jsx(Icon, {
            icon: faAngleRight
          })
        })), _jsx(Button, __assign({
          variant: 'icon',
          onClick: function() {
            return moveForward(2);
          }
        }, {
          children: _jsx(Icon, {
            icon: faAnglesRight
          })
        }))]
      }))
    }))]
  })));
});
PickerControls.displayName = DISPLAY_NAME;
export default PickerControls;
