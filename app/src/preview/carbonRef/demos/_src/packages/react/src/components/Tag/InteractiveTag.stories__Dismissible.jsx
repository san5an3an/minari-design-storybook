import React from 'react';
import { SelectableTag } from '@carbon/react';
import { DismissibleTag } from '@carbon/react';
import { Asleep } from '@carbon/icons-react';
import mdx from './Tag.mdx';
import './storyInteractiveTag.scss';
import { Button } from '@carbon/react';


export default {
  title: 'Components/Tag',
  component: SelectableTag,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Dismissible = (args) => {
  const tags = [
    {
      type: 'red',
      text: 'Tag content with a long text description',
      tagTitle: 'Provide a custom title to the tag',
    },
    {
      type: 'magenta',
      text: 'Tag content 1',
    },
    {
      type: 'purple',
      text: 'Tag content 2',
    },
    {
      type: 'blue',
      text: 'Tag content 3',
    },
    {
      type: 'cyan',
      text: 'Tag content 4',
    },
    {
      type: 'teal',
      text: 'Tag content 5',
    },
    {
      type: 'green',
      text: 'Tag content 6',
    },
    {
      type: 'gray',
      text: 'Tag content 7',
    },
    {
      type: 'cool-gray',
      text: 'Tag content 8',
    },
    {
      type: 'warm-gray',
      text: 'Tag content 9',
    },
    {
      type: 'high-contrast',
      text: 'Tag content 10',
    },
    {
      type: 'outline',
      text: 'Tag content 11',
    },
  ];

  const [renderedTags, setRenderedTags] = React.useState(tags);

  const handleClose = (removedTag) => {
    const newTags = renderedTags.filter((tag) => tag !== removedTag);
    setRenderedTags(newTags);
  };

  const resetTabs = () => {
    setRenderedTags(tags);
  };

  return (
    <>
      <Button
        // aria-label="Re-render all tags in the screen"
        style={{ marginBottom: '3rem' }}
        onClick={resetTabs}>
        Reset
      </Button>
      <br />
      <div aria-label="Dismissible tags" role="group">
        {renderedTags.map((tag, index) => (
          <DismissibleTag
            key={index}
            type={tag.type}
            className="some-class"
            renderIcon={Asleep}
            text={tag.text}
            tagTitle={tag.tagTitle}
            title="Dismiss"
            dismissTooltipAlignment={args.dismissTooltipAlignment}
            onClose={(e) => {
              e.preventDefault();
              handleClose(tag);
            }}
            {...args}
          />
        ))}
      </div>
    </>
  );
};

Dismissible.args = {
  disabled: false,
  size: 'md',
  dismissTooltipAlignment: 'bottom',
};

Dismissible.parameters = {
  controls: {
    exclude: ['filter', 'selected'],
  },
};
Dismissible.argTypes = {
  size: {
    options: ['sm', 'md', 'lg'],
    control: {
      type: 'select',
    },
  },
  dismissTooltipAlignment: {
    options: [
      'top',
      'top-start',
      'top-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'left',
      'left-start',
      'left-end',
      'right',
      'right-start',
      'right-end',
    ],
    control: { type: 'select' },
    description: 'Specify the tooltip alignment for the dismiss button',
    table: {
      defaultValue: { summary: 'bottom' },
    },
  },
  id: {
    control: false,
  },
  renderIcon: {
    control: false,
  },
};
