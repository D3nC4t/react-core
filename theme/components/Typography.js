var Typography = {
  C4tTypography: {
    defaultProps: {
      variant: 'p',
      jCss: {
        alignItems: 'center',
        display: 'flex',
        gap: function(theme) {
          return theme.spacing.s;
        },
      },
    },
    variants: {},
  },
};
export default Typography;
