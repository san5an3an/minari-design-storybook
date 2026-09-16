import mdx from './StructuredList.mdx';
import { StructuredListWrapper, StructuredListHead, StructuredListBody, StructuredListRow, StructuredListInput, StructuredListCell } from '@carbon/react';
import { StructuredListSkeleton } from '@carbon/react';


export default {
  title: 'Components/StructuredList',
  component: StructuredListWrapper,
  subcomponents: {
    StructuredListHead,
    StructuredListBody,
    StructuredListRow,
    StructuredListInput,
    StructuredListCell,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Skeleton = (args) => (
  <div style={{ width: '800px' }}>
    <StructuredListSkeleton {...args} />
  </div>
);

Skeleton.args = {
  rowCount: 5,
};

Skeleton.parameters = {
  controls: {
    include: ['rowCount', 'selectedInitialRow'],
  },
};

Skeleton.argTypes = {
  rowCount: {
    control: {
      type: 'number',
    },
  },
};
