import { ForwardRefExoticComponent, RefAttributes, MouseEvent } from 'react';
import { ModalProps } from './Modal';
import type { ChildElement, ColorVariants, JCssProps, Theme } from '../types';
import { PortalRef } from './Portal';
declare const DISPLAY_NAME: string;
export interface ConfirmModalProps extends ModalProps {
    /**
     * The name of the color to apply on the html element, it can be also a static color(rgb, hex, etc)
     */
    actionsColor?: keyof Theme['color'] | string;
    /**
     * The value to be shown as content of the div
     */
    children: ChildElement;
    /**
    * The name of the color to apply on the html element, it can be also a static color(rgb, hex, etc)
    */
    color?: keyof Theme['color'] | string;
    /**
    * The name of the color variant to apply on the html element
    */
    colorVariant?: keyof ColorVariants;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * Use true to use buttons without grouping
     */
    noActionGroup?: boolean;
    /**
     * Action to trigger once the user click on Cancel
     */
    onCancel: (event: MouseEvent<HTMLButtonElement>) => void;
    /**
     * Action to trigger once the user click on Confirm
     */
    onConfirm: (event: MouseEvent<HTMLButtonElement>) => void;
    /**
     * The name of the variant to apply on the ConfirmModal element
     */
    variant?: string;
}
export declare const ConfirmModal: ForwardRefExoticComponent<ConfirmModalProps & RefAttributes<PortalRef>>;
export default ConfirmModal;
