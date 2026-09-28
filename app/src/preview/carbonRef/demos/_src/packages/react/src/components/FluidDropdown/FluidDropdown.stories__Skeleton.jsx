// @ts-nocheck
import { FluidDropdown, FluidDropdownSkeleton } from '@carbon/react';
import mdx from './FluidDropdown.mdx';


export default {
  title: 'Components/Fluid Components/FluidDropdown',
  component: FluidDropdown,
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      page: mdx,
    },
  },
  subcomponents: {
    FluidDropdownSkeleton,
  },
};

export const Skeleton = () => <FluidDropdownSkeleton />;
