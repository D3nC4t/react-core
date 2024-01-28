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
import Fade from '../../components/Fade';
import Typography from '../../components/Typography';
Fade.displayName = 'Fade';
Typography.displayName = 'Typography';
var meta = {
    title: 'Core/Components/Fade',
    component: Fade,
    tags: ['fade'],
    argTypes: {},
};
export default meta;
export var Root = {
    args: {
        children: _jsx(Typography, __assign({ variant: 'p' }, { children: "Test" })),
    },
};
