import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { DateTime } from 'luxon';
import { BoxProps } from '../Box';
import { JCssProps, Theme } from '../../types';
declare const DISPLAY_NAME: string;
export interface MonthPickerProps extends Omit<BoxProps, 'children'> {
    /**
     * The name of the color to apply on the html element
     */
    boxVariant?: BoxProps['variant'];
    /**
     * Use false to skip the setter of the selectedDate, by default this is true
     */
    forceDate?: boolean;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The name of the variant to apply on the Body element
     */
    variant?: string;
}
export type Month = {
    date: DateTime;
    month: number;
    text: string;
};
export declare const MonthPicker: ForwardRefExoticComponent<MonthPickerProps & RefAttributes<HTMLDivElement>>;
export default MonthPicker;
