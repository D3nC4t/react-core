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
import { jsx as _jsx } from "react/jsx-runtime";
import { FormattedMessage } from 'react-intl';
import Fade from '../../components/Fade';
import Typography from '../../components/Typography';
import LocaleProvider from '../../translations/component';
import { FadeControls } from '../controls';
Fade.displayName = 'Fade';
Typography.displayName = 'Typography';
var meta = {
    title: 'Core/Components/Fade',
    component: Fade,
    tags: ['fade'],
    argTypes: FadeControls,
};
export default meta;
export var Root = {
    args: {
        children: _jsx(Typography, __assign({ variant: 'p' }, { children: _jsx(LocaleProvider, __assign({ module: 'storybook' }, { children: _jsx(FormattedMessage, { id: 'some-text' }) })) })),
    },
};
