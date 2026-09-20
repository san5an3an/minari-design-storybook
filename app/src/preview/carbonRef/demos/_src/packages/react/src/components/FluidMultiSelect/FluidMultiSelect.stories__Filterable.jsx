// @ts-nocheck
import { FluidMultiSelect, FluidMultiSelectSkeleton } from '@carbon/react';
import mdx from './FluidMultiSelect.mdx';


export default {
  title: 'Components/Fluid Components/FluidMultiSelect',
  component: FluidMultiSelect,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  subcomponents: {
    FluidMultiSelectSkeleton,
  },
};

const items = [
  {
    id: 'option-0',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
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
    text: 'Option 3 - a disabled item',
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

export const Filterable = () => (
  <div style={{ width: '400px' }}>
    <FluidMultiSelect
      isFilterable
      onChange={() => {}}
      initialSelectedItem={items[2]}
      id="default"
      titleText="Label"
      label="Choose an option"
      items={items}
      itemToString={(item) => (item ? item.text : '')}
    />
  </div>
);
