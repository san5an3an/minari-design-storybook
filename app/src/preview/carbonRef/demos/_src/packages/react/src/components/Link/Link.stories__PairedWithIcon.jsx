import { ArrowRight } from '@carbon/icons-react';
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

export const PairedWithIcon = (args) => {
  return (
    <Link
      href="#"
      renderIcon={() => <ArrowRight aria-label="Arrow Right" />}
      {...args}>
      Carbon Docs
    </Link>
  );
};
