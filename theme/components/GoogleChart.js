var __rest = (this && this.__rest) || function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var GoogleChart = {
  C4tGoogleChart: {
    defaultProps: {
      options: function(_a) {
        var _b;
        var theme = _a.theme,
          props = __rest(_a, ["theme"]);
        var colors = [];
        var themeColors = theme.color;
        var themeColorKeys = Object.keys(themeColors)
          .filter(function(key) {
            return !['white', 'black', 'grey'].includes(key);
          });
        if (props.color) {
          var specificColor = Object
            .keys(themeColors[props.color]);
          for (var _i = 0, specificColor_1 = specificColor; _i < specificColor_1.length; _i++) {
            var colorVariant = specificColor_1[_i];
            colors.push(themeColors[props.color][colorVariant]);
          }
        } else {
          var colorVariant = (_b = props.colorVariant) !== null && _b !== void 0 ? _b : 'main';
          for (var _c = 0, themeColorKeys_1 = themeColorKeys; _c < themeColorKeys_1.length; _c++) {
            var color = themeColorKeys_1[_c];
            colors.push(themeColors[color][colorVariant]);
          }
        }
        return {
          colors: colors,
        };
      },
      variant: 'line-chart',
    },
    variants: {
      'area-chart': {
        styles: {}
      },
      'bar': {
        styles: {}
      },
      'bar-chart': {
        styles: {}
      },
      'bubble-chart': {
        styles: {}
      },
      'calendar': {
        styles: {}
      },
      'candlestick-chart': {
        styles: {}
      },
      'column-chart': {
        styles: {}
      },
      'combo-chart': {
        styles: {}
      },
      'gantt-chart': {
        styles: {}
      },
      'gauge-chart': {
        styles: {}
      },
      'geo-chart': {
        styles: {}
      },
      'histogram': {
        styles: {}
      },
      'line': {
        styles: {}
      },
      'line-chart': {
        styles: {}
      },
      'org-chart': {
        styles: {}
      },
      'pie-chart': {
        styles: {}
      },
      'sankey': {
        styles: {}
      },
      'scatter': {
        styles: {}
      },
      'scatter-chart': {
        styles: {}
      },
      'stepped-area-chart': {
        styles: {}
      },
      'table': {
        styles: {}
      },
      'timeline': {
        styles: {}
      },
      'tree-map': {
        styles: {}
      },
      'word-tree': {
        styles: {}
      },
    },
  },
};
export default GoogleChart;
