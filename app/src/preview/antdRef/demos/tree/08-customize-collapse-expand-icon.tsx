// @ts-nocheck
import React from 'react';
import { DownOutlined } from '../_icons';
import { Tree } from 'antd';
import type { TreeDataNode, TreeProps } from 'antd';

const treeData: TreeDataNode[] = [
  {
    title: '부모 1',
    key: '0-0',
    children: [
      {
        title: '부모 1-0',
        key: '0-0-0',
        children: [
          {
            title: '잎',
            key: '0-0-0-0',
          },
          {
            title: '잎',
            key: '0-0-0-1',
          },
          {
            title: '잎',
            key: '0-0-0-2',
          },
        ],
      },
      {
        title: '부모 1-1',
        key: '0-0-1',
        children: [
          {
            title: '잎',
            key: '0-0-1-0',
          },
        ],
      },
      {
        title: '부모 1-2',
        key: '0-0-2',
        children: [
          {
            title: '잎',
            key: '0-0-2-0',
          },
          {
            title: '잎',
            key: '0-0-2-1',
          },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  return (
    <Tree
      showLine
      switcherIcon={({ expanded }) => (
        <DownOutlined
          style={{ transform: `rotate(${expanded ? 0 : -90}deg)`, transition: 'transform 0.3s' }}
        />
      )}
      defaultExpandedKeys={['0-0-0']}
      onSelect={onSelect}
      treeData={treeData}
    />
  );
};

export default App;