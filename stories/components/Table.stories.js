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
import Table, * as T from '../../components/Table';
import Body from '../../components/Table/Body';
import Cell from '../../components/Table/Cell';
import Row from '../../components/Table/Row';
import {
  TableHead
} from '../../components';
import {
  TableControls
} from '../controls';
Box.displayName = 'Box';
Table.displayName = 'Table';
Body.displayName = 'TableBody';
Cell.displayName = 'TableCell';
Row.displayName = 'TableRow';
var meta = {
  title: 'Core/Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: TableControls,
};
export default meta;
/* -------- Using Table namespace ---------------- */
export var Default = {
  args: {
    children: [
      _jsxs(T.Head, {
        children: [_jsxs(T.Row, {
          children: [_jsx(T.Cell, __assign({
            tag: 'th'
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
          }), 'row1coll1'), _jsx(T.Cell, __assign({
            tag: 'th',
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
        }, 'row1'), _jsxs(T.Row, {
          children: [_jsx(T.Cell, __assign({
            tag: 'th'
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
          }), 'row2coll1'), _jsx(T.Cell, __assign({
            tag: 'th'
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
          }), 'row2coll2'), _jsx(T.Cell, __assign({
            tag: 'th'
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
        }, 'row2')]
      }, 'head'),
      _jsxs(T.Body, {
        children: [_jsxs(T.Row, {
          children: [_jsx(T.Cell, {
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
          }, 'row1coll1'), _jsx(T.Cell, {
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
          }, 'row1coll2'), _jsx(T.Cell, {
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
          }, 'row1coll3')]
        }, 'row1'), _jsxs(T.Row, {
          children: [_jsx(T.Cell, {
            children: _jsx(LocaleProvider, __assign({
              module: 'storybook'
            }, {
              children: _jsx(FormattedMessage, {
                id: 'table.row-col',
                values: {
                  row: 2,
                  col: 1,
                }
              })
            }))
          }, 'row2coll1'), _jsx(T.Cell, {
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
          }, 'row2coll2'), _jsx(T.Cell, {
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
          }, 'row2coll3')]
        }, 'row2'), _jsxs(T.Row, {
          children: [_jsx(T.Cell, {
            children: _jsx(LocaleProvider, __assign({
              module: 'storybook'
            }, {
              children: _jsx(FormattedMessage, {
                id: 'table.row-col',
                values: {
                  row: 3,
                  col: 1,
                }
              })
            }))
          }, 'row3coll1'), _jsx(T.Cell, {
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
          }, 'row3coll2'), _jsx(T.Cell, {
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
          }, 'row3coll3')]
        }, 'row3')]
      }, 'body'),
    ],
  },
};
/* -------- End of Using Table namespace ---------------- */
/* -------- Using individual components namespace ---------------- */
export var Bordered = {
  args: {
    children: [
      _jsxs(TableHead, {
        children: [_jsxs(Row, {
          children: [_jsx(Cell, __assign({
            "$bColor": 'grey',
            tag: 'th'
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
          }), 'row1coll1'), _jsx(Cell, __assign({
            "$bColor": 'grey',
            tag: 'th',
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
        }, 'row1'), _jsxs(Row, {
          children: [_jsx(Cell, __assign({
            "$bColor": 'grey',
            tag: 'th'
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
          }), 'row2coll1'), _jsx(Cell, __assign({
            "$bColor": 'grey',
            tag: 'th'
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
          }), 'row2coll2'), _jsx(Cell, __assign({
            "$bColor": 'grey',
            tag: 'th'
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
        }, 'row2')]
      }, 'head'),
      _jsxs(Body, {
        children: [_jsxs(Row, {
          children: [_jsx(Cell, __assign({
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
          }), 'row1coll1'), _jsx(Cell, __assign({
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
          }), 'row1coll2'), _jsx(Cell, __assign({
            "$bColor": 'info'
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
        }, 'row1'), _jsxs(Row, {
          children: [_jsx(Cell, __assign({
            "$bColor": 'grey'
          }, {
            children: _jsx(LocaleProvider, __assign({
              module: 'storybook'
            }, {
              children: _jsx(FormattedMessage, {
                id: 'table.row-col',
                values: {
                  row: 2,
                  col: 1,
                }
              })
            }))
          }), 'row2coll1'), _jsx(Cell, __assign({
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
          }), 'row2coll2'), _jsx(Cell, __assign({
            "$bColor": 'warning'
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
        }, 'row2'), _jsxs(Row, {
          children: [_jsx(Cell, __assign({
            "$bColor": 'grey'
          }, {
            children: _jsx(LocaleProvider, __assign({
              module: 'storybook'
            }, {
              children: _jsx(FormattedMessage, {
                id: 'table.row-col',
                values: {
                  row: 3,
                  col: 1,
                }
              })
            }))
          }), 'row3coll1'), _jsx(Cell, __assign({
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
          }), 'row3coll2'), _jsx(Cell, __assign({
            "$bColor": 'success'
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
        }, 'row3')]
      }, 'body'),
    ],
    $bColor: 'grey',
  },
};
