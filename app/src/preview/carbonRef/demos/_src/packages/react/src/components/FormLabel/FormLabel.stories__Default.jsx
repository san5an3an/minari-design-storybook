import { FormLabel } from '@carbon/react';
import './form-label-stories.scss';
import mdx from './FormLabel.mdx';


export default {
  title: 'Components/FormLabel',
  component: FormLabel,
  args: {
    label: 'Form label',
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      table: {
        category: 'story controls',
      },
    },
    id: {
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Default = ({ label, ...args }) => {
  return <FormLabel {...args}>{label}</FormLabel>;
};
