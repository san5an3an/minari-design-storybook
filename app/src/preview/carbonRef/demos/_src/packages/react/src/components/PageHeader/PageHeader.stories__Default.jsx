import { preview__PageHeader as PageHeader } from '@carbon/react';
import mdx from './PageHeader.mdx';


export default {
  title: 'Deprecated/preview__PageHeader',
  component: PageHeader,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  tags: ['!autodocs'],
};

export const Default = () => (
  <p>
    <code>PageHeader</code> has moved from <code>@carbon/react</code> to{' '}
    <a href="https://github.com/carbon-design-system/ibm-products">
      @carbon/ibm-products
    </a>
    . See issue{' '}
    <a href="https://github.com/carbon-design-system/carbon/issues/21926">
      #21926
    </a>{' '}
    for migration details.
  </p>
);
