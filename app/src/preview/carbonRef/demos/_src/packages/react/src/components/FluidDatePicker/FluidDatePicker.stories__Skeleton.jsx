import { FluidDatePicker } from '@carbon/react';
import { FluidDatePickerSkeleton } from '@carbon/react';
import mdx from './FluidDatePicker.mdx';


export default {
  title: 'Components/Fluid Components/FluidDatePicker',
  component: FluidDatePicker,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  subcomponents: {
    FluidDatePickerSkeleton,
  },
};

const defaultWidthArgType = {
  control: { type: 'range', min: 240, max: 640, step: 16 },
};

export const Skeleton = ({ className, defaultWidth }) => (
  <div style={{ width: defaultWidth }}>
    <FluidDatePickerSkeleton
      className={className}
      datePickerType="simple"
      labelText="Label"
      placeholder="Placeholder text"
      id="input-1"
    />
    <br />
    <br />
    <FluidDatePickerSkeleton
      className={className}
      datePickerType="single"
      labelText="Label"
      placeholder="Placeholder text"
      id="input-2"
    />
    <br />
    <br />
    <FluidDatePickerSkeleton
      className={className}
      datePickerType="range"
      labelText="Label"
      placeholder="Placeholder text"
      id="input-3"
    />
  </div>
);

Skeleton.args = {
  className: '',
  defaultWidth: 300,
};

Skeleton.argTypes = {
  className: { control: 'text' },
  defaultWidth: defaultWidthArgType,
};

Skeleton.parameters = {
  controls: { include: Object.keys(Skeleton.argTypes) },
};
