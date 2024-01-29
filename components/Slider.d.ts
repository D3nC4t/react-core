import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { BoxProps } from './Box';
import { JCssProps, Theme } from '../types';
export interface SliderProps extends Omit<BoxProps, 'children' | 'jCss' | 'onChange' | 'variant'> {
    /**
     * The variant for the box element
     */
    boxVariant?: BoxProps['variant'];
    /**
     * Use true to disable the slider
     */
    disabled?: boolean;
    /**
     * The name to be used on the hidden range input
     */
    inputName?: string;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme, SliderProps>;
    /**
     * The minimum value for the slider
     */
    min?: number;
    /**
     * The number of marks to be shown on the slider
     */
    marks?: boolean;
    /**
     * The maximum value for the slider
     */
    max?: number;
    /**
     * The name for this element
     */
    name?: string | 'C4tSlider';
    /**
     * The function to be called when the value changes, note that the scroll is being debounced
     */
    onChange?: (value: number) => void;
    /**
     * The distance between steps in the slider
     */
    step?: number;
    /**
     * The initial value for the slider
     */
    value?: number;
    /**
     * The name of the variant to apply on the html element
     */
    variant?: 'contained' | 'dashed' | 'dotted' | 'outlined' | 'root' | 'shadowed' | string;
}
export declare const Slider: ForwardRefExoticComponent<SliderProps & RefAttributes<HTMLDivElement>>;
export default Slider;
