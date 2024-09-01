import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { BoxProps } from '../Box';
import { JCssProps, Theme } from '../../types';
declare const DISPLAY_NAME: string;
export interface PickerViewProps extends Omit<BoxProps, 'children'> {
    /**
     * The name of the color to apply on the html element
     */
    boxVariant?: BoxProps['variant'];
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
export declare const PickerView: ForwardRefExoticComponent<PickerViewProps & RefAttributes<HTMLDivElement>>;
export default PickerView;
