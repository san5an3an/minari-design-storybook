// @ts-nocheck
import { action } from 'storybook/actions';
import mdx from './ContainedList.mdx';
import { ContainedList } from '@carbon/react';
import { default as ContainedListItem } from '@carbon/react/es/components/ContainedList/ContainedListItem/ContainedListItem.js';


export default {
  title: 'Components/ContainedList',
  component: ContainedList,
  subcomponents: { ContainedListItem },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const sharedArgs = {
  className: '',
  isInset: false,
  kind: 'on-page',
  label: 'List title',
  size: 'lg',
};

const sharedArgTypes = {
  className: {
    control: 'text',
  },
  isInset: {
    control: 'boolean',
  },
  kind: {
    control: 'select',
    options: ['on-page', 'disclosed'],
  },
  label: {
    control: 'text',
  },
  size: {
    control: 'select',
    options: ['sm', 'md', 'lg', 'xl'],
  },
};

const sharedParameters = {
  controls: {
    include: Object.keys(sharedArgTypes),
  },
};

export const WithInteractiveItems = (args) => {
  const onClick = action('onClick (ContainedListItem)');

  return (
    <ContainedList {...args}>
      <ContainedListItem onClick={onClick}>List item</ContainedListItem>
      <ContainedListItem onClick={onClick} disabled>
        List item
      </ContainedListItem>
      <ContainedListItem onClick={onClick}>List item</ContainedListItem>
      <ContainedListItem onClick={onClick}>List item</ContainedListItem>
    </ContainedList>
  );
};

WithInteractiveItems.args = { ...sharedArgs };
WithInteractiveItems.argTypes = sharedArgTypes;
WithInteractiveItems.parameters = sharedParameters;
