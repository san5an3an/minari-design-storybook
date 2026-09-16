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

export const ExperimentalAutoAlign = (args) => (
  <div style={{ width: '5000px', height: '5000px' }}>
    <div
      style={{
        position: 'absolute',
        bottom: '20px',
      }}>
      <MenuButton label="Actions" {...args}>
        <MenuItem label="First action" />
        <MenuItem label="Second action that is a longer item to test overflow and title." />
        <MenuItem label="Third action" disabled />
      </MenuButton>
    </div>
  </div>
);
