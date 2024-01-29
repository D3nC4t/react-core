import { Meta } from '@storybook/react';
import { ColorVariants, Theme } from '../../types';
export declare const getThemeColorOptions: () => string[];
export declare const getThemeColorVariantOptions: () => (string | undefined)[];
export declare const ColorControls: Meta<{
    color: keyof Theme['color'];
}>['argTypes'];
export declare const ColorVariantControls: Meta<{
    colorVariant: keyof ColorVariants;
}>['argTypes'];
