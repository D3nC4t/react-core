var ConfirmModal = {
  C4tConfirmModal: {
    defaultProps: {},
    variants: {
      'root': {
        styles: {
          padding: function(theme) {
            return theme.spacing.s;
          },
          display: 'flex',
          flexDirection: 'column',
          '& .content': {
            flexGrow: 1,
          },
          '& .actions': {
            marginLeft: 'auto',
          },
        },
      },
    },
  },
};
export default ConfirmModal;
