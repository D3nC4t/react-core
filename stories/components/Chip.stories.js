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
import { useTranslations } from '../../translations';
import { appTheme } from '../../theme';
import { ChipControls } from '../controls';
Avatar.displayName = 'Avatar';
Box.displayName = 'Box';
Chip.displayName = 'Chip';
Icon.displayName = 'Icon';
Typography.displayName = 'Typography';
var meta = {
    title: 'Core/Components/Chip',
    component: Chip,
    tags: ['autodocs'],
    argTypes: ChipControls,
};
export default meta;
var renderComponentMutations = function (props) {
    var $components = [
        _createElement(Chip, __assign({}, props, { key: 'div', label: 'div Chip' })),
        _createElement(Chip, __assign({}, props, { component: 'button', key: 'button', label: 'button Chip' })),
        _createElement(Chip, __assign({}, props, { component: 'a', key: 'link', href: '#', label: 'link Chip' })),
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
var AdornmentMutations = function (props) {
    var _a = useTranslations('storybook'), intl = _a[0], hasLoadedIntl = _a[1];
    var $components = [
        _createElement(Chip, __assign({}, props, { key: 'div', label: intl.formatMessage({ id: 'chip.removable' }), onRemove: function () { return console.log('On Remove'); } })),
        _createElement(Chip, __assign({}, props, { component: 'button', key: 'removable-button', label: intl.formatMessage({ id: 'chip.removable.with-icon' }), onRemove: function () { return console.log('On Remove'); }, prepend: _jsx(Icon, { icon: faHome }) })),
        _createElement(Chip, __assign({}, props, { component: 'button', key: 'button', label: intl.formatMessage({ id: 'chip.button-icon' }), prepend: _jsx(Icon, { icon: faHome }) })),
        _createElement(Chip, __assign({}, props, { component: 'a', key: 'removable-link', label: intl.formatMessage({ id: 'chip.removable.link-avatar' }), href: '#', onRemove: function () { return console.log('On Remove'); }, prepend: _jsx(Avatar, { alt: 'test 1', src: '111', variant: 'contained' }) })),
        _createElement(Chip, __assign({}, props, { component: 'a', key: 'link', label: intl.formatMessage({ id: 'chip.link-avatar' }), href: '#', prepend: _jsx(Avatar, { alt: 'test 1', src: '111', variant: 'contained' }) })),
    ];
    return (_jsx(Box, __assign({ variant: 'flex-row' }, { children: hasLoadedIntl && $components })));
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
            }, variant: 'flex-column' }, { children: [_jsx(Typography, __assign({ variant: 'h6', tag: 'div' }, { children: text })), renderComponentMutations(props), _jsx(AdornmentMutations, __assign({}, props))] }), color));
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
