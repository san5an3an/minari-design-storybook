// @ts-nocheck
import React, { useState } from 'react';
import { TreeSelect } from 'antd';

const treeData = [
  {
    title: '마디1',
    value: '0-0',
    children: [
      {
        title: '자식 마디1',
        value: '0-0-1',
      },
      {
        title: '자식 마디2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: '마디2',
    value: '0-1',
  },
];

const App: React.FC = () => {
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <TreeSelect
      style={{ width: '100%' }}
      value={value}
      styles={{
        popup: {
          root: { maxHeight: 400, overflow: 'auto' },
        },
      }}
      treeData={treeData}
      placeholder="골라 주세요"
      treeDefaultExpandAll
      onChange={onChange}
    />
  );
};

export default App;