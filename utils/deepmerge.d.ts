export interface DeepmergeOptions {
    clone?: boolean;
}
export declare function isValidObject<T>(item: T): boolean;
export default function deepmerge<T extends Record<string, any>>(target: T, source: any, options?: DeepmergeOptions): T | undefined;
