// @ts-nocheck
import { Menu } from '@mantine/core';

import { MenuStylesApi } from '../../../../_pkg/styles-api';
import { DemoMenuItems } from './_menu-items';

const code = `
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu {...props} opened withArrow position="left">
      {/* ... menu items */}
    </Menu>
  );
}
`;

function Demo(props: any) {
  return (
    <Menu {...props} opened withArrow position="left" trapFocus={false}>
      <DemoMenuItems />
    </Menu>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: MenuStylesApi,
  component: Demo,
  code,
  centered: true,
};
