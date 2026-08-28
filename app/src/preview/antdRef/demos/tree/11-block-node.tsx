// @ts-nocheck
import React from 'react';
import { Tree } from 'antd';
import type { TreeDataNode } from 'antd';

const treeData: TreeDataNode[] = [
  {
    title: '부모',
    key: '0',
    children: [
      {
        title: '자식 1',
        key: '0-0',
        disabled: true,
      },
      {
        title: '자식 2',
        key: '0-1',
        disableCheckbox: true,
      },
    ],
  },
];

const App: React.FC = () => (
  <Tree checkable defaultSelectedKeys={['0-1']} defaultExpandAll treeData={treeData} blockNode />
);

export default App;