// @ts-nocheck
import { Tag } from '@carbon/react';
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

const customLabelParameters = {
  controls: {
    include: Object.keys(sharedArgTypes).filter((name) => name !== 'label'),
  },
};

export const WithListTitleDecorators = (args) => {
  return (
    <ContainedList
      {...args}
      label={
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <span>List title</span>
          <Tag size="sm" role="status" aria-label="4 items in list">
            4
          </Tag>
        </div>
      }>
      <ContainedListItem>List item</ContainedListItem>
      <ContainedListItem>List item</ContainedListItem>
      <ContainedListItem>List item</ContainedListItem>
      <ContainedListItem>List item</ContainedListItem>
    </ContainedList>
  );
};

WithListTitleDecorators.args = { ...sharedArgs };
WithListTitleDecorators.argTypes = sharedArgTypes;
WithListTitleDecorators.parameters = customLabelParameters;
