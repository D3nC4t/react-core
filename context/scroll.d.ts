import React, { Context, RefObject } from 'react';
export type ScrollContextValue = {
    main: RefObject<HTMLDivElement | null>;
    refs: Record<string, RefObject<HTMLElement | null>>;
    addRef: (name: string, ref: RefObject<HTMLElement | null>) => void;
    scrollToRef: (name: string) => void;
};
export type ScrollContextProviderProps = {
    children: React.ReactNode;
    main: RefObject<HTMLDivElement | null>;
};
export declare const ScrollContext: Context<ScrollContextValue>;
export declare const ScrollContextProvider: ({ children, main }: ScrollContextProviderProps) => React.JSX.Element;
