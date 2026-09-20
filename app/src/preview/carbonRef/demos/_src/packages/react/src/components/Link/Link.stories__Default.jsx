// @ts-nocheck
import { Link } from '@carbon/react';
import mdx from './Link.mdx';


export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  args: {
    disabled: false,
    inline: false,
    visited: false,
  },
  argTypes: {
    renderIcon: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = (args) => {
  return (
    <Link href="#" {...args}>
      Link
    </Link>
  );
};
