import { RadioButton } from '@carbon/react';
import { RadioButtonGroup } from '@carbon/react';
import { RadioButtonSkeleton } from '@carbon/react';
import mdx from './RadioButton.mdx';


export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  subcomponents: {
    RadioButtonGroup,
    RadioButtonSkeleton,
  },
  argTypes: {
    checked: {
      table: {
        disable: true,
      },
    },
    defaultChecked: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Default = (args) => {
  return (
    <RadioButtonGroup
      legendText="Radio Button group"
      name="radio-button-default-group"
      {...args}>
      <RadioButton
        labelText="Radio button label"
        value="radio-1"
        id="radio-1"
        hideLabel={args.hideLabel}
      />
      <RadioButton
        labelText="Radio button label"
        value="radio-2"
        id="radio-2"
        hideLabel={args.hideLabel}
      />
      <RadioButton
        labelText="Radio button label"
        value="radio-3"
        id="radio-3"
        hideLabel={args.hideLabel}
      />
    </RadioButtonGroup>
  );
};

Default.args = {
  defaultSelected: 'radio-2',
  helperText: 'Helper text',
  hideLabel: false,
  invalidText: 'Invalid selection',
  warn: false,
  warnText: 'Please notice the warning',
};

Default.argTypes = {
  defaultSelected: {
    description: 'Specify the `<RadioButton>` to be selected by default',
    options: ['radio-1', 'radio-2', 'radio-3'],
    control: {
      type: 'select',
    },
  },
  readOnly: {
    description: 'Specify whether the RadioButtonGroup is read-only',
    control: {
      type: 'boolean',
    },
  },
  helperText: {
    description:
      'Provide text that is used alongside the control label for additional help',
    control: {
      type: 'text',
    },
  },
  hideLabel: {
    description:
      'Specify whether the label should be visually hidden but still available to screen readers',
    control: {
      type: 'boolean',
    },
  },
  invalid: {
    description: 'Specify whether the RadioButtonGroup is invalid',
    control: {
      type: 'boolean',
    },
  },
  invalidText: {
    description:
      'Provide the text that is displayed when the control is in an invalid state',
    control: {
      type: 'text',
    },
  },
  orientation: {
    description: 'Provide how radio buttons should be displayed',
    control: 'select',
    options: ['horizontal', 'vertical'],
  },
  warn: {
    description: 'Specify whether the control is currently in warning state',
    control: {
      type: 'boolean',
    },
  },
  warnText: {
    description:
      'Provide the text that is displayed when the control is in warning state',
    control: {
      type: 'text',
    },
  },
};
