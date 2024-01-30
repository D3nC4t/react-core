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
  DefaultC4tControls
} from './default';
var FadeControls = __assign({
  boxProps: {
    description: 'The props for the box component',
    control: {
      type: 'object'
    },
  },
  children: {
    description: 'The content of the Fade element, ideally should be a ReactElement',
    control: {
      type: 'null'
    },
  },
  duration: {
    description: 'The duration of the effect in milliseconds',
    control: {
      type: 'number'
    },
  },
  in: {
    description: 'If true will show the content, otherwise it won\'t',
    control: {
      type: 'boolean'
    },
  },
  onEnter: {
    description: 'Callback fired before the "entering" status is applied',
    control: {
      type: 'null'
    },
  },
  onEntering: {
    description: 'Callback fired after the "entering" status is applied',
    control: {
      type: 'null'
    },
  },
  onEntered: {
    description: 'Callback fired after the "entered" status is applied',
    control: {
      type: 'null'
    },
  },
  onExit: {
    description: 'Callback fired before the "exiting" status is applied',
    control: {
      type: 'null'
    },
  },
  onExiting: {
    description: 'Callback fired after the "exiting" status is applied',
    control: {
      type: 'null'
    },
  },
  onExited: {
    description: 'Callback fired after the "exited" status is applied',
    control: {
      type: 'null'
    },
  }
}, DefaultC4tControls);
export default FadeControls;
