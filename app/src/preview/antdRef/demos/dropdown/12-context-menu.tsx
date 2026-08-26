import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, theme } from 'antd';

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
  const {
    token: { colorBgLayout, colorTextTertiary },
  } = theme.useToken();

  return (
    <Dropdown menu={{ items }} trigger={['contextMenu']}>
      <div
        style={{
          color: colorTextTertiary,
          background: colorBgLayout,
          height: 200,
          textAlign: 'center',
          lineHeight: '200px',
        }}
      >
        여기서 오른쪽 눌러 보세요
      </div>
    </Dropdown>
  );
};

export default App;