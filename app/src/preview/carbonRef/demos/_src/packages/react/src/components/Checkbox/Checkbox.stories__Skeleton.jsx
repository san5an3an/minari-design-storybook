import '../AILabel/ailabel-story.scss';
import { Checkbox, CheckboxSkeleton } from '@carbon/react';
import mdx from './Checkbox.mdx';
import { CheckboxGroup } from '@carbon/react';


export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  subcomponents: {
    CheckboxGroup,
    CheckboxSkeleton,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Skeleton = () => <CheckboxSkeleton />;

Skeleton.parameters = {
  controls: {
    disable: true,
  },
};
