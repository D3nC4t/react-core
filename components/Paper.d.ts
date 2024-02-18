import { ForwardRefExoticComponent } from 'react';
import { BoxProps } from './Box';
import { JCssProps, Shadow, Theme } from '../types';
declare const DISPLAY_NAME: string;
export interface PaperProps extends Omit<BoxProps, 'variant'> {
    /**
     * The shadow to apply on the html element
     */
    $bShadow?: string | keyof Theme['shadow'] | Shadow;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme, PaperProps>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The name of the variant to apply on the html element
     */
    variant?: 'bordered' | 'root' | 'round-bordered' | 'rounded' | 'round-shadowed' | 'shadowed' | string;
}
export declare const Paper: ForwardRefExoticComponent<PaperProps>;
export default Paper;
