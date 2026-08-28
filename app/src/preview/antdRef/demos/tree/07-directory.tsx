// @ts-nocheck
import React from 'react';
import { Tree } from 'antd';
import type { GetProps, TreeDataNode } from 'antd';

type DirectoryTreeProps = GetProps<typeof Tree.DirectoryTree>;

const { DirectoryTree } = Tree;

const treeData: TreeDataNode[] = [
  {
    title: '부모 0',
    key: '0-0',
    children: [
      { title: '잎 0-0', key: '0-0-0', isLeaf: true },
      { title: '잎 0-1', key: '0-0-1', isLeaf: true },
    ],
  },
  {
    title: '부모 1',
    key: '0-1',
    children: [
      { title: '잎 1-0', key: '0-1-0', isLeaf: true },
      { title: '잎 1-1', key: '0-1-1', isLeaf: true },
    ],
  },
];

const App: React.FC = () => {
  const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
    console.log('골라서 열기', keys, info);
  };

  const onExpand: DirectoryTreeProps['onExpand'] = (keys, info) => {
    console.log('펼치기', keys, info);
  };

  return (
    <DirectoryTree
      multiple
      draggable
      defaultExpandAll
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={treeData}
    />
  );
};

export default App;