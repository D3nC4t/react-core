interface ILocalStorageItem {
    value: any;
    expiresAt?: number;
    ttl?: number;
}
export declare const getLocalItem: <T>(key: string, defaultValue?: T | undefined, _ttl?: number) => T | undefined;
export declare const getLocalItemTtl: (key: string, _item?: ILocalStorageItem) => number | null;
export declare const removeLocalItem: (key: string) => void;
export declare const setLocalItem: (key: string, value: any, skipEvent?: boolean) => void;
export declare const setLocalItemTtl: (key: string, ttlInSeconds: number) => void;
export default localStorage;
