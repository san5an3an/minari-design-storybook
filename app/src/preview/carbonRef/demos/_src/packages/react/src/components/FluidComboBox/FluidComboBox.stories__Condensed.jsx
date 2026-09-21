// @ts-nocheck
import { FluidComboBox, FluidComboBoxSkeleton } from '@carbon/react';
import mdx from './FluidComboBox.mdx';


export default {
  title: 'Components/Fluid Components/FluidComboBox',
  component: FluidComboBox,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  subcomponents: {
    FluidComboBoxSkeleton,
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

export const Condensed = () => (
  <div style={{ width: '400px' }}>
    <FluidComboBox
      onChange={() => {}}
      id="default"
      isCondensed
      titleText="Label"
      label="Choose an option"
      items={items}
      itemToString={(item) => (item ? item.text : '')}
    />
  </div>
);
