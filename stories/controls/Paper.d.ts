import { Meta } from '@storybook/react';
import { PaperProps } from '../../components';
declare const PaperControls: Meta<PaperProps>['argTypes'];
export declare const PaperExtendedControls: Meta<PaperProps & {
    paperVariant: PaperProps['variant'];
}>['argTypes'];
export default PaperControls;
