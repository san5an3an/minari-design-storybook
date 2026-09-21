// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import { action } from '../../../../../_doc-stubs/storybook-actions.js';
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

const items = [
  {
    id: 'downshift-1-item-0',
    text: 'Option 1',
  },
  {
    id: 'downshift-1-item-1',
    text: 'Option 2',
  },
  {
    id: 'downshift-1-item-2',
    text: 'Option 3 - a disabled item',
    disabled: true,
  },
  {
    id: 'downshift-1-item-3',
    text: 'Option 4',
  },
  {
    id: 'downshift-1-item-4',
    text: 'An example option that is really long to show what should be done to handle long text',
  },
  {
    id: 'downshift-1-item-5',
    text: 'Option 5',
  },
];

const customSearchItems = [
  {
    id: 'custom-search-item-0',
    text: 'Apple',
    searchTerms: ['fruit', 'red'],
  },
  {
    id: 'custom-search-item-1',
    text: 'Orange',
    searchTerms: ['fruit', 'orange'],
  },
  {
    id: 'custom-search-item-2',
    text: 'Broccoli',
    searchTerms: ['vegetable', 'green'],
  },
];

function preserveCustomSearchResults(items) {
  return items;
}

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

const filterableArgTypes = {
  placeholder: {
    control: {
      type: 'text',
    },
    description:
      'Generic `placeholder` that will be used as the textual representation of what this field is for',
    table: {
      type: { summary: 'string' },
    },
  },
};

export const FilterableWithCustomSearch = (args) => {
  const [searchResults, setSearchResults] = useState(customSearchItems);

  function handleInputValueChange(changes) {
    action('onInputValueChange')(changes);
    const query = changes.inputValue?.trim().toLocaleLowerCase();

    setSearchResults(
      query
        ? customSearchItems.filter((item) => {
            return item.searchTerms.some((term) => term.includes(query));
          })
        : customSearchItems
    );
  }

  return (
    <div style={{ width: 300 }}>
      <FilterableMultiSelect
        {...args}
        id="carbon-multiselect-custom-search"
        titleText="Filter by category or color"
        helperText='Try searching for "fruit" or "green"'
        items={searchResults}
        itemToString={(item) => (item ? item.text : '')}
        filterItems={preserveCustomSearchResults}
        onInputValueChange={handleInputValueChange}
      />
    </div>
  );
};

FilterableWithCustomSearch.args = { ...sharedArgs };
FilterableWithCustomSearch.argTypes = {
  ...filterableArgTypes,
};
FilterableWithCustomSearch.parameters = {
  controls: {
    exclude: ['label'],
  },
};
