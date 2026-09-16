import { ListItem } from '@carbon/react';
import { UnorderedList } from '@carbon/react';
import mdx from './UnorderedList.mdx';


const args = {
  isExpressive: false,
  nested: false,
};

const argTypes = {
  isExpressive: {
    control: {
      type: 'boolean',
    },
  },
  nested: {
    control: {
      type: 'boolean',
    },
  },
};

export default {
  title: 'Components/UnorderedList',
  component: UnorderedList,
  subcomponents: {
    ListItem,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
  args,
  argTypes,
};

export const Default = (args) => {
  return (
    <UnorderedList {...args}>
      <ListItem>Review pull requests</ListItem>
      <ListItem>Update dependencies</ListItem>
      <ListItem>Publish the release notes</ListItem>
    </UnorderedList>
  );
};
