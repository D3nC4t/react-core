var __extends = (this && this.__extends) || (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
      ({
          __proto__: []
        }
        instanceof Array && function(d, b) {
          d.__proto__ = b;
        }) ||
      function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
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
  jsx as _jsx,
  jsxs as _jsxs
} from "react/jsx-runtime";
import {
  useEffect
} from 'react';
import {
  FormattedMessage
} from 'react-intl';
import Button from '../../components/Button';
import {
  ButtonControls
} from '../controls';
import LocaleProvider from '../../translations/component';
import {
  EventWithKey
} from '../../types';
import {
  subscribe
} from '../../utils/subscribe';
import {
  publish
} from '../../utils/publish';
import {
  Box,
  Typography
} from '../../components';
Button.displayName = 'Button';
var meta = {
  title: 'Core/Events/Events with Key',
  component: Button,
  tags: ['button'],
  argTypes: ButtonControls,
};
export default meta;
var TestEventWithKey = /** @class */ (function(_super) {
  __extends(TestEventWithKey, _super);

  function TestEventWithKey() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.subscriptionName = 'TestEventWithKey';
    return _this;
  }
  return TestEventWithKey;
}(EventWithKey));
var RenderEventWithKey = function(props) {
  useEffect(function() {
    return subscribe(new TestEventWithKey('test'), function() {
      alert('TestEventWithKey triggered');
    }).unsubscribe;
  }, []);
  return (_jsxs(Box, __assign({
    variant: 'flex-column-no-padding'
  }, {
    children: [_jsxs(Typography, {
      children: ["import { useEffect } from 'react';", _jsx("br", {}), "...", _jsx("br", {}),
        "import { EventWithKey } from 'react-core/types';", _jsx("br", {}),
        "import { publish } from 'react-core/utils/publish';", _jsx("br", {}),
        "import { subscribe } from 'react-core/utils/subscribe';", _jsx("br", {}), "...", _jsx(
          "br", {}), "class TestEventWithKey extends EventWithKey {", _jsx("br", {}),
        "\u00A0\u00A0\u00A0\u00A0subscriptionName: string = 'some_event_name';", _jsx("br", {}), "}",
        _jsx("br", {}), "...", _jsx("br", {}),
        "useEffect(() => subscribe(new TestEventWithKey('some key'), () => {", _jsx("br", {}),
        "\u00A0\u00A0\u00A0\u00A0alert('TestEventWithKey triggered: ');", _jsx("br", {}),
        "}).unsubscribe, []);", _jsx("br", {}), "...", _jsx("br", {}),
        "publish(new TestEventWithKey('some key'));"
      ]
    }), _jsx(Button, __assign({}, props, {
      onClick: function() {
        publish(new TestEventWithKey('test'));
      }
    }, {
      children: _jsx(LocaleProvider, __assign({
        module: 'storybook'
      }, {
        children: _jsx(FormattedMessage, {
          id: 'event.event-with-key'
        })
      }))
    }))]
  })));
};
export var BasicEvent = {
  args: {
    children: 'Button',
  },
  render: RenderEventWithKey,
};
var TestEventWithKeyAndArgs = /** @class */ (function(_super) {
  __extends(TestEventWithKeyAndArgs, _super);

  function TestEventWithKeyAndArgs() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.subscriptionName = 'TestEventWithArgs';
    return _this;
  }
  return TestEventWithKeyAndArgs;
}(EventWithKey));
var RenderEventWithKeyAndArgs = function(props) {
  useEffect(function() {
    return subscribe(new TestEventWithKeyAndArgs('test'), function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      alert('TestEventWithArgs triggered: ' + args.join(', '));
    }).unsubscribe;
  }, []);
  return (_jsxs(Box, __assign({
    variant: 'flex-column-no-padding'
  }, {
    children: [_jsxs(Typography, {
      children: ["import { useEffect } from 'react';", _jsx("br", {}), "...", _jsx("br", {}),
        "import { EventWithKey } from 'react-core/types';", _jsx("br", {}),
        "import { publish } from 'react-core/utils/publish';", _jsx("br", {}),
        "import { subscribe } from 'react-core/utils/subscribe';", _jsx("br", {}), "...", _jsx(
          "br", {}), "class TestEventWithKeyAndArgs extends EventWithKey {", _jsx("br", {}),
        "\u00A0\u00A0\u00A0\u00A0subscriptionName: string = 'some_event_name';", _jsx("br", {}), "}",
        _jsx("br", {}), "...", _jsx("br", {}),
        "useEffect(() => subscribe(new TestEventWithKeyAndArgs('some key'), (...args: string[]) => {",
        _jsx("br", {}),
        "\u00A0\u00A0\u00A0\u00A0alert('TestEventWithKeyAndArgs triggered: ' + args.join(', '));",
        _jsx("br", {}), "}).unsubscribe, []);", _jsx("br", {}), "...", _jsx("br", {}),
        "publish(new TestEventWithKeyAndArgs('some key', 'arg1', 'arg2'));"
      ]
    }), _jsx(Button, __assign({}, props, {
      onClick: function() {
        publish(new TestEventWithKeyAndArgs('test', 'arg1', 'arg2'));
      }
    }, {
      children: _jsx(LocaleProvider, __assign({
        module: 'storybook'
      }, {
        children: _jsx(FormattedMessage, {
          id: 'event.event-with-key'
        })
      }))
    }))]
  })));
};
export var EventWithArgs = {
  args: {
    children: 'Button',
  },
  render: RenderEventWithKeyAndArgs,
};
