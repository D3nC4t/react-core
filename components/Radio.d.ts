import { ForwardRefExoticComponent, MouseEvent, RefAttributes } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { BoxProps } from './Box';
import { ColorVariants, JCssProps, Theme, ThemeColor } from '../types';
declare const DISPLAY_NAME: string;
export interface RadioProps extends Omit<BoxProps, 'color' | 'children' | 'onChange' | 'variant'> {
    /**
     * The variants to apply to the box element
     */
    boxVariant?: BoxProps['variant'];
    /**
     * The color to apply to the radio button
     */
    color?: ThemeColor | string;
    /**
     * The name of the color variant to apply on the html element
     */
    colorVariant?: keyof ColorVariants;
    /**
     * The icon to show when the radio is checked
     */
    checkedIcon?: IconDefinition;
    /**
     * Use true to disable the radio button
     */
    disabled?: boolean;
    /**
     * The name for the hidden input element
     */
    inputName?: string;
    /**
     * Use true to show the radio button as invalid
     */
    invalid?: boolean;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The callback to be called when the radio button is clicked
     */
    onChange: (event: MouseEvent<SVGSVGElement | HTMLInputElement>, status: boolean) => void;
    /**
     * The type of the radio element, use checkbox for multiple selection
     */
    type?: 'radio' | 'checkbox';
    /**
     * The icon to show when the radio is unchecked
     */
    uncheckedIcon?: IconDefinition;
    /**
     * The initial value for the radio input
     */
    value?: boolean;
    /**
     * The name of the variant to apply on the html element
     */
    variant?: 'contained' | 'contained-checkmark' | 'contained-cross' | 'outlined' | 'outlined-checkmark' | 'outlined-cross' | 'root' | string;
}
export interface RadioRef {
    innerRef: SVGSVGElement | HTMLInputElement | null;
}
export declare const Radio: ForwardRefExoticComponent<RadioProps & RefAttributes<RadioRef>>;
export default Radio;
