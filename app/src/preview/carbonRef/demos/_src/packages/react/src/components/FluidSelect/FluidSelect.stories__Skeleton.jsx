// @ts-nocheck
import { FluidSelect, FluidSelectSkeleton } from '@carbon/react';
import mdx from './FluidSelect.mdx';


export default {
  title: 'Components/Fluid Components/FluidSelect',
  component: FluidSelect,
  subcomponents: {
    FluidSelectSkeleton,
  },
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: ['defaultValue', 'id'],
    },
  },
  argTypes: {
    light: {
      table: {
        disable: true,
      },
    },
  },
};
const widthArgType = {
  control: { type: 'range', min: 300, max: 800, step: 50 },
};

export const Skeleton = ({ defaultWidth }) => (
  <div style={{ width: defaultWidth }}>
    <FluidSelectSkeleton />
  </div>
);

Skeleton.args = {
  defaultWidth: 400,
};

Skeleton.argTypes = {
  defaultWidth: widthArgType,
};

Skeleton.parameters = {
  controls: { include: ['defaultWidth'] },
};
