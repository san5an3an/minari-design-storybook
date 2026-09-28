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

export const Offset = (args) => {
  return (
    <div className="sb-css-grid-container">
      <Grid {...args}>
        <Column
          sm={{ span: 1, offset: 3 }}
          md={{ span: 2, offset: 6 }}
          lg={{ span: 4, offset: 12 }}
        />
        <Column
          sm={{ span: 2, offset: 2 }}
          md={{ span: 4, offset: 4 }}
          lg={{ span: 8, offset: 8 }}
        />
        <Column
          sm={{ span: 3, offset: 1 }}
          md={{ span: 6, offset: 2 }}
          lg={{ span: 12, offset: 4 }}
        />
        <Column sm={{ span: 4 }} md={{ span: 8 }} lg={{ span: 16 }} />
        <Column
          sm={{ span: '25%', offset: 1 }}
          md={{ span: '50%', offset: 2 }}
          lg={{ span: '75%', offset: 4 }}
        />
      </Grid>
    </div>
  );
};
