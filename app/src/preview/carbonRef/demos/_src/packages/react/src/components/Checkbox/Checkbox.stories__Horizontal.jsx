import '../AILabel/ailabel-story.scss';
import { Checkbox, CheckboxSkeleton } from '@carbon/react';
import mdx from './Checkbox.mdx';
import { CheckboxGroup } from '@carbon/react';


export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  subcomponents: {
    CheckboxGroup,
    CheckboxSkeleton,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const groupArgs = {
  disabled: false,
  helperText: 'Helper text goes here',
  invalid: false,
  invalidText: 'Invalid message goes here',
  legendText: 'Group label',
  orientation: 'vertical',
  readOnly: false,
  warn: false,
  warnText: 'Warning message goes here',
};

const groupArgTypes = {
  disabled: {
    description: 'Specify whether the checkbox group is disabled',
    control: {
      type: 'boolean',
    },
  },
  helperText: {
    description: 'Provide text for the form group for additional help',
    control: {
      type: 'text',
    },
  },
  invalid: {
    description: 'Specify whether the form group is currently invalid',
    control: {
      type: 'boolean',
    },
  },
  invalidText: {
    description:
      'Provide the text that is displayed when the form group is in an invalid state',
    control: {
      type: 'text',
    },
  },
  legendText: {
    description:
      'Provide the text to be rendered inside of the fieldset <legend>',
    control: {
      type: 'text',
    },
  },
  readOnly: {
    description: 'Specify whether the CheckboxGroup is read-only',
    control: {
      type: 'boolean',
    },
  },
  warn: {
    description: 'Specify whether the form group is currently in warning state',
    control: {
      type: 'boolean',
    },
  },
  warnText: {
    description:
      'Provide the text that is displayed when the form group is in warning state',
    control: {
      type: 'text',
    },
  },
  orientation: {
    description: 'Provide how checkbox should be displayed',
    control: 'select',
    options: ['horizontal', 'vertical'],
  },
};

const groupControls = [
  'disabled',
  'helperText',
  'invalid',
  'invalidText',
  'legendText',
  'orientation',
  'readOnly',
  'warn',
  'warnText',
];

export const Horizontal = (args) => {
  return (
    <CheckboxGroup {...args} readOnly={args.readOnly || undefined}>
      <Checkbox labelText="Checkbox label" id="checkbox-label-1" />
      <Checkbox labelText="Checkbox label" id="checkbox-label-2" />
      <Checkbox labelText="Checkbox label" id="checkbox-label-3" />
    </CheckboxGroup>
  );
};

Horizontal.args = {
  ...groupArgs,
  orientation: 'horizontal',
};

Horizontal.argTypes = {
  ...groupArgTypes,
  orientation: {
    ...groupArgTypes.orientation,
    table: {
      readonly: true,
    },
  },
};

Horizontal.parameters = {
  controls: {
    include: groupControls,
  },
};
