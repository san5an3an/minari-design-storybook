// @ts-nocheck
import { Pagination } from '@carbon/react';
import { action } from '../../../../../_doc-stubs/storybook-actions.js';
import mdx from './Pagination.mdx';


const args = {
  backwardText: 'Previous',
  backwardTextTooltipPosition: 'top',
  disabled: false,
  forwardText: 'Next',
  forwardTextTooltipPosition: 'top',
  isLastPage: false,
  itemsPerPageText: 'Items per page:',
  page: 1,
  pageInputDisabled: false,
  pageNumberText: 'Page Number',
  pageSize: 10,
  pageSizeInputDisabled: false,
  pageSizes: [10, 20, 30, 40, 50],
  pagesUnknown: false,
  size: 'md',
  totalItems: 103,
  onChange: action('onChange'),
};

const argTypes = {
  className: {
    control: false,
  },
  id: {
    control: false,
  },
  itemText: {
    control: false,
  },
  backwardText: {
    control: { type: 'text' },
  },
  backwardTextTooltipPosition: {
    options: ['top', 'right', 'bottom', 'left'],
    control: { type: 'select' },
  },
  forwardText: {
    control: { type: 'text' },
  },
  forwardTextTooltipPosition: {
    options: ['top', 'right', 'bottom', 'left'],
    control: { type: 'select' },
  },
  disabled: {
    control: { type: 'boolean' },
  },
  isLastPage: {
    control: { type: 'boolean' },
  },
  itemsPerPageText: {
    control: { type: 'text' },
  },
  onChange: {
    action: 'onChange',
  },
  page: {
    control: { type: 'number' },
  },
  pageInputDisabled: {
    control: { type: 'boolean' },
  },
  pageSize: {
    control: { type: 'number' },
  },
  pageSizes: {
    control: { type: 'array' },
  },
  pageNumberText: {
    control: { type: 'text' },
  },
  pagesUnknown: {
    control: { type: 'boolean' },
  },
  pageSizeInputDisabled: {
    control: { type: 'boolean' },
  },
  size: {
    options: ['xs', 'sm', 'md', 'lg'],
    control: { type: 'select' },
  },
  totalItems: {
    control: { type: 'number' },
  },
};

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes,
  args,
  decorators: [
    (story) => (
      <div style={{ maxWidth: '800px', marginTop: '15px' }}>{story()}</div>
    ),
  ],
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const WithoutPageSizes = (args) => {
  // Omit `pageSizes` to hide the "items per page" selector. `pageSize` sets the
  // fixed page size (falls back to 10 when not provided).
  // `renderPageSelect` replaces the default page-select <Select> — returning
  // null hides it entirely.
  const { pageSizes, ...rest } = args ?? {};

  return (
    <Pagination
      pageSize={10}
      totalItems={103}
      renderPageSelect={() => null}
      {...rest}
    />
  );
};

WithoutPageSizes.storyName = 'Without page sizes and render page select';
WithoutPageSizes.parameters = {
  controls: {
    exclude: ['pageSizes', 'itemsPerPageText', 'pageSizeInputDisabled'],
  },
};
