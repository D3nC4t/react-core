import { Meta } from '@storybook/react';
import { BoxProps } from '../../components';
declare const BoxControls: Meta<BoxProps>['argTypes'];
export declare const BoxExtendedControls: Meta<BoxProps & {
    boxVariant: BoxProps['variant'];
}>['argTypes'];
export default BoxControls;
