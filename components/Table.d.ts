import { ForwardRefExoticComponent, ReactElement, RefAttributes } from 'react';
import Body from './Table/Body';
import Head from './Table/Head';
import Row from './Table/Row';
import { BoxProps } from './Box';
import { ColorVariants, JCssProps, Theme } from '../types';
export { default as Body } from './Table/Body';
export { default as Cell } from './Table/Cell';
export { default as Head } from './Table/Head';
export { default as Row } from './Table/Row';
declare const DISPLAY_NAME: string;
export interface TableProps extends Omit<BoxProps, 'color'> {
    /**
     * The name of the color to apply on the html element
     */
    boxVariant?: BoxProps['variant'];
    /**
     * The value to be shown as content of the div
     */
    children: ReactElement<typeof Body | typeof Head | typeof Row> | ReactElement<typeof Body | typeof Head | typeof Row>[];
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
     * The name of the variant to apply on the Table element
     */
    variant?: string;
}
export declare const Table: ForwardRefExoticComponent<TableProps & RefAttributes<HTMLDivElement>>;
export default Table;
