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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import Box from '../../components/Box';
import Link from '../../components/Link';
import { appTheme } from '../../theme';
import { LinkControls } from '../controls';
Box.displayName = 'Box';
Link.displayName = 'Link';
var meta = {
    title: 'Core/Components/Link',
    component: Link,
    tags: ['autodocs'],
    argTypes: LinkControls,
};
export default meta;
export var Default = {
    args: {
        children: 'Link',
        href: 'https://www.google.com',
    },
};
var renderThemeColorsAndMutations = function (props) {
    var $groups = [];
    for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
        var color = _a[_i];
        var firstLetter = color[0].toUpperCase();
        var text = firstLetter + color.substring(1, color.length);
        var links = [];
        for (var _b = 0, _c = Object.keys(appTheme.color[color]); _b < _c.length; _b++) {
            var colorVariant = _c[_b];
            var firstLetter_1 = colorVariant[0].toUpperCase();
            var variantText = firstLetter_1 + colorVariant.substring(1, colorVariant.length);
            links.push(_jsxs(Link, __assign({ color: color, colorVariant: colorVariant }, props, { children: [variantText, " ", text] }), colorVariant));
        }
        $groups.push(_jsx(Box, __assign({ jCss: {
                padding: '1rem',
                border: appTheme.get.border(appTheme.shape.border.size, appTheme.shape.border.unit, appTheme.shape.border.shape, 'grey', 'darker'),
                alignItems: 'start',
            }, variant: 'flex-column' }, { children: links }), color));
    }
    return (_jsx(Box, __assign({ variant: 'flex-row' }, { children: $groups })));
};
export var Root = {
    args: {
        href: 'https://www.google.com',
        variant: 'root',
    },
    render: renderThemeColorsAndMutations,
};
