import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { TypographyProps } from './Typography';
import { ChildElement, JCssProps, Theme } from '../types';
export interface LinkProps extends TypographyProps {
    /**
     * The value to be shown as content of the div
     */
    children: ChildElement;
    /**
     * The path/url to navigate to, if used will trigger window.location.href
     */
    href?: string;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: string;
    /**
     * The name of the variant to apply on the Typography/link element
     */
    typographyVariant?: TypographyProps['variant'];
    /**
     * The name of the variant to apply on the Link element
     */
    variant?: string;
}
export declare const Link: ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLDivElement>>;
export default Link;
