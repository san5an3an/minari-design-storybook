import React, { useEffect, useRef, useState } from 'react';
import mdx from './MultiSelect.mdx';
import { FilterableMultiSelect, MultiSelect } from '@carbon/react';


export default {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  subcomponents: {
    FilterableMultiSelect,
  },
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
    selectionFeedback: {
      options: ['top', 'fixed', 'top-after-reopen'],
      control: { type: 'select' },
    },
    direction: {
      options: ['top', 'bottom'],
      control: { type: 'radio' },
    },
    type: {
      options: ['inline', 'default'],
      control: { type: 'radio' },
    },
    titleText: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    hideLabel: {
      control: {
        type: 'boolean',
      },
    },
    helperText: {
      control: {
        type: 'text',
      },
    },
    invalid: {
      control: {
        type: 'boolean',
      },
    },
    warn: {
      control: {
        type: 'boolean',
      },
    },
    warnText: {
      control: {
        type: 'text',
      },
    },
    invalidText: {
      control: {
        type: 'text',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    clearSelectionDescription: {
      control: {
        type: 'text',
      },
    },
    useTitleInItem: {
      control: {
        type: 'boolean',
      },
    },
    clearSelectionText: {
      control: {
        type: 'text',
      },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: [
        'filterItems',
        'translateWithId',
        'titleText',
        'open',
        'selectedItems',
        'itemToString',
        'itemToElement',
        'locale',
        'items',
        'id',
        'initialSelectedItems',
        'sortItems',
        'compareItems',
        'downshiftProps',
      ],
    },
  },
};

const sharedArgs = {
  size: 'md',
  autoAlign: false,
  type: 'default',
  titleText: 'Label',
  disabled: false,
  hideLabel: false,
  invalid: false,
  warn: false,
  open: false,
  helperText: 'This is helper text',
  warnText: 'Warning message goes here',
  invalidText: 'Error message goes here',
  label: 'This is a label',
  clearSelectionDescription: 'Total items selected: ',
  useTitleInItem: false,
  clearSelectionText: 'To clear selection, press Delete or Backspace,',
};
const itemsWithSelectAll = [
  {
    id: 'downshift-1-item-0',
    text: 'Editor',
  },
  {
    id: 'downshift-1-item-1',
    text: 'Owner',
  },
  {
    id: 'downshift-1-item-2',
    text: 'Uploader',
  },
  {
    id: 'downshift-1-item-3',
    text: 'Reader - a disabled item',
    disabled: true,
  },
  {
    id: 'select-all',
    text: 'All roles',
    isSelectAll: true,
  },
];

export const SelectAll = (args) => {
  const [label, setLabel] = useState('Choose options');

  const onChange = (value) => {
    if (value.selectedItems.length == 1) {
      setLabel('Option selected');
    } else if (value.selectedItems.length > 1) {
      setLabel('Options selected');
    } else {
      setLabel('Choose options');
    }
  };

  return (
    <div style={{ width: 300 }}>
      <MultiSelect
        label={label}
        id="carbon-multiselect-example"
        titleText="Multiselect title"
        helperText="This is helper text"
        items={itemsWithSelectAll}
        itemToString={(item) => (item ? item.text : '')}
        selectionFeedback="top-after-reopen"
        onChange={onChange}
        {...args}
      />
    </div>
  );
};

SelectAll.args = { ...sharedArgs };
