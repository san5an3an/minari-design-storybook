// @ts-nocheck
import React from 'react';
import { DownOutlined } from '../_icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';

const items: MenuProps['items'] = [
  {
    label: '첫 번째 메뉴 항목',
    key: '1',
  },
  {
    label: '두 번째 메뉴 항목',
    key: '2',
  },
  {
    label: '세 번째 메뉴 항목',
    key: '3',
  },
];

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const onClick: MenuProps['onClick'] = ({ key }) => {
    messageApi.info(`항목 ${key} 를 눌렀어요`);
  };

  return (
    <>
      {contextHolder}
      <Dropdown menu={{ items, onClick }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            올린 뒤 메뉴 항목을 눌러 보세요
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </>
  );
};

export default App;