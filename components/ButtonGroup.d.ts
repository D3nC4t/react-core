import { ForwardRefExoticComponent, HTMLAttributes, RefAttributes, ReactElement } from 'react';
import Button from './Button';
import { JCssProps, Theme } from '../types';
export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * The value to be shown as content of the div
     */
    children: ReactElement<typeof Button>[];
    /**
     * The name of the color to apply on the html element
     */
    color?: keyof Theme['color'];
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme, ButtonGroupProps>;
    /**
     * The name for this element
     */
    name?: string | 'C4tButtonGroup';
    /**
     * The direction that the buttons should be shown
     */
    orientation?: 'vertical' | 'horizontal';
    /**
     * The size for the button
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * The name of the variant to apply on the html element
     */
    variant?: 'contained' | 'dashed' | 'dotted' | 'icon' | 'outlined' | 'root' | 'shadowed' | 'text' | string;
}
export declare const ButtonGroup: ForwardRefExoticComponent<ButtonGroupProps & RefAttributes<HTMLDivElement>>;
export default ButtonGroup;
