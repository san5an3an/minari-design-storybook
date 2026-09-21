// @ts-nocheck
import { FluidMultiSelect, FluidMultiSelectSkeleton } from '@carbon/react';
import mdx from './FluidMultiSelect.mdx';


export default {
  title: 'Components/Fluid Components/FluidMultiSelect',
  component: FluidMultiSelect,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  subcomponents: {
    FluidMultiSelectSkeleton,
  },
};

export const Skeleton = () => (
  <div style={{ width: 400 }}>
    <FluidMultiSelectSkeleton />
  </div>
);
