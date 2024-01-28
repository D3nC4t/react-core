import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { BoxProps } from './Box';
import { ChildElement, JCssProps, Theme } from '../types';
import { EnterHandler, ExitHandler } from 'react-transition-group/Transition';
export interface FadeProps<RefElement extends undefined | HTMLElement = undefined> {
    /**
     * The props for the box component
     */
    boxProps?: Omit<BoxProps, 'children'>;
    /**
     * The value to be shown as content of the div
     */
    children: ChildElement;
    /**
     * The duration of the effect in milliseconds
     */
    duration?: number;
    /**
     * If true will show the content, otherwise it won't
     */
    in: boolean;
    /**
     * The extra css in js
     */
    jCss?: JCssProps<Theme, FadeProps>;
    /**
     * The name for the div element
     */
    name?: string;
    /**
     * Callback fired before the "entering" status is applied. An extra
     * parameter `isAppearing` is supplied to indicate if the enter stage is
     * occurring on the initial mount
     */
    onEnter?: EnterHandler<RefElement> | undefined;
    /**
     * Callback fired after the "entering" status is applied. An extra parameter
     * isAppearing is supplied to indicate if the enter stage is occurring on
     * the initial mount
     */
    onEntering?: EnterHandler<RefElement> | undefined;
    /**
     * Callback fired after the "entered" status is applied. An extra parameter
     * isAppearing is supplied to indicate if the enter stage is occurring on
     * the initial mount
     */
    onEntered?: EnterHandler<RefElement> | undefined;
    /**
     * Callback fired before the "exiting" status is applied.
     */
    onExit?: ExitHandler<RefElement> | undefined;
    /**
     * Callback fired after the "exiting" status is applied.
     */
    onExiting?: ExitHandler<RefElement> | undefined;
    /**
     * Callback fired after the "exited" status is applied.
     */
    onExited?: ExitHandler<RefElement> | undefined;
    /**
     * The name of the variant to apply on the html element
     */
    variant?: string;
}
export declare const Fade: ForwardRefExoticComponent<FadeProps & RefAttributes<HTMLDivElement>>;
export default Fade;
