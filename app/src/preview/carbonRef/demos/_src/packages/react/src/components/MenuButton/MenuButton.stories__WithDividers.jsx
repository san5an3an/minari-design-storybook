// @ts-nocheck
import { MenuItem, MenuItemDivider } from '@carbon/react';
import { MenuButton } from '@carbon/react';
import mdx from './MenuButton.mdx';


export default {
  title: 'Components/MenuButton',
  component: MenuButton,
  subcomponents: {
    MenuItem,
    MenuItemDivider,
  },
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: ['menuTarget'],
    },
  },
};

export const WithDividers = (args) => {
  return (
    <MenuButton label="Actions" {...args}>
      <MenuItem label="Create service request" />
      <MenuItem label="Create work order" />
      <MenuItemDivider />
      <MenuItem label="Add plan" />
      <MenuItem label="Add flag" />
      <MenuItemDivider />
      <MenuItem label="Edit source location" />
      <MenuItem label="Recalculate source" />
    </MenuButton>
  );
};
