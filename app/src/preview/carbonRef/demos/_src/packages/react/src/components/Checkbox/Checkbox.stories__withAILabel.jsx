import '../AILabel/ailabel-story.scss';
import { Checkbox, CheckboxSkeleton } from '@carbon/react';
import mdx from './Checkbox.mdx';
import { CheckboxGroup } from '@carbon/react';
import { Button } from '@carbon/react';
import { AILabel, AILabelContent, AILabelActions } from '@carbon/react';
import { IconButton } from '@carbon/react';
import { View, FolderOpen, Folders } from '@carbon/icons-react';


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

export const withAILabel = (args) => {
  const AILabelFunc = (kind) => (
    <AILabel className="ai-label-container" kind={kind}>
      <AILabelContent>
        <div>
          <p className="secondary">AI Explained</p>
          <h2 className="ai-label-heading">84%</h2>
          <p className="secondary bold">Confidence score</p>
          <p className="secondary">
            Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
          </p>
          <hr />
          <p className="secondary">Model type</p>
          <p className="bold">Foundation model</p>
        </div>
        <AILabelActions>
          <IconButton kind="ghost" label="View">
            <View />
          </IconButton>
          <IconButton kind="ghost" label="Open Folder">
            <FolderOpen />
          </IconButton>
          <IconButton kind="ghost" label="Folders">
            <Folders />
          </IconButton>
          <Button>View details</Button>
        </AILabelActions>
      </AILabelContent>
    </AILabel>
  );

  return (
    <div className="ai-label-check-radio-container">
      <CheckboxGroup
        decorator={AILabelFunc()}
        {...args}
        readOnly={args.readOnly || undefined}>
        <Checkbox labelText="Checkbox label" id="checkbox-label-1" />
        <Checkbox labelText="Checkbox label" id="checkbox-label-2" />
        <Checkbox labelText="Checkbox label" id="checkbox-label-3" />
      </CheckboxGroup>

      <CheckboxGroup {...args} readOnly={args.readOnly || undefined}>
        <Checkbox
          labelText="Checkbox label"
          id="checkbox-label-4"
          decorator={AILabelFunc()}
        />
        <Checkbox
          labelText="Checkbox label"
          id="checkbox-label-5"
          decorator={AILabelFunc()}
        />
        <Checkbox labelText="Checkbox label" id="checkbox-label-6" />
      </CheckboxGroup>

      <CheckboxGroup {...args} readOnly={args.readOnly || undefined}>
        <Checkbox
          labelText="Checkbox label"
          id="checkbox-label-7"
          decorator={AILabelFunc('inline')}
        />
        <Checkbox
          labelText="Checkbox label"
          id="checkbox-label-8"
          decorator={AILabelFunc('inline')}
        />
        <Checkbox labelText="Checkbox label" id="checkbox-label-9" />
      </CheckboxGroup>
    </div>
  );
};

withAILabel.args = {
  ...groupArgs,
  helperText: '',
  legendText: 'Group Label',
};

withAILabel.argTypes = { ...groupArgTypes };

withAILabel.parameters = {
  controls: {
    include: groupControls,
  },
};
