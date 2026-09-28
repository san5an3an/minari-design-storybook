// @ts-nocheck
import { ProgressIndicator, ProgressStep, ProgressIndicatorSkeleton } from '@carbon/react';
import mdx from './ProgressIndicator.mdx';


export default {
  title: 'Components/ProgressIndicator',
  component: ProgressIndicator,
  subcomponents: {
    ProgressStep,
    ProgressIndicatorSkeleton,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Default = (args) => (
  <ProgressIndicator {...args}>
    <ProgressStep
      complete
      label="First step"
      description="Step 1: Getting started with Carbon Design System"
      secondaryLabel="Optional label"
    />
    <ProgressStep
      current
      label="Second step with tooltip"
      description="Step 2: Getting started with Carbon Design System"
    />
    <ProgressStep
      label="Third step with tooltip"
      description="Step 3: Getting started with Carbon Design System"
    />
    <ProgressStep
      label="Fourth step"
      description="Step 4: Getting started with Carbon Design System"
      invalid
      secondaryLabel="Example invalid step"
    />
    <ProgressStep
      label="Fifth step"
      description="Step 5: Getting started with Carbon Design System"
      disabled
    />
  </ProgressIndicator>
);

Default.args = {
  currentIndex: 0,
  spaceEqually: false,
  vertical: false,
};

Default.argTypes = {
  currentIndex: {
    control: { type: 'number' },
  },
  spaceEqually: {
    control: { type: 'boolean' },
  },
  vertical: {
    control: { type: 'boolean' },
  },
};
