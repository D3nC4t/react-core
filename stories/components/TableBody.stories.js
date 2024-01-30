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
import TableBody from '../../components/TableBody';
import {
  TableBodyControls
} from '../controls';
Box.displayName = 'Box';
TableCell.displayName = 'TableCell';
TableRow.displayName = 'TableRow';
TableBody.displayName = 'TableBody';
var meta = {
  title: 'Core/Components/TableBody',
  component: TableBody,
  tags: ['autodocs'],
  argTypes: TableBodyControls,
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
              id: 'table.row-col',
              values: {
                row: 1,
                col: 1,
              }
            })
          }))
        }), 'row1coll1'), _jsx(TableCell, __assign({
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
        }), 'row1coll2'), _jsx(TableCell, __assign({
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
        }), 'row1coll3')]
      }, 'row1'),
      _jsxs(TableRow, {
        children: [_jsx(TableCell, __assign({
          "$bColor": 'grey',
          rowspan: 2
        }, {
          children: _jsx(LocaleProvider, __assign({
            module: 'storybook'
          }, {
            children: _jsx(FormattedMessage, {
              id: 'table.row-col',
              values: {
                row: '2 & 3',
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
              id: 'table.row-col',
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
              id: 'table.row-col',
              values: {
                row: 2,
                col: 3,
              }
            })
          }))
        }), 'row2coll3')]
      }, 'row2'),
      _jsxs(TableRow, {
        children: [_jsx(TableCell, __assign({
          "$bColor": 'grey'
        }, {
          children: _jsx(LocaleProvider, __assign({
            module: 'storybook'
          }, {
            children: _jsx(FormattedMessage, {
              id: 'table.row-col',
              values: {
                row: 3,
                col: 2,
              }
            })
          }))
        }), 'row3coll2'), _jsx(TableCell, __assign({
          "$bColor": 'grey'
        }, {
          children: _jsx(LocaleProvider, __assign({
            module: 'storybook'
          }, {
            children: _jsx(FormattedMessage, {
              id: 'table.row-col',
              values: {
                row: 3,
                col: 3,
              }
            })
          }))
        }), 'row3coll3')]
      }, 'row3'),
    ],
    $bColor: 'grey',
  },
};
