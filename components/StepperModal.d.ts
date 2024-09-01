import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { ModalProps } from './Modal';
import { ScrollBoxProps } from './ScrollBox';
import type { ChildElement, ColorVariants, JCssProps, Theme } from '../types';
declare const DISPLAY_NAME: string;
export type StepperStep = {
    content: ChildElement;
    jCss?: JCssProps<Theme>;
    title: ChildElement | string;
};
export interface StepperModalProps extends Omit<ModalProps, 'children'> {
    /**
    * The name of the color to apply on the html element, it can be also a static color(rgb, hex, etc)
    */
    color?: keyof Theme['color'] | string;
    /**
    * The name of the color variant to apply on the html element
    */
    colorVariant?: keyof ColorVariants;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme>;
    /**
     * The name for this element
     */
    name?: typeof DISPLAY_NAME;
    /**
     * The props for the ScrollBox
     */
    scrollProps?: Omit<ScrollBoxProps, 'children'>;
    /**
     * The steps for the stepper
     */
    steps: StepperStep[];
    /**
     * The name of the variant to apply on the StepperModal element
     */
    variant?: string;
}
export declare const StepperModal: ForwardRefExoticComponent<StepperModalProps & RefAttributes<HTMLDivElement>>;
export default StepperModal;
