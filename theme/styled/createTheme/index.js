import {
  merge
} from 'lodash';
import _objectWithoutProperties from '../../../utils/_objectWithoutProperties';
import border from './getters/border';
import color from './getters/color';
import createBreakpoints from './gererators/createBreakpoints';
import createShadows from './gererators/createShadows';
import rem from './getters/rem';
import rgba from './getters/rgba';
import shadow from './getters/shadow';
import themeComponents from '../../components';
export function createTheme(theme) {
  var _a, _b, _c, _d, _e;
  if (theme === void 0) {
    theme = {};
  }
  var slices = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    slices[_i - 1] = arguments[_i];
  }
  var _f = theme.breakpoints,
    breakpointsInput = _f === void 0 ? {} : _f,
    _g = theme.color,
    colorInput = _g === void 0 ? {} : _g,
    _h = theme.components,
    components = _h === void 0 ? {} : _h,
    _j = theme.shape,
    shape = _j === void 0 ? {} : _j,
    _k = theme.spacing,
    spacingInput = _k === void 0 ? {} : _k,
    _l = theme.typography,
    typography = _l === void 0 ? {} : _l;
  var extra = _objectWithoutProperties(theme, [
    'breakpoints',
    'color',
    'components',
    'shape',
    'spacing',
    'typography',
  ]);
  var breakpoints = createBreakpoints(breakpointsInput);
  var c4tTheme = merge({
    breakpoints: breakpoints,
    color: merge({
      dark: {
        lighter: '#323E41',
        light: '#232F32',
        main: '#1A2A2E',
        dark: '#0D2025',
        darker: '#04171D',
        text: '#F0F0F0',
      },
      error: {
        lighter: '#F17A5B',
        light: '#EF623F',
        main: '#DD4B26',
        dark: '#C53A18',
        darker: '#AB2D0D',
        text: '#F0F0F0',
      },
      grey: {
        lighter: '#CCCCCC',
        light: '#BCBCBC',
        main: '#A5A5A5',
        dark: '#949494',
        darker: '#7D7D7D',
        text: '#F0F0F0',
      },
      info: {
        lighter: '#69B5F3',
        light: '#49A1E8',
        main: '#3191DE',
        dark: '#146CB0',
        darker: '#003C6C',
        text: '#F0F0F0',
      },
      primary: {
        lighter: '#8433E6',
        light: '#6D1CD2',
        main: '#5B09C0',
        dark: '#48039D',
        darker: '#32006F',
        text: '#F0F0F0',
      },
      secondary: {
        lighter: '#BBF6FF',
        light: '#6FDEEE',
        main: '#3FD9EA',
        dark: '#04B3C9',
        darker: '#008D9B',
        text: '#F0F0F0',
      },
      success: {
        lighter: '#82E058',
        light: '#5FC52F',
        main: '#48AF19',
        dark: '#308D04',
        darker: '#1F6F00',
        text: '#F0F0F0',
      },
      warning: {
        lighter: '#FFE68F',
        light: '#FFDD66',
        main: '#F0C530',
        dark: '#DEB00F',
        darker: '#A98400',
        text: '#F0F0F0',
      },
      light: {
        lighter: '#F0F0F0',
        light: '#FDFDFD',
        main: '#FBFBFB',
        dark: '#F3F3F3',
        darker: '#DEDEDE',
        text: '#232F32',
      }
    }, colorInput),
    get: {},
    shadow: {},
    shape: merge({
      bodyFontSize: 16,
      border: {
        unit: 'rem',
        size: 0.0625,
        shape: 'solid',
        color: 'grey',
        radius: 0.5,
        colorVariant: 'main',
      },
      drawer: {
        corner: {
          width: 300,
          height: '50%',
          unit: 'px',
        },
        horizontal: {
          width: '100%',
          height: 300,
          unit: 'px',
        },
        vertical: {
          width: 300,
          height: '100%',
          unit: 'px',
        }
      },
      shadow: {
        unit: 'px',
        color: 'rgba(180, 180, 180, 0.75)',
        offset: {
          x: 4,
          y: 4,
        },
        blur: 32,
        spread: 0,
      },
      unit: 'px',
    }, shape),
    spacing: merge({
      xxs: 2,
      xs: 4,
      s: 8,
      sm: 16,
      m: 20,
      ml: 24,
      l: 32,
      xl: 40,
      xxl: 48,
    }, spacingInput),
    typography: merge({
      fontFamily: "Open sans-serif",
      variants: {
        root: {
          defaultStyles: {
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.25rem',
          },
          defaultTag: 'p',
        },
        h1: {
          defaultStyles: {
            fontWeight: 400,
            fontSize: '2.25rem',
            lineHeight: '2.5rem',
          },
          defaultTag: 'h1',
        },
        h2: {
          defaultStyles: {
            fontWeight: 400,
            fontSize: '1.875rem',
            lineHeight: '2.125rem',
          },
          defaultTag: 'h2',
        },
        h3: {
          defaultStyles: {
            fontWeight: 400,
            fontSize: '1.5rem',
            lineHeight: '1.75rem',
          },
          defaultTag: 'h3',
        },
        h4: {
          defaultStyles: {
            fontWeight: 400,
            fontSize: '1.25rem',
            lineHeight: '1.5rem',
          },
          defaultTag: 'h4',
        },
        h5: {
          defaultStyles: {
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.25rem',
          },
          defaultTag: 'h5',
        },
        p: {
          defaultStyles: {
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.25rem',
          },
          defaultTag: 'p',
        },
        bold: {
          defaultStyles: {
            fontWeight: 700,
            fontSize: '1rem',
            lineHeight: '1.25rem',
          },
          defaultTag: 'small',
        },
        small: {
          defaultStyles: {
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: '1rem',
          },
          defaultTag: 'small',
        },
        caption: {
          defaultStyles: {
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: '1rem',
            textTransform: 'uppercase',
          },
          defaultTag: 'span',
        },
      },
    }, typography),
  }, extra);
  c4tTheme = slices.reduce(function(acc, slice) {
    return merge(acc, slice);
  }, c4tTheme);
  c4tTheme.shadow = merge(c4tTheme.shadow, createShadows(c4tTheme));
  !(theme && ((_a = theme.get) === null || _a === void 0 ? void 0 : _a.border)) && (c4tTheme.get.border = border(
    c4tTheme));
  !(theme && ((_b = theme.get) === null || _b === void 0 ? void 0 : _b.color)) && (c4tTheme.get.color = color(
  c4tTheme));
  !(theme && ((_c = theme.get) === null || _c === void 0 ? void 0 : _c.rem)) && (c4tTheme.get.rem = rem(c4tTheme));
  !(theme && ((_d = theme.get) === null || _d === void 0 ? void 0 : _d.rgba)) && (c4tTheme.get.rgba = rgba(c4tTheme));
  !(theme && ((_e = theme.get) === null || _e === void 0 ? void 0 : _e.shadow)) && (c4tTheme.get.shadow = shadow(
    c4tTheme));
  c4tTheme.components = merge(themeComponents(c4tTheme), components);
  return c4tTheme;
}
export default createTheme;
