import React from 'react';
import { DownOutlined } from '../_icons';
import { Button, Divider, Dropdown, Space, theme } from 'antd';
import type { MenuProps } from 'antd';

const { useToken } = theme;

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        첫 번째 메뉴 항목
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
];

const App: React.FC = () => {
  const { token } = useToken();

  const contentStyle: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const menuStyle: React.CSSProperties = {
    boxShadow: 'none',
  };

  return (
    <Dropdown
      menu={{ items }}
      popupRender={(menu) => (
        <div style={contentStyle}>
          {React.cloneElement(
            menu as React.ReactElement<{
              style: React.CSSProperties;
            }>,
            { style: menuStyle },
          )}
          <Divider style={{ margin: 0 }} />
          <Space style={{ padding: 8 }}>
            <Button type="primary">눌러 보세요!</Button>
          </Space>
        </div>
      )}
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