import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { ModalProps } from './Modal';
import { JCssProps, Theme } from '../types';
import { PortalRef } from './Portal';
export interface DrawerProps extends Omit<ModalProps, 'variant' | 'portalVariant'> {
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme, DrawerProps>;
    /**
     * The name of the variant to apply on the html element
     */
    modalVariant?: ModalProps['variant'];
    /**
     * The name of the variant to apply on the drawer
     */
    variant?: ModalProps['portalVariant'];
}
export declare const Drawer: ForwardRefExoticComponent<DrawerProps & RefAttributes<PortalRef>>;
export default Drawer;
