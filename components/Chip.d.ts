import React, { ForwardRefExoticComponent, HTMLAttributes, MouseEvent, ReactElement, RefAttributes } from 'react';
import Avatar from './Avatar';
import Icon from './Icon';
import { CircularLoadingProps } from './CircularLoading';
import { ColorVariants, JCssProps, Theme } from '../types';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
declare const DISPLAY_NAME: string;
export interface ChipProps<Tag extends keyof React.JSX.IntrinsicElements = 'div' | 'button' | 'a'> extends Omit<HTMLAttributes<React.JSX.IntrinsicElements[Tag]>, 'children'> {
    /**
     * The color for the chip element
     */
    color?: keyof Theme['color'] | string;
    /**
     * The name of the color variant to apply on the html element
     */
    colorVariant?: keyof ColorVariants;
    /**
     * The component to be used as root node, can be either a div, a button or a link
     */
    component?: Tag & ('a' | 'button' | 'div');
    /**
     * The link/anchor href to be used when the component is a link
     */
    href?: string;
    /**
     * The icon or avatar to be shown before the label
     */
    prepend?: ReactElement<typeof Avatar | typeof Icon>;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme, ChipProps<Tag>>;
    /**
     * The value to be shown as content of the div, button or a
     */
    label: string;
    /**
     * The name of the loading variant to apply on the CircularLoading element, by default is used the root variant
     */
    loadingVariant?: CircularLoadingProps['variant'];
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The action to be triggered when the remove icon is clicked
     */
    onRemove?: (event: MouseEvent<SVGSVGElement>) => void;
    /**
     * The color for the remove icon
     */
    removeColor?: keyof Theme['color'] | string;
    /**
     * The color variant for the remove icon
     */
    removeColorVariant?: keyof ColorVariants;
    /**
     * The icon to be shown after the label
     */
    removeIcon?: IconDefinition;
    /**
     * The name of the variant to apply on the html element
     */
    variant?: string;
}
export declare const Chip: ForwardRefExoticComponent<ChipProps & RefAttributes<HTMLDivElement>>;
export default Chip;
