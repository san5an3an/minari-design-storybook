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

export const ResponsiveGrid = (args) => {
  return (
    <div id="templates">
      <FlexGrid {...args}>
        <Row>
          <Column sm={2} md={4} lg={6}>
            <DemoContent>
              <p>Small: Span 2 of 4</p>
              <p>Medium: Span 4 of 8</p>
              <p>Large: Span 6 of 16</p>
            </DemoContent>
          </Column>
          <Column sm={2} md={2} lg={3}>
            <DemoContent>
              <p>Small: Span 2 of 4</p>
              <p>Medium: Span 2 of 8</p>
              <p>Large: Span 3 of 16</p>
            </DemoContent>
          </Column>
          <Column sm={0} md={2} lg={3}>
            <DemoContent>
              <p>Small: Span 0 of 4</p>
              <p>Medium: Span 2 of 8</p>
              <p>Large: Span 3 of 16</p>
            </DemoContent>
          </Column>
        </Row>
      </FlexGrid>
    </div>
  );
};
