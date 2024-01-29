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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormattedMessage } from 'react-intl';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import Badge from '../../components/Badge';
import Box from '../../components/Box';
import Icon from '../../components/Icon';
import LocaleProvider from '../../translations/component';
import Typography from '../../components/Typography';
import { appTheme } from '../../theme';
import { BadgeControls } from '../controls';
Badge.displayName = 'Badge';
Box.displayName = 'Box';
Icon.displayName = 'Icon';
Typography.displayName = 'Typography';
var meta = {
    title: 'Core/Components/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: BadgeControls,
};
export default meta;
export var Default = {
    args: {
        text: 11,
        children: 'Badge',
    },
};
var renderThemeColorsAndMutations = function (props) {
    var $groups = [];
    for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
        var color = _a[_i];
        $groups.push(_jsx(Box, __assign({ jCss: {
                padding: '1rem',
                border: appTheme.get.border(appTheme.shape.border.size, appTheme.shape.border.unit, appTheme.shape.border.shape, 'grey', 'darker'),
                alignItems: 'start',
            }, variant: 'flex-column' }, { children: _jsxs(LocaleProvider, __assign({ module: 'storybook' }, { children: [_jsx(Typography, __assign({ variant: 'h4', tag: 'div' }, { children: _jsx(FormattedMessage, { id: 'examples.color', values: { name: color } }) })), _jsx(Badge, __assign({}, props, { color: color }, { children: _jsx(FormattedMessage, { id: 'badge.no-text' }) })), _jsx(Badge, __assign({}, props, { text: 411, color: color }, { children: _jsx(FormattedMessage, { id: 'badge.with-text' }) })), _jsx(Badge, __assign({}, props, { color: color }, { children: _jsx(Icon, { icon: faMessage }) })), _jsx(Badge, __assign({}, props, { text: 411, color: color }, { children: _jsx(Icon, { icon: faMessage }) }))] })) }), color));
    }
    return (_jsx(Box, __assign({ variant: 'flex-row' }, { children: $groups })));
};
export var Root = {
    args: {
        variant: 'root',
    },
    render: renderThemeColorsAndMutations,
};
export var BottomRight = {
    args: {
        variant: 'root',
        position: 'bottom-right',
    },
    render: renderThemeColorsAndMutations,
};
export var BottomLeft = {
    args: {
        variant: 'root',
        position: 'bottom-left',
    },
    render: renderThemeColorsAndMutations,
};
export var TopRight = {
    args: {
        variant: 'root',
        position: 'top-right',
    },
    render: renderThemeColorsAndMutations,
};
export var TopLeft = {
    args: {
        variant: 'root',
        position: 'top-left',
    },
    render: renderThemeColorsAndMutations,
};
