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

export const WithNestedMenu = (args) => (
  <MenuButton label="Actions" {...args}>
    <MenuItem label="Save" shortcut="⌘S" />
    <MenuItem label="Save as" shortcut="⌥⌘S" />
    <MenuItem label="Export as">
      <MenuItem label="PDF" />
      <MenuItem label="JPG" />
      <MenuItem label="PNG" />
    </MenuItem>
    <MenuItemDivider />
    <MenuItem label="Delete" kind="danger" />
  </MenuButton>
);
