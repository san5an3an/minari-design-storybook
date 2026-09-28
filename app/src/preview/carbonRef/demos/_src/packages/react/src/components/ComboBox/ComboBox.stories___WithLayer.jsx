import { WithLayer } from '../../../.storybook/templates/WithLayer';
import { ComboBox } from '@carbon/react';
import mdx from './ComboBox.mdx';


const items = [
  {
    id: 'option-0',
    text: 'An example option that is really long to show what should be done to handle long text',
  },
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
    disabled: true,
  },
  {
    id: 'option-4',
    text: 'Option 4',
  },
  {
    id: 'option-5',
    text: 'Option 5',
  },
];
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

export const _WithLayer = (args) => (
  <WithLayer>
    {(layer) => (
      <div style={{ width: 300 }}>
        <ComboBox
          invalidText="Error message goes here"
          warnText="Warning message goes here"
          onChange={() => {}}
          id={`carbon-combobox-${layer}`}
          items={items}
          itemToString={(item) => (item ? item.text : '')}
          titleText="Label"
          helperText="Helper text"
          {...args}
        />
      </div>
    )}
  </WithLayer>
);

_WithLayer.argTypes = { ...sharedArgTypes };
