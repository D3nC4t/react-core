import { ForwardRefExoticComponent, MouseEvent, ReactElement, RefAttributes } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Button from './Button';
import Icon from './Icon';
import { BoxProps } from './Box';
import { ChildElement, ColorVariants, JCssProps, Theme } from '../types';
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
     * The color for the alert
     */
    color?: keyof Theme['color'];
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
     * The name of the color variant to apply on icon elements
     */
    iconVariant?: keyof ColorVariants;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: string | 'C4tAlert';
    /**
     * The callback function to be called when the alert is closed
     */
    onClose?: (event: MouseEvent<HTMLButtonElement>) => void;
    /**
     * The severity for the alert
     */
    severity?: 'error' | 'info' | 'success' | 'warning';
    /**
     * The name of the variant to apply on the html element
     */
    variant?: string;
}
export declare const Alert: ForwardRefExoticComponent<AlertProps & RefAttributes<HTMLDivElement>>;
export default Alert;
