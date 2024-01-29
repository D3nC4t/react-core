var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { ColorControls, ColorVariantControls } from './color';
var IconControls = __assign(__assign(__assign({}, ColorControls), ColorVariantControls), { icon: {
        description: 'The icon to display, should be a IconDefinition from @fortawesome/free-solid-svg-icons.',
        control: { type: 'null' },
    }, name: {
        description: 'The name of the component, this is the name that fetches the theme styles.',
        control: { type: 'text' },
    }, size: {
        description: 'The size of the icon'
            + ', check the FontAwesomeIcon component to see the sizes available an other props.',
        control: { type: 'text' },
    } });
export default IconControls;
