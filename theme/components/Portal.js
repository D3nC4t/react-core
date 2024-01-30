var Portal = {
  C4tPortal: {
    defaultProps: {
      variant: 'center',
    },
    variants: {
      'root': {
        styles: {},
      },
      'bottom': {
        styles: {
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
        },
      },
      'bottom-left': {
        styles: {
          position: 'absolute',
          bottom: 0,
          left: 0,
        },
      },
      'bottom-right': {
        styles: {
          position: 'absolute',
          bottom: 0,
          right: 0,
        },
      },
      'center': {
        styles: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      },
      'left': {
        styles: {
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
        },
      },
      'right': {
        styles: {
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
        },
      },
      'top': {
        styles: {
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
        },
      },
      'top-left': {
        styles: {
          position: 'absolute',
          top: 0,
          left: 0,
        },
      },
      'top-right': {
        styles: {
          position: 'absolute',
          top: 0,
          right: 0,
        },
      },
    },
  },
};
export default Portal;
