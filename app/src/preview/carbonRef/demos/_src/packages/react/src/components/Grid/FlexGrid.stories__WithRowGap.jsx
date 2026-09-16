import './FlexGrid.stories.scss';
import PropTypes from 'prop-types';
import { FlexGrid, Row, Column } from '@carbon/react';
import mdx from './FlexGrid.mdx';


function DemoContent({ children }) {
  return (
    <div className="outside">
      <div className="inside">{children}</div>
    </div>
  );
}

DemoContent.propTypes = {
  children: PropTypes.node,
};

const args = {
  align: 'center',
  condensed: false,
  fullWidth: false,
  narrow: false,
  withRowGap: false,
};

const argTypes = {
  align: {
    control: { type: 'select' },
    options: ['start', 'center', 'end'],
  },
  condensed: {
    control: { type: 'boolean' },
  },
  fullWidth: {
    control: { type: 'boolean' },
  },
  narrow: {
    control: { type: 'boolean' },
  },
  withRowGap: {
    control: { type: 'boolean' },
  },
};

export default {
  title: 'Elements/FlexGrid',
  component: FlexGrid,
  subcomponents: {
    Row,
    Column,
  },
  decorators: [(storyFn) => <div id="templates">{storyFn()}</div>],
  parameters: {
    controls: {
      include: Object.keys(argTypes),
    },
    docs: {
      page: mdx,
    },
  },
  args,
  argTypes,
};

export const WithRowGap = (args) => {
  return (
    <div id="templates">
      <FlexGrid {...args}>
        <Row>
          <Column sm={4} md={4} lg={4}>
            <DemoContent>Row 1, Col 1</DemoContent>
          </Column>
          <Column sm={4} md={4} lg={4}>
            <DemoContent>Row 1, Col 2</DemoContent>
          </Column>
          <Column sm={4} md={4} lg={4}>
            <DemoContent>Row 1, Col 3</DemoContent>
          </Column>
          <Column sm={4} md={4} lg={4}>
            <DemoContent>Row 1, Col 4</DemoContent>
          </Column>
        </Row>
        <Row>
          <Column sm={4} md={4} lg={4}>
            <DemoContent>Row 2, Col 1</DemoContent>
          </Column>
          <Column sm={4} md={4} lg={4}>
            <DemoContent>Row 2, Col 2</DemoContent>
          </Column>
          <Column sm={4} md={4} lg={4}>
            <DemoContent>Row 2, Col 3</DemoContent>
          </Column>
          <Column sm={4} md={4} lg={4}>
            <DemoContent>Row 2, Col 4</DemoContent>
          </Column>
        </Row>
      </FlexGrid>
    </div>
  );
};

WithRowGap.args = {
  withRowGap: true,
};

WithRowGap.argTypes = {
  withRowGap: {
    table: { readonly: true },
  },
};
