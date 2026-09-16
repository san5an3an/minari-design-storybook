import React from 'react';
import { ComboBox } from '@carbon/react';
import { Button } from '@carbon/react';
import mdx from './ComboBox.mdx';

export default {
  title: 'Components/ComboBox',
  component: ComboBox,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    light: {
      table: {
        disable: true,
      },
    },
    onChange: { action: 'onChange' },
  },
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: [
        'aria-label',
        'id',
        'downshiftProps',
        'initialSelectedItem',
        'items',
        'itemToElement',
        'itemToString',
        'selectedItem',
        'shouldFilterItem',
        'translateWithId',
        'titleText',
        'type',
      ],
    },
  },
};

const sharedArgTypes = {
  onChange: {
    action: 'onChange',
  },
  onToggleClick: {
    action: 'clicked',
  },
  invalidText: {
    control: 'text',
  },
  warnText: {
    control: 'text',
  },
};

export const Controlled = (args) => {
  const options = [
    {
      id: 'option-1',
      text: 'Option 1',
    },
    {
      id: 'option-2',
      text: 'Option 2',
    },
    {
      id: 'option-3',
      text: 'Option 3',
    },
  ];
  const [value, setValue] = React.useState(options[0]);
  const onChange = ({ selectedItem }) => {
    setValue(selectedItem);
  };

  return (
    <div>
      <ComboBox
        {...args}
        invalidText="Error message goes here"
        warnText="Warning message goes here"
        onChange={onChange}
        id="carbon-combobox"
        items={options}
        selectedItem={value}
        itemToString={(item) => (item ? item.text : '')}
        titleText="Label"
        helperText="Helper text"
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Button onClick={() => setValue(null)}>Clear</Button>
        <Button onClick={() => setValue(options[0])}>Option 1</Button>
        <Button onClick={() => setValue(options[1])}>Option 2</Button>
        <Button onClick={() => setValue(options[2])}>Option 3</Button>
      </div>
    </div>
  );
};

Controlled.argTypes = { ...sharedArgTypes };
