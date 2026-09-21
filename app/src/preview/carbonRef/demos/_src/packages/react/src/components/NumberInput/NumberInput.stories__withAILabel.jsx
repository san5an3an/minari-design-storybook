// @ts-nocheck
import { NumberInput } from '@carbon/react';
import { NumberInputSkeleton } from '@carbon/react';
import { Button } from '@carbon/react';
import { AILabel, AILabelContent, AILabelActions } from '@carbon/react';
import { IconButton } from '@carbon/react';
import { View, FolderOpen, Folders } from '@carbon/icons-react';
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

const reusableProps = {
  min: -100000000,
  max: 100000000,
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

export const withAILabel = (args) => {
  const aiLabel = (
    <AILabel className="ai-label-container">
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
    <div style={{ width: 400 }}>
      <NumberInput defaultValue={50} decorator={aiLabel} {...args} />
    </div>
  );
};

withAILabel.argTypes = { ...sharedArgTypes };

withAILabel.args = {
  ...sharedArgs,
  invalidText: 'Number is not valid',
  max: reusableProps.max,
  min: reusableProps.min,
};

withAILabel.parameters = {
  controls: {
    include: sharedControls,
  },
};
