import { Tag } from '@carbon/react';
import { DismissibleTag } from '@carbon/react';
import { Asleep, View, FolderOpen, Folders } from '@carbon/icons-react';
import { Button } from '@carbon/react';
import { AILabel, AILabelContent, AILabelActions } from '@carbon/react';
import { IconButton } from '@carbon/react';
import '../AILabel/ailabel-story.scss';
import mdx from './Tag.mdx';
import './story.scss';


export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    docs: {
      page: mdx,
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

  return (
    <div style={{ marginBottom: '4rem' }}>
      <Tag
        decorator={aiLabel}
        className="some-class"
        type="red"
        title="Clear Filter"
        {...args}>
        {args.text}
      </Tag>

      <DismissibleTag
        decorator={aiLabel}
        className="some-class"
        type="purple"
        title="Clear Filter"
        {...args}></DismissibleTag>

      <Tag
        renderIcon={Asleep}
        decorator={aiLabel}
        className="some-class"
        type="blue"
        title="Clear Filter"
        {...args}>
        {args.text}
      </Tag>

      <DismissibleTag
        renderIcon={Asleep}
        decorator={aiLabel}
        className="some-class"
        type="green"
        title="Clear Filter"
        {...args}></DismissibleTag>
    </div>
  );
};

withAILabel.args = {
  disabled: false,
  size: 'md',
  text: 'Tag content',
};

withAILabel.argTypes = {
  children: {
    control: false,
  },
  className: {
    control: false,
  },
  decorator: {
    control: false,
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  filter: {
    control: false,
  },
  id: {
    control: false,
  },
  renderIcon: {
    control: false,
  },
  size: {
    options: ['sm', 'md', 'lg'],
    control: {
      type: 'select',
    },
  },
  title: {
    control: {
      type: 'text',
    },
  },
  type: {
    options: [
      'red',
      'blue',
      'cyan',
      'teal',
      'green',
      'gray',
      'high-contrast',
      'outline',
    ],
    control: {
      type: 'select',
    },
  },
  text: {
    control: {
      type: 'text',
    },
  },
};

withAILabel.parameters = {
  controls: {
    exclude: ['filter'],
  },
};
