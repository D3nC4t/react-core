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
  FormattedMessage
} from 'react-intl';
import Box from '../../components/Box';
import LocaleProvider from '../../translations/component';
import TableCell from '../../components/TableCell';
import TableRow from '../../components/TableRow';
import TableHead from '../../components/TableHead';
import {
  TableHeadControls
} from '../controls';
Box.displayName = 'Box';
TableCell.displayName = 'TableCell';
TableRow.displayName = 'TableRow';
TableHead.displayName = 'TableHead';
var meta = {
  title: 'Core/Components/TableHead',
  component: TableHead,
  tags: ['autodocs'],
  argTypes: TableHeadControls,
};
export default meta;
export var Default = {
  args: {
    children: [
      _jsxs(TableRow, {
        children: [_jsx(TableCell, __assign({
          "$bColor": 'grey'
        }, {
          children: _jsx(LocaleProvider, __assign({
            module: 'storybook'
          }, {
            children: _jsx(FormattedMessage, {
              id: 'table.head-col',
              values: {
                row: 1,
                col: 1,
              }
            })
          }))
        }), 'row1coll1'), _jsx(TableCell, __assign({
          "$bColor": 'grey',
          colspan: 2
        }, {
          children: _jsx(LocaleProvider, __assign({
            module: 'storybook'
          }, {
            children: _jsx(FormattedMessage, {
              id: 'table.head-col',
              values: {
                row: 1,
                col: '2 & 3',
              }
            })
          }))
        }), 'row1coll2')]
      }, 'row1'),
      _jsxs(TableRow, {
        children: [_jsx(TableCell, __assign({
          "$bColor": 'grey'
        }, {
          children: _jsx(LocaleProvider, __assign({
            module: 'storybook'
          }, {
            children: _jsx(FormattedMessage, {
              id: 'table.head-col',
              values: {
                row: 2,
                col: 1,
              }
            })
          }))
        }), 'row2coll1'), _jsx(TableCell, __assign({
          "$bColor": 'grey'
        }, {
          children: _jsx(LocaleProvider, __assign({
            module: 'storybook'
          }, {
            children: _jsx(FormattedMessage, {
              id: 'table.head-col',
              values: {
                row: 2,
                col: 2,
              }
            })
          }))
        }), 'row2coll2'), _jsx(TableCell, __assign({
          "$bColor": 'grey'
        }, {
          children: _jsx(LocaleProvider, __assign({
            module: 'storybook'
          }, {
            children: _jsx(FormattedMessage, {
              id: 'table.head-col',
              values: {
                row: 2,
                col: 3,
              }
            })
          }))
        }), 'row2coll3')]
      }, 'row2'),
    ],
    $bColor: 'grey',
  },
};
