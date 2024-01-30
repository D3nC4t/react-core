var Backdrop = function(theme) {
  return ({
    C4tBackdrop: {
      defaultProps: {
        variant: 'flex-column',
      },
      variants: {
        'root': {
          styles: {},
        },
        'flex-column': {
          props: {
            $gap: theme.spacing.sm,
          },
          styles: {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          },
        },
        'flex-row': {
          props: {
            $gap: theme.spacing.sm,
          },
          styles: {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          },
        },
      },
    },
  });
};
export default Backdrop;
