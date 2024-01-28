import React, { ForwardRefExoticComponent, ReactElement } from 'react';
export default function validateChildComponent<ExpectedElType extends ((...args: any) => React.JSX.Element) | ForwardRefExoticComponent<any>>(name: string, node: ReactElement, expectedName: string, expected: ExpectedElType, preventError?: boolean): boolean;
