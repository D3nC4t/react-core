import { ExoticComponent, FC, MemoExoticComponent } from 'react';
export declare function getFunctionName(fn: React.ElementType): string;
export default function getDisplayName<Props>(Component: FC<Props> | ExoticComponent<Props> | MemoExoticComponent<ExoticComponent<Props>>): string | undefined;
