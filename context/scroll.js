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
  jsx as _jsx
} from "react/jsx-runtime";
import {
  createContext,
  useCallback,
  useState,
} from 'react';
export var ScrollContext = createContext({
  main: {
    current: null
  },
  refs: {},
  addRef: function() {},
  scrollToRef: function() {},
});
export var ScrollContextProvider = function(_a) {
  var children = _a.children,
    main = _a.main;
  var _b = useState({}),
    refs = _b[0],
    setRefs = _b[1];
  var addRef = useCallback(function(name, ref) {
    setRefs(function(prevState) {
      var _a;
      return (__assign(__assign({}, prevState), (_a = {}, _a[name] = ref, _a)));
    });
  }, []);
  var scrollToRef = useCallback(function(name) {
    var _a, _b, _c;
    if (refs[name] && refs[name].current) {
      (_a = main.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
        top: (_b = refs[name].current) === null || _b === void 0 ? void 0 : _b.offsetTop,
        left: (_c = refs[name].current) === null || _c === void 0 ? void 0 : _c.offsetLeft,
        behavior: "smooth",
      });
    }
  }, [refs]);
  return (_jsx(ScrollContext.Provider, __assign({
    value: {
      main: main,
      refs: refs,
      addRef: addRef,
      scrollToRef: scrollToRef,
    }
  }, {
    children: children
  })));
};
