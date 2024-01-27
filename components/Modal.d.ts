import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { PortalProps, PortalRef } from './Portal';
import { JCssProps, Theme } from '../types';
export interface ModalProps extends PortalProps {
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme, ModalProps>;
    /**
     * The name of the variant to apply on the Portal
     */
    portalVariant?: PortalProps['variant'];
    /**
     * The name of the variant to apply on the html element
     */
    variant?: 'bordered' | 'root' | 'round-bordered' | 'rounded' | string;
}
export declare const Modal: ForwardRefExoticComponent<ModalProps & RefAttributes<PortalRef>>;
export default Modal;
