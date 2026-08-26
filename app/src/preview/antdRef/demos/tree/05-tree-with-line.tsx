import React, { useState } from 'react';
import { CarryOutOutlined, CheckOutlined, FormOutlined } from '../_icons';
import { Select, Switch, Tree } from 'antd';
import type { TreeDataNode } from 'antd';

const treeData: TreeDataNode[] = [
  {
    title: '부모 1',
    key: '0-0',
    icon: <CarryOutOutlined />, children: [
      {
        title: '부모 1-0',
        key: '0-0-0',
        icon: <CarryOutOutlined />, children: [
          { title: '잎', key: '0-0-0-0', icon: <CarryOutOutlined /> },
          {
            title: (
              <>
                <div>여러 줄 제목</div>
                <div>여러 줄 제목</div>
              </>
            ), key: '0-0-0-1', icon: <CarryOutOutlined />,
          },
          { title: '잎', key: '0-0-0-2', icon: <CarryOutOutlined /> },
        ],
      },
      {
        title: '부모 1-1',
        key: '0-0-1',
        icon: <CarryOutOutlined />, children: [{ title: '잎', key: '0-0-1-0', icon: <CarryOutOutlined /> }],
      },
      {
        title: '부모 1-2',
        key: '0-0-2',
        icon: <CarryOutOutlined />, children: [
          { title: '잎', key: '0-0-2-0', icon: <CarryOutOutlined /> },
          {
            title: '잎',
            key: '0-0-2-1',
            icon: <CarryOutOutlined />, switcherIcon: <FormOutlined />,
          },
        ],
      },
    ],
  },
  {
    title: '부모 2',
    key: '0-1',
    icon: <CarryOutOutlined />, children: [
      {
        title: '부모 2-0',
        key: '0-1-0',
        icon: <CarryOutOutlined />, children: [
          { title: '잎', key: '0-1-0-0', icon: <CarryOutOutlined /> },
          { title: '잎', key: '0-1-0-1', icon: <CarryOutOutlined /> },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  const [showLine, setShowLine] = useState<boolean>(true);
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [showLeafIcon, setShowLeafIcon] = useState<React.ReactNode>(true);

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log('selected', selectedKeys, info);
  };

  const handleLeafIconChange = (value: 'true' | 'false' | 'custom') => {
    if (value === 'custom') {
      return setShowLeafIcon(<CheckOutlined />);
    }

    if (value === 'true') {
      return setShowLeafIcon(true);
    }

    return setShowLeafIcon(false);
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        showLine:{' '}
        <Switch aria-label="잇는 선 보이기" checked={!!showLine} onChange={setShowLine} />
        <br />
        <br />
        showIcon: <Switch aria-label="마디 아이콘 보이기" checked={showIcon} onChange={setShowIcon} />
        <br />
        <br />
        showLeafIcon:{' '}
        <Select
          aria-label="잎 아이콘"
          defaultValue="true"
          onChange={handleLeafIconChange}
          options={[
            { label: 'True', value: 'true' },
            { label: 'False', value: 'false' },
            { label: '직접 정한 아이콘', value: 'custom' },
          ]}
        />
      </div>
      <Tree
        showLine={showLine ? { showLeafIcon } : false}
        showIcon={showIcon}
        defaultExpandedKeys={['0-0-0']}
        onSelect={onSelect}
        treeData={treeData}
      />
    </div>
  );
};

export default App;