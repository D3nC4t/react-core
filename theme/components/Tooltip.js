var Tooltip = {
  C4tTooltip: {
    defaultProps: {
      tooltipJCss: {
        backgroundColor: function(theme, props) {
          return theme.get.color(props.color || 'primary', 'main');
        },
        borderRadius: function(theme) {
          return "".concat(theme.get.rem(theme.shape.border.radius, theme.shape.border.unit));
        },
        color: function(theme, props) {
          return theme.get.color(props.color || 'primary', 'text');
        },
        padding: function(theme) {
          return "".concat(theme.get.rem(theme.spacing.xs, theme.shape.unit)) +
            " ".concat(theme.get.rem(theme.spacing.s, theme.shape.unit));
        },
      },
      topOffset: 8,
    },
    variants: {
      'root': {
        props: {
          variant: 'root',
        },
        styles: {},
      },
      'contained': {
        props: {
          variant: 'contained',
        },
        styles: {},
      },
      'dashed': {
        props: {
          tooltipJCss: {
            backgroundColor: function(theme, props) {
              return theme.get.color(props.color || 'primary', 'text');
            },
            border: function(theme, props) {
              return theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dashed', props.color ||
                'primary', 'main');
            },
            color: function(theme, props) {
              return theme.get.color(props.color === 'light' ? 'dark' : 'light', 'text');
            },
          },
          variant: 'dashed',
        },
        styles: {},
      },
      'dotted': {
        props: {
          tooltipJCss: {
            backgroundColor: function(theme, props) {
              return theme.get.color(props.color || 'primary', 'text');
            },
            border: function(theme, props) {
              return theme.get.border(theme.shape.border.size, theme.shape.border.unit, 'dotted', props.color ||
                'primary', 'main');
            },
            color: function(theme, props) {
              return theme.get.color(props.color === 'light' ? 'dark' : 'light', 'text');
            },
          },
          variant: 'dotted',
        },
        styles: {},
      },
      'outlined': {
        props: {
          tooltipJCss: {
            backgroundColor: function(theme, props) {
              return theme.get.color(props.color || 'primary', 'text');
            },
            border: function(theme, props) {
              return theme.get.border(theme.shape.border.size, theme.shape.border.unit, theme.shape.border.shape,
                props.color || 'primary', 'main');
            },
            color: function(theme, props) {
              return theme.get.color(props.color === 'light' ? 'dark' : 'light', 'text');
            },
          },
          variant: 'outlined',
        },
        styles: {},
      },
    },
  },
};
export default Tooltip;
