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

export const SubgridWithRowGap = (args) => (
  <Grid {...args}>
    <Column sm={4} md={8} lg={16}>
      <Grid withRowGap>
        {/* Nested subgrid with row gap */}
        <Column sm={4} md={4} lg={8} />
        <Column sm={4} md={4} lg={8} />
        <Column sm={4} md={4} lg={8} />
        <Column sm={4} md={4} lg={8} />
      </Grid>
    </Column>
    <Column sm={4} md={8} lg={16}>
      <Grid withRowGap narrow>
        {/* Nested subgrid with row gap */}
        <Column sm={4} md={4} lg={8} />
        <Column sm={4} md={4} lg={8} />
        <Column sm={4} md={4} lg={8} />
        <Column sm={4} md={4} lg={8} />
      </Grid>
    </Column>
    <Column sm={4} md={8} lg={16}>
      <Grid withRowGap condensed>
        {/* Nested subgrid with row gap */}
        <Column sm={4} md={4} lg={8} />
        <Column sm={4} md={4} lg={8} />
        <Column sm={4} md={4} lg={8} />
        <Column sm={4} md={4} lg={8} />
      </Grid>
    </Column>
  </Grid>
);

SubgridWithRowGap.args = {
  withRowGap: true,
};

SubgridWithRowGap.argTypes = {
  ...sharedArgTypes,
  withRowGap: {
    ...sharedArgTypes.withRowGap,
    table: {
      readonly: true,
    },
  },
};
