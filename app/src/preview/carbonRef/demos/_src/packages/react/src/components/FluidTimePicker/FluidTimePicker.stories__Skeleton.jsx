import { FluidTimePicker } from '@carbon/react';
import { FluidTimePickerSelect } from '@carbon/react';
import { FluidTimePickerSkeleton } from '@carbon/react';
import mdx from './FluidTimePicker.mdx';


export default {
  title: 'Components/Fluid Components/FluidTimePicker',
  component: FluidTimePicker,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  subcomponents: {
    FluidTimePickerSelect,
    FluidTimePickerSkeleton,
  },
};

export const Skeleton = () => (
  <div style={{ width: '300px' }}>
    <FluidTimePickerSkeleton />
    <br />
    <br />
    <FluidTimePickerSkeleton isOnlyTwo />
  </div>
);
