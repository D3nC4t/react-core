var ScrollBox = {
  C4tScrollBox: {
    defaultProps: {},
    variants: {
      'root': {
        styles: {
          width: '100%',
          position: 'relative',
          '.scroll-box': {
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            position: 'relative',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
          '.trail > .track': {
            width: '100%',
            height: '100%',
            cursor: 'pointer',
          },
          '.trail[data-direction="vertical"]': {
            position: 'absolute',
            width: '8px',
            height: '100%',
            margin: '8px 0',
            top: '0',
            right: '0',
            '& .thumb': {
              position: 'absolute',
              width: '100%',
              borderRadius: '8px',
              '&[data-show-scroll="true"]': {
                backgroundColor: function(theme) {
                  return theme.color.secondary.light;
                },
                opacity: 0.75,
              },
              '&[data-show-thumb="true"]': {
                backgroundColor: function(theme) {
                  return theme.color.secondary.main;
                },
                opacity: 1,
              },
            },
          }
        },
      },
    },
  },
};
export default ScrollBox;
