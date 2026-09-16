import React from 'react';
import { Tag } from '@carbon/react';
import { SelectableTag } from '@carbon/react';
import { OperationalTag } from '@carbon/react';
import { Asleep } from '@carbon/icons-react';
import { Popover, PopoverContent } from '@carbon/react';
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

export const Operational = (args) => {
  const [open, setOpen] = React.useState(false);
  const [openHighContrast, setOpenHighContrast] = React.useState(false);

  return (
    <>
      <div
        aria-label="Operational tags"
        role="group"
        style={{ marginBottom: '1rem' }}>
        <OperationalTag
          type="red"
          className="some-class"
          renderIcon={Asleep}
          text="Tag content with a long text description"
          {...args}
        />
        <OperationalTag
          type="magenta"
          className="some-class"
          renderIcon={Asleep}
          text="Tag content"
          {...args}
        />
        <OperationalTag
          type="purple"
          className="some-class"
          renderIcon={Asleep}
          text="Tag content"
          {...args}
        />
        <OperationalTag
          type="blue"
          className="some-class"
          renderIcon={Asleep}
          text="Tag content"
          {...args}
        />
        <OperationalTag
          type="cyan"
          className="some-class"
          renderIcon={Asleep}
          text="Tag content"
          {...args}
        />
        <OperationalTag
          type="teal"
          className="some-class"
          renderIcon={Asleep}
          text="Tag content"
          {...args}
        />
        <OperationalTag
          type="green"
          className="some-class"
          renderIcon={Asleep}
          text="Tag content"
          {...args}
        />
        <OperationalTag
          type="gray"
          className="some-class"
          renderIcon={Asleep}
          text="Tag content"
          {...args}
        />
        <OperationalTag
          type="cool-gray"
          className="some-class"
          renderIcon={Asleep}
          text="Tag content"
          {...args}
        />
        <OperationalTag
          type="warm-gray"
          className="some-class"
          renderIcon={Asleep}
          text="Tag content"
          {...args}
        />
      </div>

      <h4>Interactive examples</h4>
      <div
        id="operational-tag"
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          marginTop: '1rem',
        }}
        aria-label="Operational tags with Popover"
        role="group">
        {/* High contrast example */}
        <Popover open={openHighContrast} highContrast>
          <OperationalTag
            onClick={() => {
              setOpenHighContrast(!openHighContrast);
            }}
            aria-expanded={openHighContrast}
            renderIcon={Asleep}
            text="Tag content"
            className="some-class"
            {...args}
          />
          <PopoverContent className="popover-content">
            <p>Tag 1 name</p>
            <p>Tag 2 name</p>
            <p>Tag 3 name</p>
            <p>Tag 4 name</p>
            <p>Tag 5 name</p>
          </PopoverContent>
        </Popover>

        <Popover open={open}>
          <OperationalTag
            onClick={() => {
              setOpen(!open);
            }}
            aria-expanded={open}
            renderIcon={Asleep}
            text="Tag content"
            className="some-class"
            {...args}
          />
          <PopoverContent>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem',
              }}>
              <Tag type="blue" className="some-class" {...args}>
                {'Tag 1 name'}
              </Tag>
              <Tag type="blue" className="some-class" {...args}>
                {'Tag 2 name'}
              </Tag>
              <Tag type="blue" className="some-class" {...args}>
                {'Tag 3 name'}
              </Tag>
              <Tag type="blue" className="some-class" {...args}>
                {'Tag 4 name'}
              </Tag>
              <Tag type="blue" className="some-class" {...args}>
                {'Tag 5 name'}
              </Tag>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

Operational.args = {
  disabled: false,
  size: 'md',
};

Operational.parameters = {
  controls: {
    exclude: ['filter', 'title', 'selected'],
  },
};

Operational.argTypes = {
  id: {
    control: false,
  },
  children: {
    control: false,
  },
  className: {
    control: false,
  },
  type: {
    control: false,
  },
  size: {
    options: ['sm', 'md', 'lg'],
    control: {
      type: 'select',
    },
  },
  renderIcon: {
    control: false,
  },
};
