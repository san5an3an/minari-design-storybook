// @ts-nocheck
import { Toggle } from '@carbon/react';
import mdx from './Toggle.mdx';


export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const SmallToggle = (args) => {
  return (
    <Toggle
      size="sm"
      labelText="Label"
      labelA="Off"
      labelB="On"
      defaultToggled
      id="toggle-2"
      {...args}
    />
  );
};
