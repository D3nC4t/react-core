import { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { BoxProps } from './Box';
import type { ColorVariants, JCssProps, Theme } from '../types';
declare const DISPLAY_NAME: string;
export interface TimePickerProps extends Omit<BoxProps, 'children' | 'onChange'> {
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
     * The method that will be triggered every time the time gets changed
     */
    onChange?: (value: string) => void;
    /**
     * The time selected
     */
    value?: string;
    /**
     * The name of the variant to apply on the TimePicker element
     */
    variant?: string;
}
export declare const TimePicker: ForwardRefExoticComponent<TimePickerProps & RefAttributes<HTMLDivElement>>;
export default TimePicker;
