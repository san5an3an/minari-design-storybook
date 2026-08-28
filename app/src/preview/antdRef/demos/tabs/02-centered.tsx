// @ts-nocheck
import React from 'react';
import { Tabs } from 'antd';

const App: React.FC = () => (
  <Tabs
    defaultActiveKey="1"
    centered
    items={Array.from({ length: 3 }).map((_, i) => {
      const id = String(i + 1);
      return {
        label: `탭 ${id}`,
        key: id,
        children: `탭 판 ${id}의 내용`,
      };
    })}
  />
);

export default App;