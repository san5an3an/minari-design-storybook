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

export const Subgrid = (args) => {
  return (
    <div className="sb-css-grid-container">
      <Grid {...args}>
        <Column sm={2} md={4} lg={3}>
          <p>Small: Span 2 of 4</p>
          <p>Medium: Span 4 of 8</p>
          <p>Large: Span 3 of 16</p>
        </Column>
        <Column sm={2} md={4} lg={10}>
          <p>Small: Span 2 of 4</p>
          <p>Medium: Span 4 of 8</p>
          <p>Large: Span 10 of 16</p>
          <Grid className="example">
            <Column sm={1} md={1} lg={2}>
              <p>sm={1}</p> <p>md={1}</p> <p>lg={2}</p>
            </Column>
            <Column sm={1} md={1} lg={2}>
              <p>sm={1}</p> <p>md={1}</p> <p>lg={2}</p>
            </Column>
            <Column sm={0} md={1} lg={1}>
              <p>sm={0}</p> <p>md={1}</p> <p>lg={1}</p>
            </Column>
            <Column sm={0} md={1} lg={1}>
              <p>sm={0}</p> <p>md={1}</p> <p>lg={1}</p>
            </Column>
            <Column sm={0} md={0} lg={1}>
              <p>sm={0}</p> <p>md={0}</p> <p>lg={1}</p>
            </Column>
            <Column sm={0} md={0} lg={1}>
              <p>sm={0}</p> <p>md={0}</p> <p>lg={1}</p>
            </Column>
            <Column sm={0} md={0} lg={1}>
              <p>sm={0}</p> <p>md={0}</p> <p>lg={1}</p>
            </Column>
            <Column sm={0} md={0} lg={1}>
              <p>sm={0}</p> <p>md={0}</p> <p>lg={1}</p>
            </Column>
          </Grid>
        </Column>
        <Column sm={0} md={0} lg={3}>
          <p>Small: Span 0 of 4</p>
          <p>Medium: Span 0 of 8</p>
          <p>Large: Span 3 of 16</p>
        </Column>
      </Grid>

      <h5>Wide</h5>
      <Grid>
        <Column sm={4} md={4} lg={4} />
        <Column sm={4} md={4} lg={4} />
        <Column sm={4} md={4} lg={4} />
        <Column sm={4} md={4} lg={4} />
        <Column sm={4} md={8} lg={16}>
          <Grid>
            <Column sm={4} md={4} lg={4} />
            <Column sm={4} md={4} lg={4} />
            <Column sm={4} md={4} lg={4} />
            <Column sm={4} md={4} lg={4} />
          </Grid>
        </Column>
      </Grid>
      <h5>Narrow</h5>
      <Grid narrow>
        <Column sm={4} md={4} lg={4} />
        <Column sm={4} md={4} lg={4} />
        <Column sm={4} md={4} lg={4} />
        <Column sm={4} md={4} lg={4} />
        <Column sm={4} md={8} lg={16}>
          <Grid narrow>
            <Column sm={4} md={4} lg={4} />
            <Column sm={4} md={4} lg={4} />
            <Column sm={4} md={4} lg={4} />
            <Column sm={4} md={4} lg={4} />
          </Grid>
        </Column>
      </Grid>
      <h5>Condensed</h5>
      <Grid condensed>
        <Column sm={4} md={4} lg={4} />
        <Column sm={4} md={4} lg={4} />
        <Column sm={4} md={4} lg={4} />
        <Column sm={4} md={4} lg={4} />
        <Column sm={4} md={8} lg={16}>
          <Grid condensed>
            <Column sm={4} md={4} lg={4} />
            <Column sm={4} md={4} lg={4} />
            <Column sm={4} md={4} lg={4} />
            <Column sm={4} md={4} lg={4} />
          </Grid>
        </Column>
      </Grid>
    </div>
  );
};
