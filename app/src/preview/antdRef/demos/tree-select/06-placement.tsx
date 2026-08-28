// @ts-nocheck
import React, { useState } from 'react';
import type { GetProp, RadioChangeEvent, TreeSelectProps } from 'antd';
import { Radio, TreeSelect } from 'antd';

type SelectCommonPlacement = GetProp<TreeSelectProps, 'placement'>;

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
        ],
      },
      {
        value: '부모 1-1',
        title: '부모 1-1',
        children: [
          {
            value: '잎3',
            title: <b style={{ color: '#08c' }}>잎3</b>,
          },
        ],
      },
    ],
  },
];
const App: React.FC = () => {
  const [placement, setPlacement] = useState<SelectCommonPlacement>('topLeft');

  const placementChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <Radio.Group value={placement} onChange={placementChange}>
        <Radio.Button value="topLeft">topLeft</Radio.Button>
        <Radio.Button value="topRight">topRight</Radio.Button>
        <Radio.Button value="bottomLeft">bottomLeft</Radio.Button>
        <Radio.Button value="bottomRight">bottomRight</Radio.Button>
      </Radio.Group>
      <br />
      <br />

      <TreeSelect
        showSearch
        styles={{
          popup: {
            root: {
              maxHeight: 400,
              overflow: 'auto',
              minWidth: 300,
            },
          },
        }}
        placeholder="골라 주세요"
        popupMatchSelectWidth={false}
        placement={placement}
        allowClear
        treeDefaultExpandAll
        treeData={treeData}
      />
    </>
  );
};

export default App;