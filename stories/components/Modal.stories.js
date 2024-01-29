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
import { useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import LocaleProvider from '../../translations/component';
import { ModalControls } from '../controls';
Box.displayName = 'Box';
Modal.displayName = 'Modal';
var meta = {
    title: 'Core/Components/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: ModalControls,
};
export default meta;
export var Default = {
    args: {
        children: _jsx("span", { children: "test" }),
    },
};
var WrappedModal = function (props) {
    var ref = useRef(null);
    var _a = useState(0), refresh = _a[0], setRefresh = _a[1];
    return (_jsx(LocaleProvider, __assign({ module: 'storybook' }, { children: _jsxs(Box, { children: [refresh > 0 && _jsxs(Button, __assign({ variant: 'contained', onClick: function () {
                        var _a;
                        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.openPortal();
                    } }, { children: [_jsx(FormattedMessage, { id: "open" }), " ", _jsx(FormattedMessage, { id: "variant", values: { name: props.variant } })] })), _jsx(Modal, __assign({ ref: ref }, props, { updateRef: function () {
                        setRefresh(function (prev) { return prev + 1; });
                    } }, { children: _jsx("span", { children: _jsx(FormattedMessage, { id: "variant", values: { name: props.variant } }) }) }))] }) })));
};
export var Root = {
    args: {
        variant: 'root',
    },
    render: function (props) { return _jsx(WrappedModal, __assign({}, props)); },
};
export var Bordered = {
    args: {
        variant: 'bordered',
    },
    render: function (props) { return _jsx(WrappedModal, __assign({}, props)); },
};
export var RoundBordered = {
    args: {
        variant: 'round-bordered',
    },
    render: function (props) { return _jsx(WrappedModal, __assign({}, props)); },
};
export var Rounded = {
    args: {
        variant: 'rounded',
    },
    render: function (props) { return _jsx(WrappedModal, __assign({}, props)); },
};
