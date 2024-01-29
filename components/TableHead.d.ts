import { ForwardRefExoticComponent, RefAttributes, ReactElement } from 'react';
import TableRow from './TableRow';
import { BoxProps } from './Box';
import { JCssProps, Theme } from '../types';
export interface TableHeadProps extends Omit<BoxProps, 'color'> {
    /**
     * The name of the color to apply on the html element
     */
    boxVariant?: BoxProps['variant'];
    /**
     * The value to be shown as content of the div
     */
    children: ReactElement<typeof TableRow> | ReactElement<typeof TableRow>[];
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: string | 'C4tTableHead';
    /**
     * The name of the variant to apply on the TableHead element
     */
    variant?: string;
}
export declare const TableHead: ForwardRefExoticComponent<TableHeadProps & RefAttributes<HTMLDivElement>>;
export default TableHead;
