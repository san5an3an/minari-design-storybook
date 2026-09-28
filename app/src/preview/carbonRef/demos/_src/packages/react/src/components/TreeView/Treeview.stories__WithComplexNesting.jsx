// @ts-nocheck
import { action } from 'storybook/actions';
import { TreeView, TreeNode } from '@carbon/react';
import mdx from './TreeView.mdx';
import './story.scss';


export default {
  title: 'components/TreeView',
  component: TreeView,
  subcomponents: {
    TreeNode,
  },
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: ['label'],
    },
  },
  args: {
    onSelect: action('onSelect'),
  },
};

const Nested = () => {
  return <TreeNode key={21} value="Nested" label="Nested" />;
};

export const WithComplexNesting = (args) => {
  return (
    <TreeView label="Tree View with Complex Nesting" {...args}>
      <TreeNode id="1" value="A.I." label="A.I." isExpanded>
        {/* Pattern 1: A TreeNode wrapped in a simple <div> */}
        <div>
          <TreeNode id="1-1" value="Sub 1" label="Sub 1 (in a div)" />
        </div>
        <TreeNode id="1-2" value="Sub 2" label="Sub 2 (direct child)">
          <TreeNode id="1-2-1" value="Sub 2.1" label="Sub 2.1" />
        </TreeNode>
      </TreeNode>

      <TreeNode id="2" value="Analytics" label="Analytics" isExpanded>
        {/* Pattern 2: A TreeNode rendered from an imported component */}
        <Nested />
      </TreeNode>

      <TreeNode id="3" value="Trust" label="Trust" />
    </TreeView>
  );
};

WithComplexNesting.args = {
  hideLabel: true,
  multiselect: true,
  selected: ['1-1'],
};
