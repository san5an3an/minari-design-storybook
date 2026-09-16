import { FluidDatePicker } from '@carbon/react';
import { FluidDatePickerInput } from '@carbon/react';
import { FluidDatePickerSkeleton } from '@carbon/react';
import { ToggletipLabel, Toggletip, ToggletipButton, ToggletipContent } from '@carbon/react';
import { Information } from '@carbon/icons-react';
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

const sharedArgs = {
  allowInput: true,
  closeOnSelect: true,
  dateFormat: 'm/d/Y',
  disabled: false,
  helperText: '',
  invalid: false,
  invalidText:
    'Error message that is really long can wrap to more lines but should not be excessively long.',
  maxDate: '',
  minDate: '',
  placeholder: 'mm/dd/yyyy',
  readOnly: false,
  short: false,
  size: 'md',
  warn: false,
  warnText:
    'Warning message that is really long can wrap to more lines but should not be excessively long.',
};

const sharedArgTypes = {
  allowInput: {
    control: 'boolean',
  },
  closeOnSelect: {
    control: 'boolean',
  },
  dateFormat: {
    control: 'text',
  },
  onChange: {
    action: 'onChange',
  },
  onClose: {
    action: 'onClose',
  },
  onOpen: {
    action: 'onOpen',
  },
  disabled: {
    control: { type: 'boolean' },
    table: {
      category: 'DatePickerInput',
    },
  },
  readOnly: {
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
  helperText: {
    control: { type: 'text' },
    table: {
      category: 'DatePickerInput',
    },
  },
  maxDate: {
    control: 'text',
  },
  minDate: {
    control: 'text',
  },
  placeholder: {
    control: { type: 'text' },
    table: {
      category: 'DatePickerInput',
    },
  },
  short: {
    control: { type: 'boolean' },
    table: {
      category: 'DatePickerInput',
    },
  },
  size: {
    control: 'select',
    options: ['sm', 'md', 'lg'],
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
};

const datePickerTypeArgType = {
  control: 'select',
  options: ['simple', 'single', 'range'],
  table: { readonly: true },
};

const defaultWidthArgType = {
  control: { type: 'range', min: 240, max: 640, step: 16 },
};

const sharedParameters = {
  controls: {
    include: [...Object.keys(sharedArgTypes), 'datePickerType', 'defaultWidth'],
  },
};

const ToggleTip = (
  <>
    <ToggletipLabel>Label</ToggletipLabel>
    <Toggletip align="top-left">
      <ToggletipButton label="Show information">
        <Information />
      </ToggletipButton>
      <ToggletipContent>
        <p>Additional field information here.</p>
      </ToggletipContent>
    </Toggletip>
  </>
);

export const Single = ({ defaultWidth, ...args }) => (
  <div style={{ width: defaultWidth }}>
    <FluidDatePicker datePickerType="single" {...args}>
      <FluidDatePickerInput
        style={{ width: defaultWidth }}
        placeholder="mm/dd/yyyy"
        labelText={ToggleTip}
        id="date-picker-single"
        {...args}
      />
    </FluidDatePicker>
  </div>
);

Single.args = {
  ...sharedArgs,
  datePickerType: 'single',
  defaultWidth: 288,
};
Single.argTypes = {
  ...sharedArgTypes,
  datePickerType: datePickerTypeArgType,
  defaultWidth: defaultWidthArgType,
};
Single.parameters = sharedParameters;
