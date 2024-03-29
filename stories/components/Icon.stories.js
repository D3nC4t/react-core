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
  jsxs as _jsxs,
  Fragment as _Fragment
} from "react/jsx-runtime";
import {
  useEffect,
  useMemo,
  useState
} from 'react';
import {
  fas
} from '@fortawesome/free-solid-svg-icons';
import {
  far
} from '@fortawesome/free-regular-svg-icons';
import {
  fab
} from '@fortawesome/free-brands-svg-icons';
import Icon from '../../components/Icon';
import Input from '../../components/Input';
import Box from '../../components/Box';
import Typography from '../../components/Typography';
import {
  useTranslations
} from '../../translations';
import {
  IconControls
} from '../controls';
Icon.displayName = 'Icon';
Input.displayName = 'Input';
Box.displayName = 'Box';
Typography.displayName = 'Typography';
var meta = {
  title: 'Core/Components/Icon',
  component: Icon,
  tags: ['icons'],
  argTypes: IconControls,
};
export default meta;
var AllIcons = function(_a) {
  var pack = _a.pack,
    props = __rest(_a, ["pack"]);
  var _b = useTranslations('storybook'),
    intl = _b[0],
    hasLoadedIntl = _b[1];
  var _c = useState(),
    $els = _c[0],
    set$els = _c[1];
  var _d = useState(''),
    search = _d[0],
    setSearch = _d[1];
  var $icons = useMemo(function() {
    var $els = [];
    var filtered = {};
    for (var _i = 0, _a = Object.entries(pack); _i < _a.length; _i++) {
      var _b = _a[_i],
        key = _b[0],
        icon = _b[1];
      if (key.toLowerCase().includes(search)) {
        filtered[key] = icon;
      }
    }
    for (var _c = 0, _d = Object.entries(filtered); _c < _d.length; _c++) {
      var _e = _d[_c],
        key = _e[0],
        icon = _e[1];
      $els.push(_jsxs(Typography, __assign({
        variant: 'p',
        jCss: {
          border: function(theme) {
            return "".concat(theme.shape.border.size).concat(theme.shape.border.unit, " ") +
              "".concat(theme.shape.border.shape, " ").concat(theme.shape.border.color);
          },
          padding: function(theme) {
            return theme.spacing.s;
          },
        }
      }, {
        children: [_jsx(Icon, __assign({}, props, {
          icon: icon
        })), key]
      }), key));
    }
    return $els;
  }, [pack, props, search]);
  useEffect(function() {
    set$els(_jsxs(Box, __assign({
      variant: 'flex-column'
    }, {
      children: [_jsx(Input, {
        autoFocus: true,
        onChange: function(e) {
          return setSearch(e.target.value);
        },
        placeholder: hasLoadedIntl ? intl.formatMessage({
          id: 'search.icon'
        }) : '',
        type: 'text',
        value: search,
        width: 194
      }), _jsx(Box, __assign({
        variant: 'flex-row'
      }, {
        children: $icons
      }))]
    })));
  }, [hasLoadedIntl, $icons, intl]);
  return $els !== null && $els !== void 0 ? $els : _jsx(_Fragment, {});
};
// @ts-expect-error ignore union type issue
export var Solid = {
  args: {},
  render: function(args) {
    return _jsx(AllIcons, __assign({}, args, {
      pack: fas
    }));
  },
};
export var Regular = {
  args: {},
  render: function(args) {
    return _jsx(AllIcons, __assign({}, args, {
      pack: far
    }));
  },
};
export var Brand = {
  args: {},
  render: function(args) {
    return _jsx(AllIcons, __assign({}, args, {
      pack: fab
    }));
  },
};
