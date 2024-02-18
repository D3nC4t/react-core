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
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import Portal from './Portal';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import {
  debounce,
  getRem
} from '../utils';
import {
  useDefaultProps,
  useVariantJCss
} from '../theme';
import {
  PopoverAnchorType,
} from '../types';
var DISPLAY_NAME = 'C4tPopover';

function getOffsetTop(rect, vertical) {
  var offset = 0;
  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }
  return offset;
}

function getOffsetLeft(rect, horizontal) {
  var offset = 0;
  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }
  return offset;
}

function getTransformOriginValue(transformOrigin) {
  return [
    transformOrigin.horizontal,
    transformOrigin.vertical
  ].map(function(n) {
    return typeof n === 'number' ? getRem(n) : n;
  }).join(' ');
}

function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}
export var Popover = forwardRef(function(_a, ref) {
  var _b, _c, _d, _e, _f, _g, _h, _j;
  var children = _a.children,
    _k = _a.name,
    name = _k === void 0 ? DISPLAY_NAME : _k,
    inputProps = __rest(_a, ["children", "name"]);
  var _l = useState(false),
    isOpen = _l[0],
    setIsOpen = _l[1];
  var _m = useState(null),
    $anchor = _m[0],
    set$anchor = _m[1];
  var _o = useState(PopoverAnchorType.none),
    anchorReference = _o[0],
    setAnchorReference = _o[1];
  var withProps = useDefaultProps(inputProps, name);
  var innerRef = useRef(null);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  var setupAnchor = useCallback(function() {
    var _a;
    var $el = (_a = resolveAnchorEl(withProps.$anchorEl)) !== null && _a !== void 0 ? _a : innerRef.current;
    set$anchor($el !== null && $el !== void 0 ? $el : document.body);
    if ('$anchorPosition' in withProps && withProps.$anchorPosition) {
      setAnchorReference(PopoverAnchorType.anchorPosition);
      return;
    }
    setAnchorReference($el ? PopoverAnchorType.anchorEl : PopoverAnchorType.none);
  }, [
    innerRef,
    withProps.$anchorEl,
    withProps.$anchorPosition,
  ]);
  var getAnchorOffset = useCallback(function() {
    var _a, _b, _c, _d, _e, _f;
    if (anchorReference === PopoverAnchorType.anchorPosition) {
      if (process.env.NODE_ENV !== 'production') {
        if (!((_a = withProps.$anchorPosition) === null || _a === void 0 ? void 0 : _a.top)) {
          console.error('C4T: You need to provide a `$anchorPosition.top` prop');
        }
        if (!((_b = withProps.$anchorPosition) === null || _b === void 0 ? void 0 : _b.left)) {
          console.error('C4T: You need to provide a `$anchorPosition.left` prop');
        }
      }
      return withProps.$anchorPosition;
    }
    var anchorElement = $anchor && $anchor.nodeType === 1 ? $anchor : document.body;
    var box = anchorElement.getBoundingClientRect();
    if (process.env.NODE_ENV !== 'production' &&
      (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0)) {
      console.warn([
        'C4t: The `$anchorEl` prop provided to the component is invalid.',
        'The anchor element should be part of the document layout.',
        'Make sure the element is present in the document or that it\'s not display none.'
      ].join('\n'));
    }
    return {
      left: box.left + getOffsetLeft(box, (_d = (_c = withProps.$anchorOrigin) === null || _c === void 0 ?
        void 0 : _c.horizontal) !== null && _d !== void 0 ? _d : 'left'),
      top: box.top + getOffsetTop(box, (_f = (_e = withProps.$anchorOrigin) === null || _e === void 0 ? void 0 :
        _e.vertical) !== null && _f !== void 0 ? _f : 'bottom')
    };
  }, [
    anchorReference,
    $anchor,
    (_b = withProps.$anchorOrigin) === null || _b === void 0 ? void 0 : _b.horizontal,
    (_c = withProps.$anchorOrigin) === null || _c === void 0 ? void 0 : _c.vertical,
    withProps.$anchorPosition,
  ]);
  var getTransformOrigin = useCallback(function(elemRect) {
    var _a, _b, _c, _d;
    return ({
      horizontal: getOffsetLeft(elemRect, (_b = (_a = withProps.$transformOrigin) === null || _a ===
        void 0 ? void 0 : _a.horizontal) !== null && _b !== void 0 ? _b : 'left'),
      vertical: getOffsetTop(elemRect, (_d = (_c = withProps.$transformOrigin) === null || _c === void 0 ?
        void 0 : _c.vertical) !== null && _d !== void 0 ? _d : 'top')
    });
  }, [(_d = withProps.$transformOrigin) === null || _d === void 0 ? void 0 : _d.horizontal, (_e = withProps
    .$transformOrigin) === null || _e === void 0 ? void 0 : _e.vertical]);
  var getPositioningStyle = useCallback(function(element) {
    var _a, _b;
    var elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
    var elemTransformOrigin = getTransformOrigin(elemRect);
    if (anchorReference === PopoverAnchorType.none) {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }
    var anchorOffset = getAnchorOffset();
    var top = anchorOffset.top - elemTransformOrigin.vertical;
    var left = anchorOffset.left - elemTransformOrigin.horizontal;
    var bottom = top + elemRect.height;
    var right = left + elemRect.width;
    var containerWindow = (_a = $anchor === null || $anchor === void 0 ? void 0 : $anchor.ownerDocument
      .defaultView) !== null && _a !== void 0 ? _a : window;
    var marginThreshold = ((_b = withProps.$marginThreshold) !== null && _b !== void 0 ? _b : 8);
    var heightThreshold = containerWindow.innerHeight - marginThreshold;
    var widthThreshold = containerWindow.innerWidth - marginThreshold;
    if (bottom > heightThreshold) {
      var diff = bottom - heightThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (top < marginThreshold) {
      var diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    }
    if (process.env.NODE_ENV !== 'production') {
      if (elemRect.height > heightThreshold && elemRect.height && heightThreshold) {
        console.error([
          'C4T: The popover component is too tall.',
          "Some part of it can not be seen on the screen (".concat(elemRect.height - heightThreshold,
            "px)."),
          'Consider adding a `max-height` with a scroll to improve the user-experience.'
        ].join('\n'));
      }
    }
    if (right > widthThreshold) {
      var diff = right - widthThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    } else if (left < marginThreshold) {
      var diff = left - marginThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    }
    return {
      top: "".concat(Math.round(top), "px"),
      left: "".concat(Math.round(left), "px"),
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [
    $anchor,
    anchorReference,
    getAnchorOffset,
    getTransformOrigin,
    withProps.$marginThreshold
  ]);
  var setPositioningStyles = useCallback(function() {
    var _a;
    var ref = (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.innerRef;
    if (!ref || ('current' in ref && !ref.current)) {
      return;
    }
    var portal = ('current' in ref && ref.current);
    var element = portal.childNodes[0];
    if (!element) {
      return;
    }
    var positioning = getPositioningStyle(element);
    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }
    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }
    element.style.transformOrigin = positioning.transformOrigin;
  }, [
    $anchor,
    anchorReference,
    getPositioningStyle
  ]);
  var handleEntering = useCallback(function(element, isAppearing) {
    var _a, _b, _c, _d;
    (_a = withProps.onEntering) === null || _a === void 0 ? void 0 : _a.call(withProps, element, isAppearing);
    (_d = (_c = (_b = withProps.$backdropProps) === null || _b === void 0 ? void 0 : _b.$fadeProps) === null ||
      _c === void 0 ? void 0 : _c.onEntering) === null || _d === void 0 ? void 0 : _d.call(_c, element,
      isAppearing);
    setPositioningStyles();
  }, [
    $anchor,
    anchorReference,
    setPositioningStyles,
    (_g = (_f = withProps.$backdropProps) === null || _f === void 0 ? void 0 : _f.$fadeProps) === null || _g ===
    void 0 ? void 0 : _g.onEntering,
    withProps.onEntering,
  ]);
  useImperativeHandle(ref, function() {
    withProps.open && innerRef.current && (innerRef.current.updatePosition = function() {
      setPositioningStyles();
    });
    return innerRef.current;
  }, [innerRef, innerRef.current, setPositioningStyles]);
  useEffect(function() {
    var _a;
    setupAnchor();
    if (!withProps.open) {
      return;
    }
    if (ref && 'current' in ref) {
      (_a = ref.current) === null || _a === void 0 ? void 0 : _a.openPortal();
    }
    setPositioningStyles();
  }, [
    setupAnchor,
    withProps.open,
  ]);
  useEffect(function() {
    var _a;
    if (!withProps.open) {
      return undefined;
    }
    var handleResize = debounce(setPositioningStyles);
    var containerWindow = (_a = $anchor === null || $anchor === void 0 ? void 0 : $anchor.ownerDocument
      .defaultView) !== null && _a !== void 0 ? _a : window;
    containerWindow.addEventListener('resize', handleResize);
    return function() {
      containerWindow.removeEventListener('resize', handleResize);
    };
  }, [$anchor, withProps.open, setPositioningStyles]);
  return (_jsx(Portal, __assign({
    "$backdropProps": __assign(__assign({}, withProps.$backdropProps), {
      $fadeProps: __assign(__assign({}, ((_j = (_h = withProps.$backdropProps) === null || _h ===
        void 0 ? void 0 : _h.$fadeProps) !== null && _j !== void 0 ? _j : {})), {
        onEntering: handleEntering
      })
    }),
    jCss: jCss,
    name: name,
    onClose: function() {
      var _a;
      (_a = withProps.onClose) === null || _a === void 0 ? void 0 : _a.call(withProps);
      setIsOpen(false);
    },
    onOpen: function() {
      var _a;
      (_a = withProps.onOpen) === null || _a === void 0 ? void 0 : _a.call(withProps);
      setIsOpen(true);
    },
    open: isOpen,
    ref: innerRef,
    variant: withProps.variant
  }, _objectWithoutProperties(withProps, [
    '$backdropProps',
    'jCss',
    'name',
    'onClose',
    'onOpen',
    'open',
    'variant',
  ]), {
    children: children
  })));
});
Popover.displayName = DISPLAY_NAME;
export default Popover;
