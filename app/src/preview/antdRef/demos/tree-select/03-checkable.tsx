// @ts-nocheck
import React, { useState } from 'react';
import { TreeSelect } from 'antd';

const { SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    title: '마디1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: '자식 마디1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: '마디2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: '자식 마디3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: '자식 마디4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: '자식 마디5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

const App: React.FC = () => {
  const [value, setValue] = useState(['0-0-0']);

  const onChange = (newValue: string[]) => {
    console.log('onChange ', newValue);
    setValue(newValue);
  };

  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: '골라 주세요',
    style: {
      width: '100%',
    },
  };

  return <TreeSelect {...tProps} />;
};

export default App;