// @ts-nocheck
import React, { useState } from 'react';
import { NumberInput } from '@carbon/react';
import { NumberInputSkeleton } from '@carbon/react';
import mdx from './NumberInput.mdx';


export default {
  title: 'Components/NumberInput',
  component: NumberInput,
  parameters: {
    subcomponents: {
      NumberInputSkeleton,
    },
    docs: {
      page: mdx,
    },
    controls: {
      exclude: ['id', 'defaultValue', 'light', 'translateWithId'],
    },
  },
};

const sharedArgTypes = {
  allowEmpty: { control: { type: 'boolean' } },
  disableWheel: { control: { type: 'boolean' } },
  min: { control: { type: 'number' } },
  max: { control: { type: 'number' } },
  step: { control: { type: 'number' } },
  disabled: { control: { type: 'boolean' } },
  invalid: { control: { type: 'boolean' } },
  invalidText: { control: { type: 'text' } },
  warn: { control: { type: 'boolean' } },
  warnText: { control: { type: 'text' } },
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'select' },
  },
  label: { control: { type: 'text' } },
  helperText: { control: { type: 'text' } },
  hideLabel: { control: { type: 'boolean' } },
  hideSteppers: { control: { type: 'boolean' } },
  inputMode: {
    options: [
      'none',
      'text',
      'tel',
      'url',
      'email',
      'numeric',
      'decimal',
      'search',
    ],
    control: { type: 'select' },
  },
  readOnly: { control: { type: 'boolean' } },
  type: {
    options: ['number', 'text'],
    control: { type: 'select' },
  },
};

const sharedArgs = {
  allowEmpty: false,
  disableWheel: false,
  disabled: false,
  helperText: 'Optional helper text.',
  invalid: false,
  invalidText: 'Number is not valid.',
  label: 'NumberInput label',
  hideLabel: false,
  hideSteppers: false,
  inputMode: 'decimal',
  readOnly: false,
  size: 'md',
  step: 1,
  type: 'number',
  warn: false,
  warnText:
    'Warning message that is really long can wrap to more lines but should not be excessively long.',
};

const sharedControls = Object.keys(sharedArgTypes);

// TODO: Potential opportunity to differentiate between controlled and uncontrolled stories
export const Default = (args) => {
  const [value, setValue] = React.useState(50);

  const handleChange = (event, { value }) => {
    setValue(value);
  };

  return (
    <NumberInput
      id="default-number-input"
      value={value}
      onChange={handleChange}
      {...args}
    />
  );
};

Default.args = {
  ...sharedArgs,
  max: 100,
  min: -100,
  invalidText: `Number is not valid. Must be between -100 and 100`,
};

Default.argTypes = { ...sharedArgTypes };

Default.parameters = {
  controls: {
    include: sharedControls,
  },
};
