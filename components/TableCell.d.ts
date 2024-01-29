import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { BoxProps } from './Box';
import { ChildElement, JCssProps, Theme } from '../types';
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
    name?: string | 'C4tTableCell';
    /**
     * The number of rows to grow by default is 1
     */
    rowspan?: number;
    /**
     * The tag to be used as html element, by default is used td
     */
    tag?: 'td' | 'th';
    /**
     * The name of the variant to apply on the TableCell element
     */
    variant?: string;
}
export declare const TableCell: ForwardRefExoticComponent<TableCellProps & RefAttributes<HTMLDivElement>>;
export default TableCell;
