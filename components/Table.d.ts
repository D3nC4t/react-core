import { ForwardRefExoticComponent, ReactElement, RefAttributes } from 'react';
import TableBody from './TableBody';
import TableHead from './TableHead';
import TableRow from './TableRow';
import { BoxProps } from './Box';
import { ColorVariants, JCssProps, Theme } from '../types';
export interface TableProps extends Omit<BoxProps, 'color'> {
    /**
     * The name of the color to apply on the html element
     */
    boxVariant?: BoxProps['variant'];
    /**
     * The value to be shown as content of the div
     */
    children: ReactElement<typeof TableBody | typeof TableHead | typeof TableRow> | ReactElement<typeof TableBody | typeof TableHead | typeof TableRow>[];
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
    name?: string | 'C4tTable';
    /**
     * The name of the variant to apply on the Table element
     */
    variant?: string;
}
export declare const Table: ForwardRefExoticComponent<TableProps & RefAttributes<HTMLDivElement>>;
export default Table;
