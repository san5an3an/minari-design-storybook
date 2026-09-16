import { SelectItem } from '@carbon/react';
import { TimePicker } from '@carbon/react';
import { TimePickerSelect } from '@carbon/react';
import mdx from './TimePicker.mdx';


export default {
  title: 'Components/TimePicker',
  component: TimePicker,
  subcomponents: {
    TimePickerSelect,
    SelectItem,
  },
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: ['inputClassName', 'pickerClassName', 'id', 'light', 'pattern'],
    },
  },
};

export const Default = (args) => {
  return (
    <TimePicker id="time-picker" labelText="Select a time" {...args}>
      <TimePickerSelect id="time-picker-select-1" disabled={args.disabled}>
        <SelectItem value="AM" text="AM" />
        <SelectItem value="PM" text="PM" />
      </TimePickerSelect>
      <TimePickerSelect id="time-picker-select-2" disabled={args.disabled}>
        <SelectItem value="Time zone 1" text="Time zone 1" />
        <SelectItem value="Time zone 2" text="Time zone 2" />
      </TimePickerSelect>
    </TimePicker>
  );
};

Default.args = {
  disabled: false,
  hideLabel: false,
  invalid: false,
  warning: false,
};

Default.argTypes = {
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  hideLabel: {
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
    control: { type: 'text' },
  },
  warning: {
    control: {
      type: 'boolean',
    },
  },
  warningText: {
    control: { type: 'text' },
  },
  labelText: {
    control: { type: 'text' },
  },
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'select' },
  },
};
