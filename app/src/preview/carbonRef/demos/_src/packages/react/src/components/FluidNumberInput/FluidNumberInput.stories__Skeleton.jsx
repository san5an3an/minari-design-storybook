import { FluidNumberInput, FluidNumberInputSkeleton } from '@carbon/react';
import mdx from './FluidNumberInput.mdx';


export default {
  title: 'Components/Fluid Components/FluidNumberInput',
  component: FluidNumberInput,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  subcomponents: {
    FluidNumberInputSkeleton,
  },
};

export const Skeleton = () => (
  <div style={{ width: '400px' }}>
    <FluidNumberInputSkeleton
      label="Label"
      placeholder="Placeholder text"
      id="input-skeleton"
    />
  </div>
);
