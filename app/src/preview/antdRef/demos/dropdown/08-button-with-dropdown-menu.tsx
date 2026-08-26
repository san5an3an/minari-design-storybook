import React from 'react';
import { DownOutlined, EllipsisOutlined, UserOutlined } from '../_icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';

const items: MenuProps['items'] = [
  {
    label: '첫 번째 메뉴 항목',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '두 번째 메뉴 항목',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '세 번째 메뉴 항목',
    key: '3',
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: '4rd menu item',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    messageApi.info('왼쪽 버튼을 눌렀어요.');
    console.log('왼쪽 버튼을 눌러 보세요', e);
  };

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    messageApi.info('메뉴 항목을 눌렀어요.');
    console.log('click', e);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
      {contextHolder}
      <Space wrap>
        <Space.Compact>
          <Button onClick={handleButtonClick}>Dropdown</Button>
          <Dropdown menu={menuProps} placement="bottomRight">
            <Button icon={<EllipsisOutlined />} />
          </Dropdown>
        </Space.Compact>
        <Space.Compact>
          <Button onClick={handleButtonClick}>Dropdown</Button>
          <Dropdown menu={menuProps} placement="bottomRight">
            <Button icon={<UserOutlined />} />
          </Dropdown>
        </Space.Compact>
        <Space.Compact>
          <Button onClick={handleButtonClick} disabled>
            Dropdown
          </Button>
          <Dropdown menu={menuProps} placement="bottomRight" disabled>
            <Button icon={<EllipsisOutlined />} disabled />
          </Dropdown>
        </Space.Compact>
        <Space.Compact>
          <Tooltip title="tooltip">
            <Button onClick={handleButtonClick}>툴팁 있음</Button>
          </Tooltip>
          <Dropdown menu={menuProps} placement="bottomRight">
            <Button loading />
          </Dropdown>
        </Space.Compact>
        <Dropdown menu={menuProps}>
          <Button onClick={handleButtonClick} icon={<DownOutlined />} iconPlacement="end">
            Button
          </Button>
        </Dropdown>
        <Space.Compact>
          <Button onClick={handleButtonClick} danger>
            위험
          </Button>
          <Dropdown menu={menuProps} placement="bottomRight">
            <Button icon={<EllipsisOutlined />} danger />
          </Dropdown>
        </Space.Compact>
      </Space>
    </>
  );
};

export default App;