var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import emotionStyled from '@emotion/styled';
import _extends from '../../../utils/extends';
import _objectWithoutProperties from '../../../utils/_objectWithoutProperties';
import createTheme from '../createTheme';
import getAndProcessVariantStyles from './getAndProcessVariantStyles';
import getDisplayName from './getDisplayName';
import processStyles from './processStyles';
import isObjectEmpty from '../../../utils/isObjectEmpty';
import lowercaseFirstLetter from '../../../utils/lowercaseFirstLetter';
var baseTheme = createTheme();
var defaultJCssFunction = function (props) {
    return processStyles(props, props.jCss);
};
defaultJCssFunction.filterProps = ['jCss'];
export default function createStyled(options) {
    if (options === void 0) { options = {}; }
    var _a = options.theme, defaultTheme = _a === void 0 ? baseTheme : _a, _b = options.jCssFunction, jCssFunction = _b === void 0 ? defaultJCssFunction : _b;
    var systemJCss = function (props) {
        var theme = isObjectEmpty(props.theme) ? defaultTheme : props.theme;
        return jCssFunction(_extends({}, props, { theme: theme }));
    };
    systemJCss.__c4t_systemJCss = true;
    function createC4tStyled(tag, stylesOptions) {
        if (stylesOptions === void 0) { stylesOptions = {}; }
        var componentName = stylesOptions.name, slot = stylesOptions.slot, _a = stylesOptions.skipJCss, skipJCss = _a === void 0 ? false : _a, _b = stylesOptions.dontForwardProp, dontForwardProp = _b === void 0 ? [] : _b, _c = stylesOptions.forwardProps, forwardProps = _c === void 0 ? [] : _c;
        var options = _objectWithoutProperties(stylesOptions, [
            'name', 'slot', 'skipJCss',
        ]);
        var label;
        if (process.env.NODE_ENV !== 'production') {
            if (componentName) {
                label = "".concat(componentName, "-").concat(lowercaseFirstLetter(slot || 'Root'));
            }
        }
        var defaultStyledResolver = emotionStyled(tag, _extends({
            shouldForwardProp: function (prop) {
                return forwardProps.includes(prop) || !(__spreadArray(['jCss', 'theme'], dontForwardProp, true).includes(prop)
                    || prop.startsWith('$'));
            },
            label: label
        }, options));
        var jCssStylesResolver = function (template) {
            var styles = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                styles[_i - 1] = arguments[_i];
            }
            var stylesWithDefaultTheme = styles ? styles.map(function (stylesArg) {
                if (typeof stylesArg === 'function' && stylesArg.__emotion_real !== stylesArg) {
                    return function (props) {
                        var inputTheme = props.theme;
                        return processStyles(props, stylesArg(_extends({
                            theme: isObjectEmpty(inputTheme) ? defaultTheme : inputTheme
                        }, props)));
                    };
                }
                return stylesArg;
            }) : [];
            var variantStyles = getAndProcessVariantStyles;
            variantStyles.filterProps = ['name', 'variant'];
            if (variantStyles) {
                stylesWithDefaultTheme.push(variantStyles);
            }
            if (!skipJCss) {
                stylesWithDefaultTheme.push(systemJCss);
            }
            if (typeof template === 'function' && template.__emotion_real !== template) {
                stylesWithDefaultTheme.unshift((function (props) {
                    var themeInput = props.theme;
                    return processStyles(props, template(_extends({
                        theme: isObjectEmpty(themeInput) ? defaultTheme : themeInput
                    }, props)));
                }));
            }
            else {
                stylesWithDefaultTheme.unshift(template);
            }
            var Component = defaultStyledResolver.apply(void 0, __spreadArray([[]], stylesWithDefaultTheme, false));
            if (process.env.NODE_ENV !== 'production') {
                var displayName = void 0;
                if (componentName) {
                    displayName = "".concat(componentName).concat(slot || '');
                }
                if (displayName === undefined) {
                    displayName = "Styled(".concat(getDisplayName(tag), ")");
                }
                Component.displayName = displayName;
            }
            return Component;
        };
        if (defaultStyledResolver.withConfig) {
            jCssStylesResolver.withConfig = defaultStyledResolver.withConfig;
        }
        return jCssStylesResolver;
    }
    return createC4tStyled;
}
