// @ts-nocheck
import { action } from 'storybook/actions';
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

export const Default = (args) => {
  return (
    <MenuButton {...args} onClick={action('onClick')} label="Actions">
      <MenuItem
        label="First action with a long label description"
        onClick={action('onClick')}
      />
      <MenuItem label="Second action" onClick={action('onClick')} />
      <MenuItem label="Third action" onClick={action('onClick')} disabled />
    </MenuButton>
  );
};

Default.args = { label: 'Actions' };
