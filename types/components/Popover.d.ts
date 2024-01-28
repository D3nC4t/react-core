export declare enum PopoverAnchorType {
    anchorEl = "anchorEl",
    anchorPosition = "anchorPosition",
    none = "none"
}
export type PopoverOrigin = {
    vertical: 'bottom' | 'center' | 'top' | number;
    horizontal: 'center' | 'left' | 'right' | number;
};
export type PopoverPosition = {
    left: number;
    top: number;
};
export type PopoverAbsolutePosition = {
    left: string | null;
    top: string | null;
    transformOrigin: string;
};
