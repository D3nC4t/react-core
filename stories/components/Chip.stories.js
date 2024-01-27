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
import { createElement as _createElement } from "react";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../../components/Avatar';
import Box from '../../components/Box';
import Chip from '../../components/Chip';
import Icon from '../../components/Icon';
import Typography from '../../components/Typography';
import { appTheme } from '../../theme';
Avatar.displayName = 'Avatar';
Box.displayName = 'Box';
Chip.displayName = 'Chip';
Icon.displayName = 'Icon';
Typography.displayName = 'Typography';
var meta = {
    title: 'Core/Components/Chip',
    component: Chip,
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;
var renderComponentMutations = function (props) {
    var $components = [
        _createElement(Chip, __assign({}, props, { key: 'div', label: 'Div Chip' })),
        _createElement(Chip, __assign({}, props, { component: 'button', key: 'button', label: 'Button Chip' })),
        _createElement(Chip, __assign({}, props, { component: 'a', key: 'link', label: 'Link Chip' })),
    ];
    return (_jsx(Box, __assign({ variant: 'flex-row' }, { children: $components })));
};
export var Default = {
    args: {
        label: 'Default Chip',
        onRemove: undefined,
    },
    render: renderComponentMutations,
};
var renderAdornmentMutations = function (props) {
    var $components = [
        _createElement(Chip, __assign({}, props, { key: 'div', label: 'Removable Chip', onRemove: function () { return console.log('On Remove'); } })),
        _createElement(Chip, __assign({}, props, { component: 'button', key: 'removable-button', label: 'Removable button Icon Chip', onRemove: function () { return console.log('On Remove'); }, prepend: _jsx(Icon, { icon: faHome }) })),
        _createElement(Chip, __assign({}, props, { component: 'button', key: 'button', label: 'Button Icon Chip', prepend: _jsx(Icon, { icon: faHome }) })),
        _createElement(Chip, __assign({}, props, { component: 'a', key: 'removable-link', label: 'Removable link Avatar Chip', onRemove: function () { return console.log('On Remove'); }, prepend: _jsx(Avatar, { alt: 'test 1', src: '111', variant: 'contained' }) })),
        _createElement(Chip, __assign({}, props, { component: 'a', key: 'link', label: 'Link Avatar Chip', prepend: _jsx(Avatar, { alt: 'test 1', src: '111', variant: 'contained' }) })),
    ];
    return (_jsx(Box, __assign({ variant: 'flex-row' }, { children: $components })));
};
var renderThemeColorsAndMutations = function (props) {
    var $groups = [];
    for (var _i = 0, _a = Object.keys(appTheme.color); _i < _a.length; _i++) {
        var color = _a[_i];
        var firstLetter = color[0].toUpperCase();
        var text = firstLetter + color.substring(1, color.length);
        props.color = color;
        $groups.push(_jsxs(Box, __assign({ jCss: {
                padding: '1rem',
                border: appTheme.get.border(appTheme.shape.border.size, appTheme.shape.border.unit, appTheme.shape.border.shape, 'grey', 'darker'),
                alignItems: 'start',
            }, variant: 'flex-column' }, { children: [_jsx(Typography, __assign({ variant: 'h6', tag: 'div' }, { children: text })), renderComponentMutations(props), renderAdornmentMutations(props)] }), color));
    }
    return (_jsx(Box, __assign({ variant: 'flex-row' }, { children: $groups })));
};
export var Root = {
    args: {
        label: 'Default Chip',
        onRemove: undefined,
    },
    render: renderThemeColorsAndMutations,
};
