import React from 'react';
import { Tabs } from 'antd';

const App: React.FC = () => (
  <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: '탭 1',
        key: '1',
        children: '탭 1',
      },
      {
        label: '탭 2',
        key: '2',
        children: '탭 2',
        disabled: true,
      },
      {
        label: '탭 3',
        key: '3',
        children: '탭 3',
      },
    ]}
  />
);

export default App;