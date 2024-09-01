var AccordionSummary = {
  C4tAccordionSummary: {
    defaultProps: {},
    variants: {
      'root': {
        styles: {
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          cursor: 'pointer',
          justifyContent: 'space-between',
          '&.disabled': {
            cursor: 'default',
          },
          '& .content': {
            flexGrow: 1,
          },
          '& .icon-box': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: function(theme) {
              return theme.get.rem(16);
            },
            minHeight: function(theme) {
              return theme.get.rem(16);
            },
            padding: function(theme) {
              return theme.get.rem(theme.spacing.s, theme.shape.unit);
            },
          },
        },
      },
    },
  },
};
export default AccordionSummary;
