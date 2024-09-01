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
  jsxs as _jsxs
} from "react/jsx-runtime";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import Box from './Box';
import _objectWithoutProperties from '../utils/_objectWithoutProperties';
import {
  getClassName
} from '../theme/styled';
import {
  useDefaultProps,
  useVariantJCss
} from '../theme';
var DISPLAY_NAME = 'C4tScrollBox';
export var ScrollBox = forwardRef(function(_a, ref) {
  var _b, _c, _d;
  var children = _a.children,
    _e = _a.name,
    name = _e === void 0 ? DISPLAY_NAME : _e,
    inputProps = __rest(_a, ["children", "name"]);
  var withProps = useDefaultProps(inputProps, name);
  var innerRef = useRef(null);
  var isBeingDragged = useRef(false);
  var observerRef = useRef(null);
  var scrollRef = useRef(null);
  var thumbRef = useRef(null);
  var trackRef = useRef(null);
  var jCss = useVariantJCss(withProps, name, withProps.variant);
  var scrollDirection = useMemo(function() {
    var _a;
    return (_a = withProps.scrollDirection) !== null && _a !== void 0 ? _a : 'vertical';
  }, [withProps.scrollDirection]);
  var _f = useState(0),
    initialScroll = _f[0],
    setInitialScroll = _f[1];
  var _g = useState(0),
    scrollPosition = _g[0],
    setScrollPosition = _g[1];
  var _h = useState(false),
    showScroll = _h[0],
    setShowScroll = _h[1];
  var _j = useState(false),
    showThumb = _j[0],
    setShowThumb = _j[1];
  var _k = useState(0),
    thumbHeight = _k[0],
    setThumbHeight = _k[1];
  var handleMouseDown = useCallback(function(event) {
    event.preventDefault();
    event.stopPropagation();
    if (scrollDirection === 'vertical') {
      setScrollPosition(event.clientY);
      scrollRef.current && setInitialScroll(scrollRef.current.scrollTop);
    } else if (scrollDirection === 'horizontal') {
      setScrollPosition(event.clientX);
      scrollRef.current && setInitialScroll(scrollRef.current.scrollLeft);
    }
    isBeingDragged.current = true;
  }, [scrollDirection, scrollRef]);
  var handleMouseMove = useCallback(function(event) {
    event.preventDefault();
    event.stopPropagation();
    if (!isBeingDragged.current || !scrollRef.current) {
      return;
    }
    if (scrollDirection === 'vertical') {
      var clientY = event.clientY;
      var _a = scrollRef.current,
        offsetHeight = _a.offsetHeight,
        scrollHeight = _a.scrollHeight;
      var diff = scrollHeight - offsetHeight;
      var delta = (clientY - scrollPosition) * (offsetHeight / thumbHeight);
      scrollRef.current.scrollTop = Math.min(initialScroll + delta, diff);
    } else if (scrollDirection === 'horizontal') {
      var clientX = event.clientX;
      var _b = scrollRef.current,
        offsetWidth = _b.offsetWidth,
        scrollWidth = _b.scrollWidth;
      var diff = scrollWidth - offsetWidth;
      var delta = clientX - scrollPosition * (offsetWidth / thumbHeight);
      scrollRef.current.scrollLeft = Math.min(initialScroll + delta, diff);
    }
  }, [
    initialScroll,
    scrollRef,
    isBeingDragged,
    scrollDirection,
    scrollPosition,
    thumbHeight
  ]);
  var handleMouseUp = useCallback(function(event) {
    event.preventDefault();
    event.stopPropagation();
    isBeingDragged.current && (isBeingDragged.current = false);
  }, [isBeingDragged]);
  var handleResize = useCallback(function(ref, track) {
    var _a, _b;
    if (scrollDirection === 'vertical') {
      var trackSize = track.clientHeight;
      var clientHeight = ref.clientHeight,
        scrollHeight = ref.scrollHeight;
      setThumbHeight(Math.max(clientHeight / scrollHeight * trackSize, (_a = withProps.minThumbSize) !== null &&
        _a !== void 0 ? _a : 20));
    } else if (scrollDirection === 'horizontal') {
      var trackSize = track.clientWidth;
      var clientWidth = ref.clientWidth,
        scrollWidth = ref.scrollWidth;
      setThumbHeight(Math.max(clientWidth / scrollWidth * trackSize, (_b = withProps.minThumbSize) !== null &&
        _b !== void 0 ? _b : 20));
    }
  }, [scrollDirection, withProps.minThumbSize]);
  var handleThumbPosition = useCallback(function() {
    if (!scrollRef.current || !thumbRef.current || !trackRef.current) {
      return;
    }
    if (scrollDirection === 'vertical') {
      var trackSize = trackRef.current.clientHeight;
      var _a = scrollRef.current,
        scrollHeight = _a.scrollHeight,
        scrollTop = _a.scrollTop;
      var thumbSize = thumbRef.current.clientHeight;
      if (trackSize >= scrollHeight) {
        return;
      }
      thumbRef.current.style.top = "".concat(Math.min(trackSize - thumbSize, scrollTop / scrollHeight *
        trackSize), "px");
    } else if (scrollDirection === 'horizontal') {
      var trackSize = trackRef.current.clientWidth;
      var _b = scrollRef.current,
        scrollWidth = _b.scrollWidth,
        scrollLeft = _b.scrollLeft;
      var thumbSize = thumbRef.current.clientWidth;
      if (trackSize >= scrollWidth) {
        return;
      }
      thumbRef.current.style.left = "".concat(Math.min(trackSize - thumbSize, scrollLeft / scrollWidth *
        trackSize), "px");
    }
    setShowThumb(true);
    setShowScroll(true);
  }, [scrollRef, scrollDirection, thumbRef, trackRef]);
  var handleTrackClick = useCallback(function(event) {
    var _a, _b, _c, _d;
    event.preventDefault();
    event.stopPropagation();
    var track = trackRef.current;
    var content = scrollRef.current;
    if (!track || !content) {
      return;
    }
    if (scrollDirection === 'vertical') {
      var clientY = event.clientY;
      var box = event.target.getBoundingClientRect();
      var top_1 = box.top;
      var thumbOffset = -(((_b = (_a = thumbRef.current) === null || _a === void 0 ? void 0 : _a
        .clientHeight) !== null && _b !== void 0 ? _b : thumbHeight) / 2);
      var ratio = (clientY - top_1 + thumbOffset) / track.clientHeight;
      var scroll_1 = Math.floor(ratio * content.scrollHeight);
      content.scrollTo({
        top: scroll_1,
        behavior: 'smooth'
      });
    } else if (scrollDirection === 'horizontal') {
      var clientX = event.clientX;
      var box = event.target.getBoundingClientRect();
      var left = box.left;
      var thumbOffset = -(((_d = (_c = thumbRef.current) === null || _c === void 0 ? void 0 : _c
        .clientWidth) !== null && _d !== void 0 ? _d : thumbHeight) / 2);
      var ratio = (clientX - left + thumbOffset) / track.clientWidth;
      var scroll_2 = Math.floor(ratio * content.scrollWidth);
      content.scrollTo({
        left: scroll_2,
        behavior: 'smooth'
      });
    }
  }, [scrollRef, thumbHeight, trackRef]);
  var hideScroll = useCallback(function() {
    return setTimeout(function() {
      setShowThumb(false);
      setShowScroll(false);
    }, 1000);
  }, []);
  useImperativeHandle(ref, function() {
    return ({
      container: innerRef,
      scrollBox: scrollRef,
      thumb: thumbRef,
      track: trackRef,
      scrollTo$el: function($el) {
        var _a;
        $el && ((_a = scrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
          top: $el.offsetTop,
          left: $el.offsetLeft,
          behavior: "smooth",
        }));
      },
    });
  }, [innerRef, scrollRef]);
  useEffect(function() {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseUp);
    return function() {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseUp);
    };
  }, []);
  useEffect(function() {
    var containerObserver = null;
    if (!scrollRef.current || !trackRef.current) {
      return;
    }
    var $el = scrollRef.current;
    var $track = trackRef.current;
    observerRef.current = new ResizeObserver(function() {
      return handleResize($el, $track);
    });
    containerObserver = new MutationObserver(function() {
      return handleResize($el, $track);
    });
    observerRef.current.observe($el);
    containerObserver.observe($el, {
      childList: true,
      subtree: true
    });
    $el.addEventListener('scroll', handleThumbPosition);
    $el.addEventListener('scrollend', hideScroll);
    return function() {
      var _a;
      (_a = observerRef.current) === null || _a === void 0 ? void 0 : _a.unobserve($el);
      containerObserver === null || containerObserver === void 0 ? void 0 : containerObserver.disconnect();
      $el.removeEventListener('scroll', handleThumbPosition);
      $el.removeEventListener('scrollend', hideScroll);
    };
  }, [handleThumbPosition, hideScroll, scrollRef, observerRef, trackRef]);
  return (_jsxs(Box, __assign({
    ref: innerRef,
    className: getClassName(withProps, name, withProps.variant),
    jCss: __assign(__assign({}, (scrollDirection === 'vertical' && {
      maxHeight: ((_b = withProps.maxBoxSize) !== null && _b !== void 0 ? _b : 300) + 16,
    })), jCss)
  }, _objectWithoutProperties(withProps, [
    'className',
    'hideScroll',
    'jCss',
    'minThumbSize',
    'scrollDirection',
    'variant',
  ]), {
    children: [_jsx(Box, __assign({
      ref: scrollRef,
      className: 'scroll-box',
      jCss: __assign(__assign({}, (scrollDirection === 'vertical' && {
        maxHeight: (_c = withProps.maxBoxSize) !== null && _c !== void 0 ? _c : 300,
      })), (scrollDirection === 'horizontal' && {
        maxWidth: (_d = withProps.maxBoxSize) !== null && _d !== void 0 ? _d : 300,
      }))
    }, {
      children: children
    })), _jsxs(Box, __assign({
      className: 'trail',
      "data-direction": scrollDirection,
      onMouseEnter: function() {
        setShowScroll(true);
      },
      onMouseLeave: function() {
        setShowScroll(false);
      },
      variant: 'auto-fit-no-padding'
    }, {
      children: [_jsx("div", {
        ref: trackRef,
        className: 'track',
        onClick: handleTrackClick,
        style: {
          cursor: showThumb && !withProps.hideScroll ?
            (isBeingDragged.current ? 'grabbing' : 'pointer') :
            'default',
        }
      }), _jsx("div", {
        ref: thumbRef,
        className: 'thumb',
        "data-show-thumb": showThumb,
        "data-show-scroll": showScroll,
        onMouseDown: handleMouseDown,
        style: __assign({
          height: thumbHeight,
          cursor: showThumb && !withProps.hideScroll ?
            (isBeingDragged.current ? 'grabbing' : 'pointer') :
            'default'
        }, (withProps.hideScroll && {
          display: 'none'
        }))
      })]
    }))]
  })));
});
ScrollBox.displayName = DISPLAY_NAME;
export default ScrollBox;
