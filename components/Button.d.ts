import { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconProps } from './Icon';
import { TypographyProps } from './Typography';
import { ChildElement, JCssProps, Theme } from '../types';
declare const DISPLAY_NAME: string;
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /**
     * The value to be shown as content of the div
     */
    children?: ChildElement;
    /**
     * The name of the color to apply on the html element
     */
    color?: keyof Theme['color'];
    /**
     * To disable the button
     */
    disabled?: boolean;
    /**
     * The icon to show after the text
     */
    endIcon?: IconDefinition;
    /**
     * The props for the end icon
     */
    endIconProps?: IconProps;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme, ButtonProps>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The size for the button
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * The icon to show before the text
     */
    startIcon?: IconDefinition;
    /**
     * The props for the start icon
     */
    startIconProps?: IconProps;
    /**
     * The properties to apply to the text
     */
    typographyProps?: TypographyProps;
    /**
     * The name of the variant to apply on the html element
     */
    variant?: 'contained' | 'dashed' | 'dotted' | 'icon' | 'outlined' | 'root' | 'shadowed' | 'text' | string;
}
export declare const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>;
export default Button;
