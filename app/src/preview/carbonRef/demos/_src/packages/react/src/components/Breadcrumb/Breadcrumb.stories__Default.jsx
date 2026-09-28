// @ts-nocheck
import { Breadcrumb, BreadcrumbItem, BreadcrumbSkeleton } from '@carbon/react';
import mdx from './Breadcrumb.mdx';


export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  subcomponents: {
    BreadcrumbItem,
    BreadcrumbSkeleton,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const sharedArgs = {
  noTrailingSlash: false,
  'aria-label': 'Breadcrumb container',
  size: 'md',
};

const sharedArgTypes = {
  className: {
    control: false,
  },
  children: {
    control: false,
  },
  size: {
    control: { type: 'select' },
    options: ['sm', 'md'],
  },
  noTrailingSlash: {
    control: { type: 'boolean' },
    description: 'Removes the trailing slash from the breadcrumb',
  },
  'aria-label': {
    control: { type: 'text' },
    description: 'Specifies the label for the breadcrumb container',
  },
};

export const Default = (args) => (
  <Breadcrumb {...args}>
    <BreadcrumbItem>
      <a href="/#">Breadcrumb 1</a>
    </BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 4</BreadcrumbItem>
  </Breadcrumb>
);

Default.args = { ...sharedArgs };

Default.argTypes = {
  ...sharedArgTypes,
};
