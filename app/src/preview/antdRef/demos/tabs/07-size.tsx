import React, { useRef, useState } from 'react';
import type { RadioChangeEvent, TabsProps } from 'antd';
import { Radio, Tabs } from 'antd';

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const App: React.FC = () => {
  const [size, setSize] = useState<'small' | 'medium' | 'large'>('small');
  const [activeKey, setActiveKey] = useState('1');
  const [items, setItems] = useState<TabsProps['items']>([
    {
      label: '탭 1',
      key: '1',
      children: '고칠 수 있는 탭 1의 내용',
    },
    {
      label: '탭 2',
      key: '2',
      children: '고칠 수 있는 탭 2의 내용',
    },
    {
      label: '탭 3',
      key: '3',
      children: '고칠 수 있는 탭 3의 내용',
    },
  ]);
  const newTabIndex = useRef(0);

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    setItems([
      ...(items || []),
      {
        label: '새 탭',
        key: newActiveKey,
        children: '새 탭의 내용',
      },
    ]);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: TargetKey) => {
    if (!items) {
      return;
    }
    const targetIndex = items.findIndex((item) => item.key === targetKey);
    const newItems = items.filter((item) => item.key !== targetKey);

    if (newItems.length && targetKey === activeKey) {
      const newActiveKey =
        newItems[targetIndex === newItems.length ? targetIndex - 1 : targetIndex].key;
      setActiveKey(newActiveKey);
    }

    setItems(newItems);
  };

  const onEdit = (targetKey: TargetKey, action: 'add' | 'remove') => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  const onChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  return (
    <div>
      <Radio.Group value={size} onChange={onChange} style={{ marginBottom: 16 }}>
        <Radio.Button value="small">작음</Radio.Button>
        <Radio.Button value="medium">중간</Radio.Button>
        <Radio.Button value="large">큼</Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="1"
        size={size}
        style={{ marginBottom: 32 }}
        items={Array.from({ length: 3 }).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `탭 ${id}`,
            key: id,
            children: `탭 ${id}의 내용`,
          };
        })}
      />
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={size}
        style={{ marginBottom: 32 }}
        items={Array.from({ length: 3 }).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `카드 탭 ${id}`,
            key: id,
            children: `카드 탭 ${id}의 내용`,
          };
        })}
      />
      <Tabs
        type="editable-card"
        size={size}
        activeKey={activeKey}
        onChange={setActiveKey}
        onEdit={onEdit}
        items={items}
      />
    </div>
  );
};

export default App;