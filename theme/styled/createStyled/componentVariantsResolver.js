export default function componentVariantsResolver(props) {
  var _a, _b;
  var components = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.components;
  if (!components || !props.name || !props.variant) {
    return [];
  }
  var selectedComponent = components[props.name];
  if (!selectedComponent) {
    return [];
  }
  var themeVariants = selectedComponent.variants;
  if (!themeVariants || !themeVariants[props.variant]) {
    return [];
  }
  return [
    ((_b = themeVariants['root']) === null || _b === void 0 ? void 0 : _b.styles) || {},
    themeVariants[props.variant].styles,
  ];
}
