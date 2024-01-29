import React, { ForwardRefExoticComponent, ReactElement } from 'react';
type Component = ((...args: any) => React.JSX.Element) | ForwardRefExoticComponent<any>;
export default function validateChildComponent<ExpectedElType extends Component>(name: string, node: ReactElement, expectedName: string, expected: ExpectedElType, preventError?: boolean): boolean;
export declare function validateChildComponentByTypes<ExpectedElType extends Component>(name: string, node: ReactElement, expected: Record<string, ExpectedElType>, preventError?: boolean): boolean;
export {};
