import React from 'react';
import { Tabs } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

const App: React.FC = () => (
  <Tabs
    onChange={onChange}
    type="card"
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