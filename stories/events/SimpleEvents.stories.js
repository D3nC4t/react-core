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
  Event
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
  title: 'Core/Events/Simple Events',
  component: Button,
  tags: ['button'],
  argTypes: ButtonControls,
};
export default meta;
var TestEvent = /** @class */ (function(_super) {
  __extends(TestEvent, _super);

  function TestEvent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.subscriptionName = 'TestEvent';
    return _this;
  }
  return TestEvent;
}(Event));
var SimpleEvent = function(props) {
  useEffect(function() {
    return subscribe(new TestEvent, function() {
      alert('TestEvent triggered');
    }).unsubscribe;
  }, []);
  return (_jsxs(Box, __assign({
    variant: 'flex-column-no-padding'
  }, {
    children: [_jsxs(Typography, {
      children: ["import { useEffect } from 'react';", _jsx("br", {}), "...", _jsx("br", {}),
        "import { Event } from 'react-core/types';", _jsx("br", {}),
        "import { publish } from 'react-core/utils/publish';", _jsx("br", {}),
        "import { subscribe } from 'react-core/utils/subscribe';", _jsx("br", {}), "...", _jsx(
          "br", {}), "class TestEvent extends Event {", _jsx("br", {}),
        "\u00A0\u00A0\u00A0\u00A0subscriptionName: string = 'some_event_name';", _jsx("br", {}), "}",
        _jsx("br", {}), "...", _jsx("br", {}), "useEffect(() => subscribe(new TestEvent, () => {",
        _jsx("br", {}), "\u00A0\u00A0\u00A0\u00A0alert('TestEvent triggered: ');", _jsx("br", {}),
        "}).unsubscribe, []);", _jsx("br", {}), "...", _jsx("br", {}), "publish(new TestEvent);"
      ]
    }), _jsx(Button, __assign({}, props, {
      onClick: function() {
        publish(new TestEvent);
      }
    }, {
      children: _jsx(LocaleProvider, __assign({
        module: 'storybook'
      }, {
        children: _jsx(FormattedMessage, {
          id: 'event.simple-event'
        })
      }))
    }))]
  })));
};
export var BasicEvent = {
  args: {
    children: 'Button',
  },
  render: SimpleEvent,
};
var TestEventWithArgs = /** @class */ (function(_super) {
  __extends(TestEventWithArgs, _super);

  function TestEventWithArgs() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.subscriptionName = 'TestEventWithArgs';
    return _this;
  }
  return TestEventWithArgs;
}(Event));
var SimpleEventWithArgs = function(props) {
  useEffect(function() {
    return subscribe(new TestEventWithArgs, function() {
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
        "import { Event } from 'react-core/types';", _jsx("br", {}),
        "import { publish } from 'react-core/utils/publish';", _jsx("br", {}),
        "import { subscribe } from 'react-core/utils/subscribe';", _jsx("br", {}), "...", _jsx(
          "br", {}), "class TestEventWithArgs extends Event {", _jsx("br", {}),
        "\u00A0\u00A0\u00A0\u00A0subscriptionName: string = 'some_event_name';", _jsx("br", {}), "}",
        _jsx("br", {}), "...", _jsx("br", {}),
        "useEffect(() => subscribe(new TestEventWithArgs, (...args: string[]) => {", _jsx("br", {}),
        "\u00A0\u00A0\u00A0\u00A0alert('TestEventWithArgs triggered: ' + args.join(', '));", _jsx(
          "br", {}), "}).unsubscribe, []);", _jsx("br", {}), "...", _jsx("br", {}),
        "publish(new TestEventWithArgs('arg1', 'arg2'));"
      ]
    }), _jsx(Button, __assign({}, props, {
      onClick: function() {
        publish(new TestEventWithArgs('arg1', 'arg2'));
      }
    }, {
      children: _jsx(LocaleProvider, __assign({
        module: 'storybook'
      }, {
        children: _jsx(FormattedMessage, {
          id: 'event.simple-event'
        })
      }))
    }))]
  })));
};
export var BasicEventWithArgs = {
  args: {
    children: 'Button',
  },
  render: SimpleEventWithArgs,
};
