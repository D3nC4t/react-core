import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { BoxProps } from '../Box';
import { ChildElement, JCssProps, Theme } from '../../types';
declare const DISPLAY_NAME: string;
export interface TableCellProps extends Omit<BoxProps, 'color' | 'tag'> {
    /**
     * The name of the color to apply on the html element
     */
    boxVariant?: BoxProps['variant'];
    /**
     * The value to be shown as content of the div
     */
    children: ChildElement;
    /**
     * The number of columns to grow by default is 1
     */
    colspan?: number;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The number of rows to grow by default is 1
     */
    rowspan?: number;
    /**
     * The tag to be used as html element, by default is used td
     */
    tag?: 'td' | 'th';
    /**
     * The name of the variant to apply on the Cell element
     */
    variant?: string;
}
export declare const Cell: ForwardRefExoticComponent<TableCellProps & RefAttributes<HTMLDivElement>>;
export default Cell;
