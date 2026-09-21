// @ts-nocheck
import { Stack } from '@carbon/react';


const args = {
  as: 'div',
  gap: 6,
  orientation: 'vertical',
};

const argTypes = {
  as: {
    control: {
      type: 'text',
    },
  },
  gap: {
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    control: {
      type: 'select',
    },
  },
  orientation: {
    options: ['horizontal', 'vertical'],
    control: {
      type: 'select',
    },
  },
};

export default {
  title: 'Layout/Stack',
  component: Stack,
  args,
  argTypes,
};

export const Horizontal = (args) => {
  return (
    <Stack {...args}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Stack>
  );
};

Horizontal.args = {
  orientation: 'horizontal',
};

Horizontal.argTypes = {
  orientation: {
    ...argTypes.orientation,
    table: {
      readonly: true,
    },
  },
};
