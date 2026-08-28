// @ts-nocheck
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { TreeSelect } from 'antd';

const MAX_COUNT = 3;

const treeData = [
  {
    title: '부모 1',
    value: 'parent1',
    children: [
      {
        title: '자식 1-1',
        value: 'child1-1',
      },
      {
        title: '자식 1-2',
        value: 'child1-2',
      },
    ],
  },
  {
    title: '부모 2',
    value: 'parent2',
    children: [
      {
        title: '자식 2-1',
        value: 'child2-1',
      },
      {
        title: '자식 2-2',
        value: 'child2-2',
      },
    ],
  },
];

const App: React.FC = () => {
  const [value, setValue] = React.useState<string[]>(['child1-1']);

  const onChange = (newValue: string[]) => {
    setValue(newValue);
  };

  const suffix = (
    <>
      <span>
        {value.length} / {MAX_COUNT}
      </span>
      <DownOutlined />
    </>
  );

  return (
    <TreeSelect
      treeData={treeData}
      value={value}
      onChange={onChange}
      multiple
      maxCount={MAX_COUNT}
      style={{ width: '100%' }}
      suffixIcon={suffix}
      treeCheckable
      placeholder="골라 주세요"
      showCheckedStrategy={TreeSelect.SHOW_CHILD}
    />
  );
};

export default App;