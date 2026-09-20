// @ts-nocheck
import './Grid.stories.scss';
import { Grid, Column, ColumnHang } from '@carbon/react';
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

export const MixedGutterModes = (args) => {
  return (
    <div className="sb-css-grid-container">
      <Grid {...args}>
        <Column span={8}>
          <Grid>
            <Column span={8}>
              <Grid narrow>
                <Column>
                  <ColumnHang>Text</ColumnHang>
                </Column>
                <Column>
                  <ColumnHang>Text</ColumnHang>
                </Column>
                <Column>
                  <ColumnHang>Text</ColumnHang>
                </Column>
                <Column>
                  <ColumnHang>Text</ColumnHang>
                </Column>
                <Column span={4}>
                  <Grid>
                    <Column>Text</Column>
                    <Column>Text</Column>
                    <Column span={2}>
                      <Grid condensed>
                        <Column>
                          <ColumnHang>Text</ColumnHang>
                        </Column>
                        <Column>
                          <ColumnHang>Text</ColumnHang>
                        </Column>
                      </Grid>
                    </Column>
                  </Grid>
                </Column>
              </Grid>
            </Column>
          </Grid>
        </Column>
      </Grid>
      <Grid {...args} narrow>
        <Column span={8}>
          <Grid>
            <Column span={4} />
            <Column span={4}>
              <Grid narrow>
                <Column>
                  <ColumnHang>Text</ColumnHang>
                </Column>
                <Column>
                  <ColumnHang>Text</ColumnHang>
                </Column>
                <Column>
                  <ColumnHang>Text</ColumnHang>
                </Column>
                <Column>
                  <ColumnHang>Text</ColumnHang>
                </Column>
              </Grid>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </div>
  );
};
