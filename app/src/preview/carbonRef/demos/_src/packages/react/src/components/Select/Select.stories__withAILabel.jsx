// @ts-nocheck
import { Select, SelectSkeleton } from '@carbon/react';
import { SelectItem } from '@carbon/react';
import { SelectItemGroup } from '@carbon/react';
import { Button } from '@carbon/react';
import { AILabel, AILabelContent, AILabelActions } from '@carbon/react';
import { IconButton } from '@carbon/react';
import { View, FolderOpen, Folders } from '@carbon/icons-react';
import mdx from './Select.mdx';


export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    light: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [(story) => <div style={{ width: '400px' }}>{story()}</div>],
  subcomponents: {
    SelectItem,
    SelectItemGroup,
    SelectSkeleton,
  },
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: ['id', 'defaultValue'],
    },
  },
};

const sharedArgTypes = {
  disabled: {
    control: 'boolean',
  },
  helperText: {
    control: 'text',
  },
  hideLabel: {
    control: 'boolean',
  },
  inline: {
    control: 'boolean',
  },
  invalid: {
    control: 'boolean',
  },
  invalidText: {
    control: 'text',
  },
  labelText: {
    control: 'text',
  },
  onChange: {
    action: 'onChange',
  },
  readOnly: {
    control: 'boolean',
  },
  size: {
    control: 'select',
    options: ['xs', 'sm', 'md', 'lg'],
  },
  warn: {
    control: 'boolean',
  },
  warnText: {
    control: 'text',
  },
};

const sharedArgs = {
  disabled: false,
  helperText: 'Select the region where your resources will be hosted.',
  hideLabel: false,
  inline: false,
  invalid: false,
  invalidText: 'Select a deployment region.',
  labelText: 'Deployment region',
  readOnly: false,
  size: 'md',
  warn: false,
  warnText: 'This region has limited availability.',
};

const sharedControls = Object.keys(sharedArgTypes);

const selectItems = (
  <>
    <SelectItem value="" text="Choose a region" />
    <SelectItem value="us-south" text="Dallas (us-south)" />
    <SelectItem value="us-east" text="Washington, DC (us-east)" />
    <SelectItem value="eu-de" text="Frankfurt (eu-de)" />
    <SelectItem value="au-syd" text="Sydney (au-syd)" />
  </>
);

export const withAILabel = (args) => {
  const aiLabel = (
    <AILabel className="ai-label-container">
      <AILabelContent>
        <div>
          <p className="secondary">AI Explained</p>
          <h2 className="ai-label-heading">84%</h2>
          <p className="secondary bold">Confidence score</p>
          <p className="secondary">
            This recommendation is based on current service availability and the
            location of your existing resources.
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
    <div>
      <Select id="select-1" decorator={aiLabel} {...args}>
        {selectItems}
      </Select>
    </div>
  );
};

withAILabel.args = {
  ...sharedArgs,
};

withAILabel.argTypes = {
  ...sharedArgTypes,
};

withAILabel.parameters = {
  controls: { include: sharedControls },
};
