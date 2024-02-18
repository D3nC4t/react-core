import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconProp, IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { ColorVariants, Theme } from '../types';
declare const DISPLAY_NAME: string;
export interface IconProps extends FontAwesomeIconProps {
    /**
     * The color for the icon
     */
    color?: keyof Theme['color'] | string;
    /**
     * The color variant for the icon
     */
    colorVariant?: keyof ColorVariants;
    /**
     * The icon to be used
     */
    icon: IconProp | IconDefinition;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * Icon size
     */
    size?: SizeProp;
}
export declare const Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
export default Icon;
