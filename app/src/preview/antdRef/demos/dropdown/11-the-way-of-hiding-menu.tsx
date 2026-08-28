// @ts-nocheck
import React, { useState } from 'react';
import { DownOutlined } from '../_icons';
import type { DropdownProps, MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === '3') {
      setOpen(false);
    }
  };

  const handleOpenChange: DropdownProps['onOpenChange'] = (nextOpen, info) => {
    if (info.source === 'trigger' || nextOpen) {
      setOpen(nextOpen);
    }
  };

  const items: MenuProps['items'] = [
    {
      label: '나를 누르면 메뉴가 안 닫혀요.',
      key: '1',
    },
    {
      label: '나를 눌러도 메뉴가 안 닫혀요.',
      key: '2',
    },
    {
      label: '나를 누르면 메뉴가 닫혀요.',
      key: '3',
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
        onClick: handleMenuClick,
      }}
      onOpenChange={handleOpenChange}
      open={open}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          여기에 올려 보세요
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default App;