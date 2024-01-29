import { ForwardRefExoticComponent, RefAttributes, ReactElement } from 'react';
import TableCell from './TableCell';
import { BoxProps } from './Box';
import { JCssProps, Theme } from '../types';
export interface TableRowProps extends Omit<BoxProps, 'color'> {
    /**
     * The name of the color to apply on the html element
     */
    boxVariant?: BoxProps['variant'];
    /**
     * The value to be shown as content of the div
     */
    children: ReactElement<typeof TableCell>[];
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: string | 'C4tTableRow';
    /**
     * The name of the variant to apply on the TableRow element
     */
    variant?: string;
}
export declare const TableRow: ForwardRefExoticComponent<TableRowProps & RefAttributes<HTMLDivElement>>;
export default TableRow;
