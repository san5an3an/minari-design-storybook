import { OrderedList } from '@carbon/react';
import { ListItem } from '@carbon/react';
import mdx from './OrderedList.mdx';


const args = {
  isExpressive: false,
  native: false,
  nested: false,
};

const argTypes = {
  isExpressive: {
    control: {
      type: 'boolean',
    },
  },
  native: {
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
  title: 'Components/OrderedList',
  component: OrderedList,
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
    <OrderedList {...listArgs}>
      <ListItem>
        Ordered List level 1
        <OrderedList {...listArgs} nested={nested}>
          <ListItem>Ordered List level 2</ListItem>
          <ListItem>
            Ordered List level 2
            <OrderedList {...listArgs} nested={nested}>
              <ListItem>Ordered List level 3</ListItem>
              <ListItem>Ordered List level 3</ListItem>
            </OrderedList>
          </ListItem>
        </OrderedList>
      </ListItem>
      <ListItem>Ordered List level 1</ListItem>
      <ListItem>Ordered List level 1</ListItem>
    </OrderedList>
  );
};

Nested.args = {
  nested: true,
};

Nested.argTypes = {
  nested: {
    control: false,
  },
};
