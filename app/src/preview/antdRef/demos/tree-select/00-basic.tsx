// @ts-nocheck
import React, { useState } from 'react';
import { TreeSelect } from 'antd';
import type { TreeSelectProps } from 'antd';

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
            title: '잎1',
          },
          {
            value: '잎2',
            title: '잎2',
          },
          {
            value: '잎3',
            title: '잎3',
          },
          {
            value: '잎4',
            title: '잎4',
          },
          {
            value: '잎5',
            title: '잎5',
          },
          {
            value: '잎6',
            title: '잎6',
          },
        ],
      },
      {
        value: '부모 1-1',
        title: '부모 1-1',
        children: [
          {
            value: '잎11',
            title: <b style={{ color: '#08c' }}>잎11</b>,
          },
        ],
      },
    ],
  },
];
const App: React.FC = () => {
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const onPopupScroll: TreeSelectProps['onPopupScroll'] = (e) => {
    console.log('onPopupScroll', e);
  };

  return (
    <TreeSelect
      showSearch
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
      onPopupScroll={onPopupScroll}
    />
  );
};

export default App;