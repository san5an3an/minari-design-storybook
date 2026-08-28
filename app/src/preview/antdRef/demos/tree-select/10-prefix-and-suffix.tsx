// @ts-nocheck
import React, { useState } from 'react';
import { SmileOutlined } from '../_icons';
import { TreeSelect } from 'antd';

const icon = <SmileOutlined />;
const treeData = [
  {
    value: '부모 1',
    title: '부모 1',
    children: [
      {
        value: '부모 1-0',
        title: '부모 1-0',
        children: [
          {
            value: '잎1',
            title: '내 잎',
          },
          {
            value: '잎2',
            title: '당신의 잎',
          },
        ],
      },
      {
        value: '부모 1-1',
        title: '부모 1-1',
        children: [
          {
            value: 'sss',
            title: <b style={{ color: '#08c' }}>sss</b>,
          },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <>
      <TreeSelect
        showSearch
        suffixIcon={icon}
        style={{ width: '100%' }}
        value={value}
        styles={{
          popup: {
            root: { maxHeight: 400, overflow: 'auto' },
          },
        }}
        placeholder="골라 주세요"
        allowClear
        treeDefaultExpandAll
        onChange={onChange}
        treeData={treeData}
      />
      <br />
      <br />
      <TreeSelect
        showSearch
        prefix="앞 장식"
        style={{ width: '100%' }}
        value={value}
        styles={{
          popup: {
            root: { maxHeight: 400, overflow: 'auto' },
          },
        }}
        placeholder="골라 주세요"
        allowClear
        treeDefaultExpandAll
        onChange={onChange}
        treeData={treeData}
      />
    </>
  );
};

export default App;