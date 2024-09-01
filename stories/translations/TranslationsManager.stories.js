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
  jsxs as _jsxs,
  Fragment as _Fragment
} from "react/jsx-runtime";
import {
  useEffect,
  useState
} from 'react';
import {
  faPlus,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import {
  FormattedMessage
} from 'react-intl';
import {
  useDebouncedCallback
} from '../../hooks';
import {
  Box,
  Button,
  Icon,
  Input,
  LocaleSelector,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '../../components';
import LocaleProvider from '../../translations/component';
import {
  download,
  objectCode
} from '../../utils';
import {
  loadI18nModuleData
} from '../../translations';
import {
  useConfig
} from '../../config';
var TranslationsManager = function() {
  var locale = useConfig().locale;
  var _a = useState(undefined),
    module = _a[0],
    setModule = _a[1];
  var _b = useState('en'),
    compareWith = _b[0],
    setCompareWith = _b[1];
  var _c = useState(locale !== null && locale !== void 0 ? locale : 'en'),
    againstLocale = _c[0],
    setAgainstLocale = _c[1];
  var _d = useState({}),
    compareMessages = _d[0],
    setCompareMessages = _d[1];
  var _e = useState({}),
    againstMessages = _e[0],
    setAgainstMessages = _e[1];
  var setupModule = useDebouncedCallback(function(module) {
    return setModule(module);
  }, [], 500);
  useEffect(function() {
    setAgainstLocale(locale);
  }, [locale]);
  useEffect(function() {
    if (!module) {
      return;
    }
    loadI18nModuleData(compareWith, module, true)
      .then(function(data) {
        return setCompareMessages(data !== null && data !== void 0 ? data : {});
      });
  }, [compareWith, module]);
  useEffect(function() {
    if (!module) {
      return;
    }
    loadI18nModuleData(againstLocale, module)
      .then(function(data) {
        return setAgainstMessages(data !== null && data !== void 0 ? data : {});
      });
  }, [againstLocale, module]);
  return (_jsx(LocaleProvider, __assign({
    module: 'storybook'
  }, {
    children: _jsxs(Box, __assign({
      tag: 'section',
      variant: 'flex-column'
    }, {
      children: [_jsx(Typography, __assign({
        variant: 'h1'
      }, {
        children: _jsx(FormattedMessage, {
          id: 'translations.manager'
        })
      })), _jsxs(Typography, __assign({
        variant: 'p'
      }, {
        children: [_jsx(FormattedMessage, {
          id: 'translations.type-module'
        }), _jsx(Input, {
          value: module !== null && module !== void 0 ? module : '',
          onChange: function(e) {
            return setupModule(e.target.value);
          }
        }), _jsx(FormattedMessage, {
          id: 'translations.change-from'
        }), _jsx(LocaleSelector, {
          onChange: function(locale) {
            return setCompareWith(locale);
          },
          value: compareWith,
          usePopover: true
        }), _jsx(FormattedMessage, {
          id: 'translations.change-to'
        }), _jsx(LocaleSelector, {
          onChange: function(locale) {
            return setAgainstLocale(locale);
          },
          value: againstLocale,
          usePopover: true
        }), _jsx(FormattedMessage, {
          id: 'translations.and'
        }), _jsx(Button, __assign({
          onClick: function() {
            var jsonPretty = JSON.stringify(compareMessages, null, 2);
            download(jsonPretty, "".concat(module, "-").concat(compareWith, ".json"),
              'text/plain');
          }
        }, {
          children: _jsx(FormattedMessage, {
            id: 'download'
          })
        }), objectCode(compareMessages !== null && compareMessages !== void 0 ?
          compareMessages : {}) + 'download')]
      })), module && (_jsxs(_Fragment, {
        children: [_jsxs(Table, {
          children: [_jsx(TableHead, {
            children: _jsxs(TableRow, {
              children: [_jsx(TableCell, __assign({
                tag: 'th'
              }, {
                children: _jsx(Typography, __assign({
                  variant: 'h2'
                }, {
                  children: "Translation key"
                }))
              })), _jsx(TableCell, __assign({
                tag: 'th'
              }, {
                children: _jsx(Typography, __assign({
                  variant: 'h2'
                }, {
                  children: compareWith
                }))
              })), _jsx(TableCell, __assign({
                tag: 'th'
              }, {
                children: _jsx(Typography, __assign({
                  variant: 'h2'
                }, {
                  children: againstLocale
                }))
              }))]
            })
          }), _jsx(TableBody, {
            children: Object.keys(againstMessages).map(function(key) {
              var _a;
              return (_jsxs(TableRow, __assign({
                jCss: {
                  backgroundColor: function(theme) {
                    return theme.get.color('grey', 'lighter');
                  },
                  '&:nth-child(2n)': {
                    backgroundColor: function(theme) {
                      return theme.get.color('light', 'darker');
                    },
                  },
                }
              }, {
                children: [_jsx(TableCell, __assign({
                  jCss: {
                    padding: function(theme) {
                      return theme.get.rem(theme.spacing.xs,
                        theme.shape.unit);
                    },
                  }
                }, {
                  children: _jsx(Typography, __assign({
                    variant: 'p'
                  }, {
                    children: key
                  }))
                })), _jsxs(TableCell, __assign({
                  jCss: {
                    alignItems: 'center',
                    display: 'flex',
                    gap: function(theme) {
                      return theme.get.rem(theme.spacing.xs,
                        theme.shape.unit);
                    },
                    justifyContent: 'start',
                    padding: function(theme) {
                      return theme.get.rem(theme.spacing.xs,
                        theme.shape.unit);
                    },
                  }
                }, {
                  children: [_jsx(Input, {
                    onChange: function(e) {
                      compareMessages[key] = e.target
                        .value;
                      setCompareMessages(__assign({},
                        compareMessages));
                    },
                    value: (_a = compareMessages[key]) !==
                      null && _a !== void 0 ? _a : '',
                    invalid: !compareMessages[key] ||
                      compareMessages[key] === '',
                    width: 411
                  }), _jsx(Icon, {
                    icon: faTrash,
                    color: 'error',
                    onClick: function() {
                      delete compareMessages[key];
                      var message =
                        'Are you sure you want to delete this key from';
                      if (confirm("".concat(message,
                          " ").concat(compareWith,
                          "?"))) {
                        setCompareMessages(__assign({},
                          compareMessages));
                      }
                    }
                  })]
                })), _jsx(TableCell, {
                  children: _jsx(Typography, __assign({
                    variant: 'p'
                  }, {
                    children: againstMessages[key]
                  }))
                })]
              }), key));
            })
          })]
        }), _jsx(Button, __assign({
          onClick: function() {
            if (!compareMessages) {
              return;
            }
            var key = prompt('Type the key for the new translation');
            if (!key) {
              return;
            }
            var message = prompt('Type the message for the new translation');
            if (!message) {
              return;
            }
            againstMessages[key] = message;
            compareMessages[key] = message;
            setAgainstMessages(__assign({}, againstMessages));
            setCompareMessages(__assign({}, compareMessages));
          },
          variant: 'icon'
        }, {
          children: _jsx(Icon, {
            color: 'info',
            icon: faPlus
          })
        }), objectCode(compareMessages !== null && compareMessages !== void 0 ?
          compareMessages : {}) + 'add')]
      }))]
    }))
  })));
};
var meta = {
  title: 'Core/Translations/TranslationsManager',
  component: TranslationsManager,
  tags: ['translations'],
  argTypes: {},
};
export default meta;
export var Default = {
  args: {},
};
