// @ts-nocheck
import { FluidComboBox, FluidComboBoxSkeleton } from '@carbon/react';
import mdx from './FluidComboBox.mdx';


export default {
  title: 'Components/Fluid Components/FluidComboBox',
  component: FluidComboBox,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  subcomponents: {
    FluidComboBoxSkeleton,
  },
};

export const Skeleton = () => (
  <div style={{ width: 400 }}>
    <FluidComboBoxSkeleton />
  </div>
);
