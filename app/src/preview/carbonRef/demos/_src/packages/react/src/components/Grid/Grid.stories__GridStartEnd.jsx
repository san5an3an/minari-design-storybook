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

export const GridStartEnd = (args) => {
  return (
    <div className="sb-css-grid-container">
      <Grid {...args}>
        <Column
          sm={{ span: 1, start: 4 }}
          md={{ span: 2, start: 7 }}
          lg={{ span: 4, start: 13 }}>
          span, start
        </Column>
        <Column
          sm={{ span: 2, end: 5 }}
          md={{ span: 4, end: 9 }}
          lg={{ span: 8, end: 17 }}>
          span, end
        </Column>
        <Column
          sm={{ start: 1, end: 4 }}
          md={{ start: 3, end: 9 }}
          lg={{ start: 5, end: 17 }}>
          start, end
        </Column>
      </Grid>
    </div>
  );
};
