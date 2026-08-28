// @ts-nocheck
import React, { useState } from 'react';
import { SettingOutlined } from '../_icons';
import type { CollapseProps } from 'antd';
import { Collapse, Select } from 'antd';

const text = `개는 사람과 함께 살아온 동물이에요. 충직하고 한결같아서 세계 곳곳의 집에서 반가운 식구로 지내요.`;

const App: React.FC = () => {
  const [expandIconPlacement, setExpandIconPlacement] =
    useState<CollapseProps['expandIconPlacement']>('start');

  const onPlacementChange = (newExpandIconPlacement: CollapseProps['expandIconPlacement']) => {
    setExpandIconPlacement(newExpandIconPlacement);
  };

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: '첫 번째 판 머리예요',
      children: <div>{text}</div>,
      extra: genExtra(),
    },
    {
      key: '2',
      label: '두 번째 판 머리예요',
      children: <div>{text}</div>,
      extra: genExtra(),
    },
    {
      key: '3',
      label: '세 번째 판 머리예요',
      children: <div>{text}</div>,
      extra: genExtra(),
    },
  ];

  return (
    <>
      <Collapse
        defaultActiveKey={['1']}
        onChange={onChange}
        expandIconPlacement={expandIconPlacement}
        items={items}
      />
      <br />
      <span>펼침 아이콘 자리: </span>
      <Select
        value={expandIconPlacement}
        style={{ margin: '0 8px' }}
        onChange={onPlacementChange}
        options={[
          { label: 'start', value: 'start' },
          { label: 'end', value: 'end' },
        ]}
      />
    </>
  );
};

export default App;