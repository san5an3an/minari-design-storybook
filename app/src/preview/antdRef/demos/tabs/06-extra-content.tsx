// @ts-nocheck
import React, { useMemo, useState } from 'react';
import { Button, Checkbox, Divider, Tabs } from 'antd';

const CheckboxGroup = Checkbox.Group;

const operations = <Button>덧붙임 동작</Button>;

const operationsSlot: Record<PositionType, React.ReactNode> = {
  left: <Button style={{ marginInlineEnd: 16 }}>왼쪽 덧붙임 동작</Button>, right: <Button style={{ marginInlineStart: 16 }}>오른쪽 덧붙임 동작</Button>,
};

const options = ['left', 'right'];

type PositionType = 'left' | 'right';

type TabBarExtraMap = Partial<Record<PositionType, React.ReactNode>>;

const items = Array.from({ length: 3 }).map((_, i) => {
  const id = String(i + 1);
  return {
    label: `탭 ${id}`,
    key: id,
    children: `탭 ${id}의 내용`,
  };
});

const App: React.FC = () => {
  const [position, setPosition] = useState<PositionType[]>(['left', 'right']);

  const slot = useMemo(() => {
    if (position.length === 0) {
      return null;
    }
    return position.reduce<TabBarExtraMap>(
      (acc, direction) => ({ ...acc, [direction]: operationsSlot[direction] }),
      {},
    );
  }, [position]);

  return (
    <>
      <Tabs tabBarExtraContent={operations} items={items} />
      <br />
      <br />
      <br />
      <div>방향을 정하거나 양쪽 다 줄 수도 있어요</div>
      <Divider />
      <CheckboxGroup<PositionType> options={options} value={position} onChange={setPosition} />
      <br />
      <br />
      <Tabs tabBarExtraContent={slot} items={items} />
    </>
  );
};

export default App;