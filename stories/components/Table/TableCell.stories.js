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
  FormattedMessage
} from 'react-intl';
import Box from '../../../components/Box';
import LocaleProvider from '../../../translations/component';
import Cell from '../../../components/Table/Cell';
import {
  TableCellControls
} from '../../controls';
Box.displayName = 'Box';
Cell.displayName = 'TableCell';
var meta = {
  title: 'Core/Components/Table/Cell',
  component: Cell,
  tags: ['autodocs'],
  argTypes: TableCellControls,
};
export default meta;
export var Default = {
  args: {
    children: (_jsx(LocaleProvider, __assign({
      module: 'storybook'
    }, {
      children: _jsx(FormattedMessage, {
        id: 'some-text'
      })
    }))),
    $bColor: 'grey',
  },
};
