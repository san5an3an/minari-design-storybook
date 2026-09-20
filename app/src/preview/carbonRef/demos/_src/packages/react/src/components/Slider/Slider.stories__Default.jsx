// @ts-nocheck
import { Slider, SliderSkeleton } from '@carbon/react';
import mdx from './Slider.mdx';


export default {
  title: 'Components/Slider',
  component: Slider,
  subcomponents: {
    SliderSkeleton,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Default = (args) => {
  return (
    <Slider
      {...args}
      labelText={`Slider (must be an increment of ${args.step})`}
    />
  );
};

Default.parameters = {
  controls: {
    exclude: ['light', 'formatLabel', 'labelText'],
  },
};

Default.argTypes = {
  ariaLabelInput: {
    control: { type: 'text' },
  },
  unstable_ariaLabelInputUpper: {
    control: { type: 'text' },
  },
  disabled: {
    control: {
      control: {
        type: 'boolean',
      },
    },
  },
  hideTextInput: {
    control: {
      type: 'boolean',
    },
  },
  invalid: {
    control: {
      type: 'boolean',
    },
  },
  invalidText: {
    control: {
      type: 'text',
    },
  },
  min: {
    control: { type: 'number' },
  },
  max: {
    control: { type: 'number' },
  },
  name: {
    control: { type: 'text' },
  },
  unstable_nameUpper: {
    control: { type: 'text' },
  },
  readOnly: {
    control: {
      type: 'boolean',
    },
  },
  required: {
    control: {
      type: 'boolean',
    },
  },
  step: {
    control: { type: 'number' },
  },
  stepMultiplier: {
    control: { type: 'number' },
  },
  value: {
    control: { type: 'number' },
  },
  unstable_valueUpper: {
    control: { type: 'number' },
  },
  warn: {
    control: {
      type: 'boolean',
    },
  },
  warnText: {
    control: {
      type: 'text',
    },
  },
};

Default.args = {
  ariaLabelInput: 'Lower bound',
  unstable_ariaLabelInputUpper: 'Upper bound',
  disabled: false,
  hideTextInput: false,
  invalid: false,
  invalidText: 'Invalid message goes here',
  min: 0,
  max: 100,
  readOnly: false,
  required: false,
  step: 5,
  stepMultiplier: 5,
  value: 50,
  unstable_valueUpper: undefined,
  warn: false,
  warnText: 'Warning message goes here',
};
