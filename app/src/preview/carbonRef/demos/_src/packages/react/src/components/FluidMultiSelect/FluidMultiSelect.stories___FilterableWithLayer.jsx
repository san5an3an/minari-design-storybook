import { WithLayer } from '../../../.storybook/templates/WithLayer';
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

export const _FilterableWithLayer = () => (
  <WithLayer>
    {(layer) => (
      <div style={{ width: 300 }}>
        <FluidMultiSelect
          isFilterable
          id={`carbon-multiselect-example-${layer}`}
          titleText="Multiselect title"
          items={items}
          itemToString={(item) => (item ? item.text : '')}
          selectionFeedback="top-after-reopen"
        />
      </div>
    )}
  </WithLayer>
);
