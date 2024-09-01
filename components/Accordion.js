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
  jsxs as _jsxs,
  jsx as _jsx
} from "react/jsx-runtime";
import {
  forwardRef,
  createContext,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  Children,
  useEffect,
} from 'react';
import Actions from './Accordion/Actions';
import Details from './Accordion/Details';
import MainBox from './Box';
import Summary from './Accordion/Summary';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../theme';
import {
  validateChildComponent,
  validateChildComponentByTypes
} from "../utils";
import {
  throwError
} from '../error';
var DISPLAY_NAME = 'C4tAccordion';
export {
  default as Actions
}
from './Accordion/Actions';
export {
  default as Details
}
from './Accordion/Details';
export {
  default as Group
}
from './Accordion/Group';
export {
  default as Summary
}
from './Accordion/Summary';
var initialAccordionState = {
  disabled: false,
  expanded: false,
  toggleExpanded: function() {
    return void 0;
  },
};
export var AccordionContext = createContext(initialAccordionState);
export var Box = forwardRef(function(_a, ref) {
  var childrenProp = _a.children,
    _b = _a.name,
    name = _b === void 0 ? DISPLAY_NAME : _b,
    inputProps = __rest(_a, ["children", "name"]);
  var _c = useState(initialAccordionState),
    state = _c[0],
    setState = _c[1];
  var withProps = useDefaultProps(inputProps, name);
  var _d = useMemo(function() {
      var _a = Children.toArray(childrenProp),
        summary = _a[0],
        children = _a.slice(1);
      if (!validateChildComponent('Accordion', summary, 'AccordionSummary', Summary, true)) {
        throwError('COT-2006').then(function() {});
      }
      for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
        var child = children_1[_i];
        if (child && !validateChildComponentByTypes('Accordion', child, {
            AccordionActions: Actions,
            AccordionDetails: Details,
          }, true)) {
          throwError('COT-2007').then(function() {});
        }
      }
      return [summary, children];
    }, [childrenProp]),
    summary = _d[0],
    children = _d[1];
  var innerRef = useRef(null);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  var toggleExpanded = useCallback(function() {
    return setState(function(prevState) {
      var _a;
      (_a = withProps.onChange) === null || _a === void 0 ? void 0 : _a.call(withProps, !prevState
      .expanded);
      return __assign(__assign({}, prevState), {
        expanded: !prevState.expanded
      });
    });
  }, [setState]);
  useImperativeHandle(ref, function() {
    return innerRef.current;
  }, []);
  useEffect(function() {
    setState(function(prevState) {
      var _a;
      return __assign(__assign({}, prevState), {
        expanded: (_a = withProps.expanded) !== null && _a !== void 0 ? _a : false
      });
    });
  }, [withProps.expanded]);
  return (_jsx(AccordionContext.Provider, __assign({
    value: __assign(__assign({}, state), {
      toggleExpanded: toggleExpanded
    })
  }, {
    children: _jsxs(MainBox, __assign({
      className: getClassName(withProps, name, withProps.variant),
      jCss: jCss,
      ref: innerRef
    }, _objectWithoutProperties(withProps, [
      'className',
      'expanded',
      'jCss',
      'onChange',
      'variant',
    ]), {
      children: [summary, children]
    }))
  })));
});
Box.displayName = DISPLAY_NAME;
export default Box;
