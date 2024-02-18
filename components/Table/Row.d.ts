import { ForwardRefExoticComponent, RefAttributes, ReactElement } from 'react';
import Cell from './Cell';
import { BoxProps } from '../Box';
import { JCssProps, Theme } from '../../types';
declare const DISPLAY_NAME: string;
export interface TableRowProps extends Omit<BoxProps, 'color'> {
    /**
     * The name of the color to apply on the html element
     */
    boxVariant?: BoxProps['variant'];
    /**
     * The value to be shown as content of the div
     */
    children: ReactElement<typeof Cell>[];
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The name of the variant to apply on the Row element
     */
    variant?: string;
}
export declare const Row: ForwardRefExoticComponent<TableRowProps & RefAttributes<HTMLDivElement>>;
export default Row;
