import { WithLayer } from '../../../../../.storybook/templates/WithLayer';
import { DatePicker } from '@carbon/react/es/components/DatePicker/next/components/DatePicker.js';
import { DatePickerInput } from '@carbon/react/es/components/DatePicker/next/components/DatePickerInput.js';
import mdx from './DatePickerV2.mdx';


export default {
  title: 'Preview/preview__DatePicker',
  component: DatePicker,
  subcomponents: {
    DatePickerInput,
  },

  parameters: {
    docs: {
      page: mdx,
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

const sharedArgTypes = {
  onChange: {
    action: 'onChange',
  },
  onClose: {
    action: 'onClose',
  },
  onOpen: {
    action: 'onOpen',
  },
  readOnly: {
    control: {
      type: 'boolean',
    },
  },
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'select' },
    table: {
      category: 'DatePickerInput',
    },
  },
  disabled: {
    control: { type: 'boolean' },
    table: {
      category: 'DatePickerInput',
    },
  },
  invalid: {
    control: { type: 'boolean' },
    table: {
      category: 'DatePickerInput',
    },
  },
  invalidText: {
    control: { type: 'text' },
    table: {
      category: 'DatePickerInput',
    },
  },
  placeholder: {
    control: { type: 'text' },
    table: {
      category: 'DatePickerInput',
    },
  },
  warn: {
    control: { type: 'boolean' },
    table: {
      category: 'DatePickerInput',
    },
  },
  warnText: {
    control: { type: 'text' },
    table: {
      category: 'DatePickerInput',
    },
  },
  helperText: {
    control: { type: 'text' },
    table: {
      category: 'DatePickerInput',
    },
  },
};

export const SingleWithCalendarWithLayer = (args) => (
  <WithLayer>
    {(layer) => (
      <DatePicker datePickerType="single" {...args}>
        <DatePickerInput
          placeholder="mm/dd/yyyy"
          labelText="Date Picker label"
          id={`date-picker-single-${layer}`}
          size="md"
          {...args}
        />
      </DatePicker>
    )}
  </WithLayer>
);

SingleWithCalendarWithLayer.argTypes = { ...sharedArgTypes };
