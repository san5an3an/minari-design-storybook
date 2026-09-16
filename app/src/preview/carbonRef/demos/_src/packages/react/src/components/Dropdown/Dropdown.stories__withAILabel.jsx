import { FolderOpen, Folders, Information, View } from '@carbon/icons-react';
import { Dropdown, DropdownSkeleton } from '@carbon/react';
import { Button } from '@carbon/react';
import { AILabel, AILabelContent, AILabelActions } from '@carbon/react';
import { IconButton } from '@carbon/react';
import mdx from './Dropdown.mdx';


const items = [
  {
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    text: 'Option 1',
  },
  {
    text: 'Option 2',
  },
  {
    text: 'Option 3',
    disabled: true,
  },
  {
    text: 'Option 4',
  },
  {
    text: 'Option 5',
  },
  {
    text: 'Option 6',
  },
  {
    text: 'Option 7',
  },
  {
    text: 'Option 8',
  },
];

const sharedArgs = {
  'aria-label': '',
  autoAlign: false,
  direction: 'bottom',
  disabled: false,
  helperText: 'Helper text',
  hideLabel: false,
  invalid: false,
  invalidText: 'Error message goes here',
  label: 'Choose an option',
  readOnly: false,
  size: 'md',
  titleText: 'Label',
  type: 'default',
  warn: false,
  warnText: 'Warning message goes here',
};

const sharedArgTypes = {
  'aria-label': {
    control: 'text',
  },
  autoAlign: {
    control: 'boolean',
  },
  direction: {
    control: 'select',
    options: ['top', 'bottom'],
  },
  invalid: {
    control: 'boolean',
  },
  invalidText: {
    control: 'text',
  },
  disabled: {
    control: 'boolean',
  },
  hideLabel: {
    control: 'boolean',
  },
  helperText: {
    control: 'text',
  },
  label: {
    control: 'text',
  },
  onChange: {
    action: 'onChange',
  },
  readOnly: {
    control: 'boolean',
  },
  warn: {
    control: 'boolean',
  },
  warnText: {
    control: 'text',
  },
  titleText: {
    control: 'text',
    type: {
      required: true,
    },
  },
  size: {
    options: ['xs', 'sm', 'md', 'lg'],
    control: 'select',
  },
  type: {
    control: 'select',
    options: ['default', 'inline'],
  },
};

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  subcomponents: {
    DropdownSkeleton,
  },
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      include: Object.keys(sharedArgTypes),
    },
  },
};

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
  const items = [
    {
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      text: 'Option 1',
    },
    {
      text: 'Option 2',
    },
    {
      text: 'Option 3',
      disabled: true,
    },
    {
      text: 'Option 4',
    },
    {
      text: 'Option 5',
    },
    {
      text: 'Option 6',
    },
    {
      text: 'Option 7',
    },
    {
      text: 'Option 8',
    },
  ];

  return (
    <div style={{ width: 400 }}>
      <Dropdown
        id="default"
        titleText="Label"
        helperText="Helper text"
        initialSelectedItem={items[1]}
        label="Option 1"
        items={items}
        itemToString={(item) => (item ? item.text : '')}
        decorator={aiLabel}
        {...args}
      />
    </div>
  );
};

withAILabel.argTypes = {
  ...sharedArgTypes,
};

withAILabel.args = {
  ...sharedArgs,
  label: 'Option 1',
};
