// @ts-nocheck
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

export const Nested = ({ nested, ...listArgs }) => {
  return (
    <UnorderedList {...listArgs}>
      <ListItem>
        Prepare the release
        <UnorderedList {...listArgs} nested={nested}>
          <ListItem>Review pull requests</ListItem>
          <ListItem>
            Update dependencies
            <UnorderedList {...listArgs} nested={nested}>
              <ListItem>Run the test suite</ListItem>
              <ListItem>Resolve security alerts</ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
      </ListItem>
      <ListItem>Publish the release notes</ListItem>
      <ListItem>Notify maintainers</ListItem>
    </UnorderedList>
  );
};

Nested.args = {
  nested: true,
};

Nested.argTypes = {
  ...argTypes,
  nested: {
    ...argTypes.nested,
    table: { readonly: true },
  },
};

Nested.storyName = 'nested';
