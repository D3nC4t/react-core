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
var StepperModal = {
  C4tStepperModal: {
    defaultProps: {},
    variants: {
      'root': {
        props: {
          $bgColorVariant: 'main',
        },
        styles: function(_a) {
          var _b;
          var theme = _a.theme,
            props = __rest(_a, ["theme"]);
          return ({
            height: 'auto',
            '& .steps': {
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              top: '0',
              left: '0',
              '& .step-indicator': {
                aspectRatio: '1/1',
                backgroundColor: theme.get.color((_b = props.color) !== null && _b !== void 0 ? _b : 'primary',
                  'text'),
                borderRadius: theme.shape.border.radius,
                cursor: 'pointer',
                margin: '0.5rem',
                width: '1rem',
                textAlign: 'center',
              },
            },
            '& .content': {
              marginLeft: '2rem',
              position: 'relative',
              width: 'calc(100% - 3rem)',
              '& .scroll-box': {
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              },
              '& .step': {
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              },
            },
          });
        },
      },
    },
  },
};
export default StepperModal;
