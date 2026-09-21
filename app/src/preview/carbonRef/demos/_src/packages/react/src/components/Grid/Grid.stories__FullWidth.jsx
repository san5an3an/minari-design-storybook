// @ts-nocheck
import './Grid.stories.scss';
import { Grid, Column } from '@carbon/react';
import mdx from './Grid.mdx';


const defaultArgs = {
  align: 'center',
  as: 'div',
  condensed: false,
  fullWidth: false,
  narrow: false,
  withRowGap: false,
};

const sharedArgTypes = {
  align: {
    control: 'radio',
    options: ['start', 'center', 'end'],
  },
  as: {
    control: 'text',
  },
  children: {
    control: false,
  },
  className: {
    control: false,
  },
  condensed: {
    control: 'boolean',
  },
  fullWidth: {
    control: 'boolean',
  },
  narrow: {
    control: 'boolean',
  },
  withRowGap: {
    control: 'boolean',
  },
};

export default {
  title: 'Elements/Grid',
  component: Grid,
  subcomponents: {
    Column,
  },
  args: defaultArgs,
  argTypes: sharedArgTypes,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="sb-css-grid-container">
          <Story />
        </div>
      );
    },
  ],
};

export const FullWidth = (args) => {
  return (
    <div className="sb-css-grid-container">
      <Grid {...args}>
        <Column sm={4} />
        <Column sm={4} />
        <Column sm={4} />
        <Column sm={4} />
      </Grid>
    </div>
  );
};

FullWidth.args = {
  fullWidth: true,
};

FullWidth.argTypes = {
  ...sharedArgTypes,
  fullWidth: {
    ...sharedArgTypes.fullWidth,
    table: {
      readonly: true,
    },
  },
};
