// @ts-nocheck
import { DataTableSkeleton } from '@carbon/react';
import { headers } from '../DataTable/stories/shared';


const props = () => ({
  zebra: false,
  showHeader: true,
  showToolbar: true,
});

export default {
  title: 'Components/DataTable/Skeleton',
  component: DataTableSkeleton,
};

export const Skeleton = (args) => {
  const { ...rest } = props();

  return (
    <div style={{ width: '800px' }}>
      <DataTableSkeleton
        {...rest}
        {...args}
        headers={headers}
        aria-label="sample table"
      />
      <br />
    </div>
  );
};

Skeleton.parameters = {
  controls: {
    exclude: ['headers'],
  },
};
