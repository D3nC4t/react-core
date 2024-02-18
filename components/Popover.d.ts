import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { PortalProps, PortalRef } from './Portal';
import { CSSPosition, JCssProps, Theme } from '../types';
import { PopoverOrigin, PopoverPosition } from '../types';
declare const DISPLAY_NAME: string;
export interface PopoverProps extends PortalProps {
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme, PopoverProps>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The event triggered when the portal is opening
     * @param element
     * @param isAppearing
     */
    onEntering?: (element: HTMLElement, isAppearing: boolean) => void;
    /**
     * The name of the variant to apply on the html element
     */
    variant?: 'bordered' | 'root' | 'round-bordered' | 'round-shadowed' | 'rounded' | 'shadowed' | string;
    /**
     * The html element to attach the popup
     */
    $anchorEl?: HTMLElement;
    /**
     * The vertical and horizontal positions relative to the anchored object
     */
    $anchorOrigin?: PopoverOrigin;
    /**
     * The specific location(top & left) to place the popover
     */
    $anchorPosition?: PopoverPosition;
    $marginThreshold?: number;
    $position?: CSSPosition;
    $transformOrigin?: PopoverOrigin;
}
export interface PopoverRef extends PortalRef {
    updatePosition: () => void;
}
export declare const Popover: ForwardRefExoticComponent<PopoverProps & RefAttributes<PopoverRef>>;
export default Popover;
