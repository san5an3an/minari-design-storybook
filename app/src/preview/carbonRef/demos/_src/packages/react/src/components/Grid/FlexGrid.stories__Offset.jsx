// @ts-nocheck
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

export const Offset = (args) => {
  return (
    <div id="templates">
      <FlexGrid {...args}>
        <Row>
          <Column sm={{ span: 1, offset: 3 }}>
            <DemoContent>Small: offset 3</DemoContent>
          </Column>
          <Column sm={{ span: 2, offset: 2 }}>
            <DemoContent>Small: offset 2</DemoContent>
          </Column>
          <Column sm={{ span: 3, offset: 1 }}>
            <DemoContent>Small: offset 1</DemoContent>
          </Column>
          <Column sm={{ span: 4, offset: 0 }}>
            <DemoContent>Small: offset 0</DemoContent>
          </Column>
        </Row>
      </FlexGrid>
    </div>
  );
};
