// @ts-nocheck
import { FluidTextInput } from '@carbon/react';
import { FluidTextInputSkeleton } from '@carbon/react';
import './test.scss';
import mdx from './FluidTextInput.mdx';


export default {
  title: 'Components/Fluid Components/FluidTextInput',
  component: FluidTextInput,
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: ['isPassword'],
    },
  },
  subcomponents: {
    FluidTextInputSkeleton,
  },
};

export const Skeleton = () => (
  <div style={{ width: '300px' }}>
    <FluidTextInputSkeleton
      labelText="Label"
      placeholder="Placeholder text"
      id="input-1"
    />
  </div>
);
