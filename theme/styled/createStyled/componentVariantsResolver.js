export default function componentVariantsResolver(props) {
    var _a;
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
        themeVariants['root'].styles || {},
        themeVariants[props.variant].styles,
    ];
}
