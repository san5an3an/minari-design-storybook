import './Grid.stories.scss';
import { Grid, Column, GridSettings } from '@carbon/react';
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

export const WithGridSettings = (args) => {
  return (
    <div className="sb-css-grid-container">
      <GridSettings subgrid={args.subgrid}>
        <Grid>
          <Column sm={4} md={4} lg={4}>
            <p>Column 1</p>
          </Column>
          <Column sm={4} md={4} lg={4}>
            <p>Column 2</p>
          </Column>
          <Column sm={4} md={4} lg={4}>
            <p>Column 3</p>
          </Column>
          <Column sm={4} md={4} lg={4}>
            <p>Column 4</p>
          </Column>
        </Grid>
      </GridSettings>
    </div>
  );
};

WithGridSettings.args = {
  subgrid: false,
};

WithGridSettings.argTypes = {
  subgrid: {
    control: 'boolean',
    description: 'If true, will specify whether subgrid should be enabled',
  },
  align: {
    control: false,
  },
  condensed: {
    control: false,
  },
  fullWidth: {
    control: false,
  },
  narrow: {
    control: false,
  },
  withRowGap: {
    control: false,
  },
};

WithGridSettings.parameters = {
  controls: {
    include: ['subgrid'],
  },
};
