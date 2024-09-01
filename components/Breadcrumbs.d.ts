import { ForwardRefExoticComponent, ReactElement, RefAttributes } from 'react';
import Icon from './Icon';
import Link from './Link';
import { BoxProps } from './Box';
import { ColorVariants, JCssProps, Theme } from '../types';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
declare const DISPLAY_NAME: string;
export type Crumb = ReactElement<typeof Link | typeof Icon>;
export type CrumbLink = ReactElement<typeof Link>;
export interface BreadcrumbsProps extends BoxProps {
    /**
     * The index of the active element
     */
    active?: number;
    /**
     * The value to be shown as content of the div
     */
    children: CrumbLink[];
    /**
     * The name of the color to apply on the html element, it can be also a static color(rgb, hex, etc)
     */
    color?: keyof Theme['color'] | string;
    /**
     * The name of the color variant to apply on the html element
     */
    colorVariant?: keyof ColorVariants;
    /**
     * The icon to show as delimiter
     */
    icon?: IconDefinition;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The name of the variant to apply on the Breadcrumbs element
     */
    variant?: string;
}
export declare const Breadcrumbs: ForwardRefExoticComponent<BreadcrumbsProps & RefAttributes<HTMLDivElement>>;
export default Breadcrumbs;
