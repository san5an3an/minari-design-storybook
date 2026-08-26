import React, { useState } from 'react';
import { CarryOutOutlined } from '../_icons';
import { Space, Switch, TreeSelect } from 'antd';

const treeData = [
  {
    value: '부모 1',
    title: '부모 1',
    icon: <CarryOutOutlined />, children: [
      {
        value: '부모 1-0',
        title: '부모 1-0',
        icon: <CarryOutOutlined />, children: [
          {
            value: '잎1',
            title: '잎1',
            icon: <CarryOutOutlined />,
          },
          {
            value: '잎2',
            title: '잎2',
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        value: '부모 1-1',
        title: '부모 1-1',
        icon: <CarryOutOutlined />, children: [
          {
            value: 'sss',
            title: 'sss',
            icon: <CarryOutOutlined />,
          },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  const [treeLine, setTreeLine] = useState(true);
  const [showLeafIcon, setShowLeafIcon] = useState(false);
  const [showIcon, setShowIcon] = useState<boolean>(false);

  return (
    <Space vertical>
      <Switch
        checkedChildren="showIcon"
        unCheckedChildren="showIcon"
        checked={showIcon}
        onChange={() => setShowIcon(!showIcon)}
      />
      <Switch
        checkedChildren="treeLine"
        unCheckedChildren="treeLine"
        checked={treeLine}
        onChange={() => setTreeLine(!treeLine)}
      />
      <Switch
        disabled={!treeLine}
        checkedChildren="showLeafIcon"
        unCheckedChildren="showLeafIcon"
        checked={showLeafIcon}
        onChange={() => setShowLeafIcon(!showLeafIcon)}
      />
      <TreeSelect
        treeLine={treeLine && { showLeafIcon }}
        style={{ width: 300 }}
        treeData={treeData}
        treeIcon={showIcon}
      />
    </Space>
  );
};

export default App;