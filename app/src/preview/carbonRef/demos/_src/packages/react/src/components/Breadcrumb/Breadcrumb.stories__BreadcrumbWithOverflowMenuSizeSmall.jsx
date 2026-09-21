// @ts-nocheck
import { Breadcrumb, BreadcrumbItem, BreadcrumbSkeleton } from '@carbon/react';
import { OverflowMenu } from '@carbon/react';
import { OverflowMenuItem } from '@carbon/react';
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

export const BreadcrumbWithOverflowMenuSizeSmall = (args) => (
  <Breadcrumb {...args} noTrailingSlash>
    <BreadcrumbItem>
      <a href="/#">Breadcrumb 1</a>
    </BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
    <BreadcrumbItem data-floating-menu-container>
      <OverflowMenu align="bottom" aria-label="Overflow menu in a breadcrumb">
        <OverflowMenuItem itemText="Breadcrumb 3" />
        <OverflowMenuItem itemText="Breadcrumb 4" />
      </OverflowMenu>
    </BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 5</BreadcrumbItem>
    <BreadcrumbItem isCurrentPage>Breadcrumb 6</BreadcrumbItem>
  </Breadcrumb>
);

BreadcrumbWithOverflowMenuSizeSmall.argTypes = {
  ...sharedArgTypes,
};

/*
 * This story will:
 * - Be excluded from the docs page
 * - Removed from the sidebar navigation
 * - Still be a tested variant
 */
BreadcrumbWithOverflowMenuSizeSmall.tags = ['!dev', '!autodocs'];

BreadcrumbWithOverflowMenuSizeSmall.args = {
  size: 'sm',
};
