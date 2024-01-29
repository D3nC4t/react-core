import { ChildElement, Theme } from './types';
import { ThemeCustomizationProps } from './theme';
export * from './components';
export * from './hooks';
export * from './theme';
export * from './utils';
export type C4tSystemProps = {
    $el?: HTMLElement;
    children: ChildElement;
    theme?: Theme;
};
declare const C4tSystem: ({ $el, children, theme }: ThemeCustomizationProps) => import("react/jsx-runtime").JSX.Element;
export default C4tSystem;
