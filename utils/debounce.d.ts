export declare const defaultDebounceTimeout: number;
export default function debounce<T extends (...args: any) => void>(func: T, wait?: number): (...args: Parameters<T>) => void;
