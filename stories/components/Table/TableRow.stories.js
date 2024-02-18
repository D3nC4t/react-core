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
import Row from '../../../components/Table/Row';
import {
  TableRowControls
} from '../../controls';
Box.displayName = 'Box';
Cell.displayName = 'TableCell';
Row.displayName = 'TableRow';
var meta = {
  title: 'Core/Components/Table/Row',
  component: Row,
  tags: ['autodocs'],
  argTypes: TableRowControls,
};
export default meta;
export var Default = {
  args: {
    children: [
      _jsx(Cell, __assign({
        "$bColor": 'grey'
      }, {
        children: _jsx(LocaleProvider, __assign({
          module: 'storybook'
        }, {
          children: _jsx(FormattedMessage, {
            id: 'table.row-col',
            values: {
              row: 1,
              col: 1,
            }
          })
        }))
      }), 'coll1'),
      _jsx(Cell, __assign({
        "$bColor": 'grey'
      }, {
        children: _jsx(LocaleProvider, __assign({
          module: 'storybook'
        }, {
          children: _jsx(FormattedMessage, {
            id: 'table.row-col',
            values: {
              row: 1,
              col: 2,
            }
          })
        }))
      }), 'coll2'),
      _jsx(Cell, __assign({
        "$bColor": 'grey'
      }, {
        children: _jsx(LocaleProvider, __assign({
          module: 'storybook'
        }, {
          children: _jsx(FormattedMessage, {
            id: 'table.row-col',
            values: {
              row: 1,
              col: 3,
            }
          })
        }))
      }), 'coll3'),
    ],
    $bColor: 'grey',
  },
};
