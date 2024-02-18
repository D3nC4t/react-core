import { ForwardRefExoticComponent, MouseEvent, ReactElement, RefAttributes } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Button from './Button';
import Icon from './Icon';
import { BoxProps } from './Box';
import { ChildElement, ColorVariants, JCssProps, Theme } from '../types';
declare const DISPLAY_NAME: string;
export interface AlertProps extends Omit<BoxProps, 'variant'> {
    /**
     * The variant for the box element
     */
    boxVariant?: BoxProps['variant'];
    /**
     * The icon to show to close the alert
     */
    closeIcon?: IconDefinition;
    /**
     * The color for the close icon
     */
    closeIconColor?: keyof Theme['color'];
    /**
     * The name of the color variant to apply on the close icon
     */
    closeIconColorVariant?: keyof ColorVariants;
    /**
     * The color for the alert
     */
    color?: keyof Theme['color'];
    /**
     * The name of the color variant to apply on the html element
     */
    colorVariant?: keyof ColorVariants;
    /**
     * The value to be shown as content of the div
     */
    children: ChildElement;
    /**
     * An additional button to be shown before the close button
     */
    extraAction?: ReactElement<typeof Button>;
    /**
     * The icon to be used
     */
    icon?: ReactElement<typeof Icon>;
    /**
     * The color for the icon
     */
    iconColor?: keyof Theme['color'];
    /**
     * The name of the color variant to apply on icon elements
     */
    iconColorVariant?: keyof ColorVariants;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The callback function to be called when the alert is closed
     */
    onClose?: (event: MouseEvent<HTMLButtonElement>) => void;
    /**
     * The severity for the alert, by default is info
     */
    severity?: 'error' | 'info' | 'success' | 'warning';
    /**
     * The name of the variant to apply on the html element
     */
    variant?: string;
}
export declare const Alert: ForwardRefExoticComponent<AlertProps & RefAttributes<HTMLDivElement>>;
export default Alert;
