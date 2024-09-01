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
  cloneElement,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import Box from '../Box';
import _objectWithoutProperties from '../../utils/_objectWithoutProperties';
import Accordion from "../Accordion";
import {
  getClassName
} from '../../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../../theme';
import {
  validateChildComponent
} from "../../utils";
var DISPLAY_NAME = 'C4tAccordionGroup';
export var Group = forwardRef(function(_a, ref) {
  var _b;
  var children = _a.children,
    _c = _a.name,
    name = _c === void 0 ? DISPLAY_NAME : _c,
    inputProps = __rest(_a, ["children", "name"]);
  var _d = useState(null),
    expanded = _d[0],
    setExpanded = _d[1];
  var $groups = useMemo(function() {
    var _a;
    var $groups = [];
    var index = 0;
    if (!children)
      return undefined;
    var _loop_1 = function(child) {
      var key = (_a = child.key) !== null && _a !== void 0 ? _a : "".concat(index);
      validateChildComponent('AccordionGroup', child, 'Accordion', Accordion);
      $groups.push(cloneElement(child, __assign(__assign(__assign({}, child.props), {
        key: key
      }), {
        expanded: expanded === key,
        onChange: function() {
          return setExpanded(key);
        },
      })));
      index++;
    };
    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
      var child = children_1[_i];
      _loop_1(child);
    }
    return $groups;
  }, [children, expanded]);
  var withProps = useDefaultProps(inputProps, name);
  var innerRef = useRef(null);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  useImperativeHandle(ref, function() {
    return innerRef.current;
  }, []);
  return (_jsx(Box, __assign({
    className: getClassName(withProps, name, withProps.variant),
    jCss: jCss,
    ref: innerRef
  }, _objectWithoutProperties(withProps, [
    'className',
    'jCss',
    'variant',
  ]), {
    children: $groups || ((_b = withProps.items) === null || _b === void 0 ? void 0 : _b.map(function(
    item) {
      return (_jsxs(Accordion, __assign({
        expanded: expanded === item.groupName,
        onChange: function() {
          return setExpanded(item.groupName);
        }
      }, {
        children: [item.summary, item.details, item.actions]
      }), item.groupName));
    }))
  })));
});
Group.displayName = DISPLAY_NAME;
export default Group;
