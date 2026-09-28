// @ts-nocheck
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

export const Disclosed = (args) => {
  return (
    <>
      <ContainedList {...args} kind="disclosed">
        <ContainedListItem>List item</ContainedListItem>
        <ContainedListItem>List item</ContainedListItem>
        <ContainedListItem>List item</ContainedListItem>
        <ContainedListItem>List item</ContainedListItem>
      </ContainedList>
      <ContainedList {...args} kind="disclosed">
        <ContainedListItem>List item</ContainedListItem>
        <ContainedListItem>List item</ContainedListItem>
        <ContainedListItem>List item</ContainedListItem>
        <ContainedListItem>List item</ContainedListItem>
      </ContainedList>
    </>
  );
};

Disclosed.args = {
  ...sharedArgs,
  kind: 'disclosed',
};
Disclosed.argTypes = {
  ...sharedArgTypes,
  kind: {
    ...sharedArgTypes.kind,
    table: { readonly: true },
  },
};
Disclosed.parameters = sharedParameters;
