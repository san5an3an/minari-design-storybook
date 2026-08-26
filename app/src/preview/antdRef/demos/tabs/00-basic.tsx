import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '탭 1',
    children: '탭 패널 1의 내용',
  },
  {
    key: '2',
    label: '탭 2',
    children: '탭 패널 2의 내용',
  },
  {
    key: '3',
    label: '탭 3',
    children: '탭 패널 3의 내용',
  },
];

const App: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default App;