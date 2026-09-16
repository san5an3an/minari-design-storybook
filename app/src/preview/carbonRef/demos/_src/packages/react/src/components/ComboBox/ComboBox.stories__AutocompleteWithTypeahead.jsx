import { ComboBox } from '@carbon/react';
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

export const AutocompleteWithTypeahead = (args) => {
  return (
    <div style={{ width: 300 }}>
      <ComboBox
        helperText="Helper text"
        invalidText="Error message goes here"
        warnText="Warning message goes here"
        id="carbon-combobox"
        items={[
          'Apple',
          'Apricot',
          'Avocado',
          'Banana',
          'Blackberry',
          'Blueberry',
          'Cantaloupe',
        ]}
        titleText="Label"
        {...args}
        typeahead
      />
    </div>
  );
};

AutocompleteWithTypeahead.argTypes = {
  ...sharedArgTypes,
  onChange: { action: 'onChange' },
};
