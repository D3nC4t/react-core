var DatePicker = {
  C4tDatePicker: {
    defaultProps: {},
    variants: {
      'root': {
        styles: {
          '&.picker': {
            backgroundColor: function(theme) {
              return theme.color.light.main;
            },
            borderRadius: function(theme) {
              return "".concat(theme.shape.border.radius).concat(theme.shape.border.unit);
            },
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            width: '16rem',
          },
          '& .before, & .after, & .meddle': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          },
          '& .header': {
            gap: "0.25rem",
            '& > .week-day': {
              display: "flex",
              justifyContent: "center",
              width: "2rem",
            },
          },
          '& .row': {
            gap: "0.25rem",
            '& > .day': {
              width: "2rem",
              height: "2rem",
              justifyContent: "center",
              padding: 0,
              '&[data-before="true"], &[data-after="true"]': {
                color: function(theme) {
                  return theme.color.dark.main;
                },
              },
            },
            '& .month': {
              width: "5rem",
              height: "2rem",
              justifyContent: "center",
              padding: 0,
            },
          },
        },
      },
    },
  },
};
export default DatePicker;
