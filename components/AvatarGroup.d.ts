import { ForwardRefExoticComponent, RefAttributes, ReactElement } from 'react';
import Avatar from './Avatar';
import { AvatarProps } from './Avatar';
import { BoxProps } from './Box';
import { JCssProps, Theme } from '../types';
declare const DISPLAY_NAME: string;
export interface AvatarGroupProps extends Omit<BoxProps, 'children' | 'jCss'> {
    /**
     * The variant for the box component, by default is 'auto-fit-no-padding'
     */
    boxVariant?: BoxProps['variant'];
    /**
     * The value to be shown as content of the div
     */
    children: ReactElement<typeof Avatar>[];
    /**
     * Use true to invert the order of the elements in the dom
     */
    flipContent?: boolean;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme, AvatarGroupProps>;
    /**
     * The max number of avatars to be shown, the remaining avatars will be shown as a counter
     */
    max?: number;
    /**
     * The name for the html element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * To render a different value for the surplus avatars
     */
    renderSurplus?: (remaining: number) => ReactElement<typeof Avatar> | null;
    /**
     * The fixed size for the avatars counter
     */
    total?: number;
    /**
     * The name of the variant to apply on the html element
     */
    variant?: AvatarProps['variant'];
}
export declare const AvatarGroup: ForwardRefExoticComponent<AvatarGroupProps & RefAttributes<HTMLDivElement>>;
export default AvatarGroup;
