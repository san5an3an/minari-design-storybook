import React from 'react';
import { SelectableTag } from '@carbon/react';
import { Asleep } from '@carbon/icons-react';
import mdx from './Tag.mdx';
import './storyInteractiveTag.scss';


export default {
  title: 'Components/Tag',
  component: SelectableTag,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Selectable = (args) => {
  const tags = [
    {
      id: 1,
      text: 'Tag content with a long text description',
    },
    {
      id: 2,
      text: 'Tag content 1',
    },
    {
      id: 3,
      text: 'Tag content 2',
    },
    {
      id: 4,
      text: 'Tag content 3',
    },
  ];

  const [selectedTags, setSelectedTags] = React.useState([
    {
      id: 2,
      text: 'Tag content 1',
    },
  ]);

  const handleChange = (tag, selected) => {
    const nextSelectedTags = selected
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t.id !== tag.id);

    console.log('Selected tags array: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <div aria-label="Selectable tags" role="group">
      {tags.map((tag, index) => (
        <SelectableTag
          key={index}
          renderIcon={Asleep}
          text={tag.text}
          className="some-class"
          selected={selectedTags.find((t) => t.id === tag.id)}
          onChange={(selected) => handleChange(tag, selected)}
          {...args}
        />
      ))}
    </div>
  );
};

Selectable.args = {
  disabled: false,
};

Selectable.parameters = {
  controls: {
    exclude: ['type', 'filter', 'title'],
  },
};

Selectable.argTypes = {
  selected: {
    control: 'false',
    description: 'Specify the state of the selectable tag.',
  },
  size: {
    options: ['sm', 'md', 'lg'],
    control: {
      type: 'select',
    },
  },
  id: {
    control: false,
  },
  renderIcon: {
    control: false,
  },
};
