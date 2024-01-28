import { ForwardedRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import { BackdropProps } from './Backdrop';
import { BoxProps } from './Box';
import { ChildElement, JCssProps, Shadow, Theme } from '../types';
export interface PortalProps extends Omit<BoxProps, 'variant'> {
    /**
     * The props for the box component
     */
    $backdropProps?: Omit<BackdropProps, 'in'>;
    /**
     * The shadow to apply on the html element
     */
    $bShadow?: string | keyof Theme['shadow'] | Shadow;
    /**
     * The value to be shown as content of the div
     */
    children: ChildElement;
    /**
     * The container for the portal
     */
    container?: HTMLElement;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme, PortalProps>;
    /**
     * Triggered when closing the portal
     */
    onClose?: () => void;
    /**
     * Triggered when the portal opens
     */
    onOpen?: () => void;
    /**
     * Triggered when the ref object changes
     */
    updateRef?: () => void;
    /**
     * Use false to hide the portal
     */
    open?: boolean;
    /**
     * The name of the variant to apply on the html element
     */
    variant?: 'bottom' | 'bottom-left' | 'bottom-right' | 'center' | 'left' | 'right' | 'root' | 'top' | 'top-left' | 'top-right' | string;
}
export interface PortalRef extends HTMLDivElement {
    /**
     * If triggered will close the Portal
     */
    closePortal?: () => void;
    /**
     * Shares the ref of the portal
     */
    innerRef?: ForwardedRef<HTMLDivElement>;
    /**
     * A trigger to open the Portal
     */
    openPortal: () => void;
}
export declare const Portal: ForwardRefExoticComponent<PortalProps & RefAttributes<PortalRef>>;
export default Portal;
